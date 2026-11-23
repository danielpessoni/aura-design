// Centraliza os comportamentos de vídeo e animação com GSAP.
function initVideoFallback() {
  // Tenta dar play nos vídeos comuns caso o navegador bloqueie o autoplay.
  document.querySelectorAll('video:not(#buildVideo)').forEach(video => {
    video.addEventListener('canplay', () => {
      video.play().catch(() => {});
    }, { once: true });
  });
}

function initBuildSequence() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  const section = document.getElementById('buildSeq');
  const stage = document.getElementById('buildStage');
  const video = document.getElementById('buildVideo');
  const progress = document.getElementById('buildProgress');
  const blocks = Array.from(document.querySelectorAll('.build-block'));

  if (!section || !stage || !video || blocks.length !== 3) return;

  gsap.registerPlugin(ScrollTrigger);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Para quem prefere menos movimento, os textos ficam visíveis e o vídeo continua em looping.
  if (prefersReducedMotion) {
    gsap.set(blocks, { opacity: 1, y: '-50%', x: 0 });
    video.setAttribute('loop', '');
    video.play().catch(() => {});
    return;
  }

  let initialized = false;

  const setup = () => {
    if (initialized) return;

    initialized = true;

    let pendingVideoTime = null;
    const applyPendingVideoSeek = () => {
      if (pendingVideoTime === null || video.readyState < 2 || video.seeking) return;

      const targetTime = pendingVideoTime;
      pendingVideoTime = null;
      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        video.currentTime = targetTime;
      }
    };

    const seekVideoToProgress = videoProgress => {
      const duration = video.duration;
      if (!Number.isFinite(duration) || duration <= 0) return;
      const lastFrameTime = Math.max(0, duration - 0.04);
      pendingVideoTime = Math.min(lastFrameTime, Math.max(0, videoProgress * duration));
      applyPendingVideoSeek();
    };
    video.addEventListener('seeked', applyPendingVideoSeek);
    video.addEventListener('loadeddata', applyPendingVideoSeek);
    video.addEventListener('canplay', applyPendingVideoSeek);

    const timeline = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => {
          const multiplier = window.matchMedia('(max-width: 820px)').matches ? 2.5 : 5;
          return '+=' + Math.round(stage.getBoundingClientRect().height * multiplier);
        },
        pin: stage,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: self => {
          seekVideoToProgress(self.progress);
          if (progress) {
            progress.textContent = String(Math.round(self.progress * 100)).padStart(2, '0') + '%';
          }
        }
      }
    });

    timeline.fromTo(blocks[0],
      { autoAlpha: 0, x: -48, y: '-50%' },
      { autoAlpha: 1, x: 0, y: '-50%', duration: 0.08 },
      0.05
    );
    timeline.to(blocks[0],
      { autoAlpha: 0, x: -32, y: '-50%', duration: 0.07, ease: 'power2.in' },
      0.28
    );

    timeline.fromTo(blocks[1],
      { autoAlpha: 0, x: 48, y: '-50%' },
      { autoAlpha: 1, x: 0, y: '-50%', duration: 0.08 },
      0.38
    );
    timeline.to(blocks[1],
      { autoAlpha: 0, x: 32, y: '-50%', duration: 0.07, ease: 'power2.in' },
      0.60
    );

    timeline.fromTo(blocks[2],
      { autoAlpha: 0, x: -48, y: '-50%' },
      { autoAlpha: 1, x: 0, y: '-50%', duration: 0.08 },
      0.70
    );
    timeline.to(blocks[2],
      { autoAlpha: 0, x: -32, y: '-50%', duration: 0.07, ease: 'power2.in' },
      0.93
    );

    timeline.set({}, {}, 1);
    const syncVideoToScroll = () => {
      video.removeAttribute('autoplay');
      video.pause();
      seekVideoToProgress(timeline.scrollTrigger.progress);
    };
    video.addEventListener('loadeddata', syncVideoToScroll, { once: true });
    video.addEventListener('canplay', syncVideoToScroll, { once: true });
    if (video.readyState >= 2) {
      syncVideoToScroll();
    } else {
      video.load();
    }

    ScrollTrigger.refresh();
  };

  setup();
}

export function initMovie() {
  initVideoFallback();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBuildSequence, { once: true });
    return;
  }

  initBuildSequence();
}

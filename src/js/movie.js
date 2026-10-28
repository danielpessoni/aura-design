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
    gsap.set(blocks, { opacity: 1, y: 0, x: 0 });
    video.setAttribute('loop', '');
    video.play().catch(() => {});
    return;
  }

  let initialized = false;

  const setup = () => {
    if (initialized) return;

    const duration = video.duration;
    if (!duration || !isFinite(duration)) return;
    initialized = true;

    // Interrompe o autoplay: neste módulo, o progresso da rolagem controla cada quadro.
    try {
      video.pause();
      video.currentTime = 0;
    } catch (error) {}

    const scrollLength = () => Math.round(window.innerHeight * 5);

    // A timeline usa o scroll como controle de tempo dos textos e do vídeo.
    const timeline = gsap.timeline({
      defaults: { ease: 'power2.out' },
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + scrollLength(),
        pin: stage,
        pinSpacing: true,
        scrub: 0.6,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: self => {
          const time = self.progress * duration;
          if (!isNaN(time) && video.readyState >= 2) {
            video.currentTime = time;
          }
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
    ScrollTrigger.refresh();
  };

  // Espera o primeiro quadro para iniciar a sincronização com o vídeo.
  if (video.readyState >= 2 && !isNaN(video.duration)) {
    setup();
  } else {
    video.addEventListener('loadeddata', setup, { once: true });
    video.addEventListener('canplay', setup, { once: true });
    video.load();
  }
}

export function initMovie() {
  initVideoFallback();
  initBuildSequence();
}

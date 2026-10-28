// Agrupa os comportamentos relacionados à rolagem e à visibilidade da página.
export function initScroll() {
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');

  // Atualiza o estado visual do menu e a barra de progresso conforme a página rola.
  const onScroll = () => {
    const y = window.scrollY;
    nav?.setAttribute('data-scrolled', y > 24 ? 'true' : 'false');

    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) {
      progress.style.width = Math.min(100, (y / max) * 100) + '%';
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Observa os elementos marcados no HTML e mostra cada um ao entrar na tela.
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal], [data-reveal-lines]').forEach(element => {
    observer.observe(element);
  });
}

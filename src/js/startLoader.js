// Controla a entrada visual da página depois que os recursos terminam de carregar.
export function startLoader() {
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');

    // Atraso curto evita que a tela de carregamento desapareça de forma abrupta.
    setTimeout(() => loader?.setAttribute('data-done', 'true'), 420);
  });
}

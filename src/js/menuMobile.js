// Controla o estado visual e a abertura do menu em telas menores.
export function initMobileMenu() {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');

  if (!nav || !burger) return;

  // Alterna o atributo usado pelo CSS para abrir ou fechar o menu.
  burger.addEventListener('click', () => {
    const isOpen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', isOpen ? 'false' : 'true');
    burger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
  });

  // Fecha o menu depois que o usuário escolhe uma seção da navegação.
  document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
      nav.setAttribute('data-open', 'false');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

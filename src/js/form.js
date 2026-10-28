// Controla a validação e o estado visual do formulário de contato.
export function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const success = document.getElementById('formSuccess');
  const submitButton = document.getElementById('submitBtn');

  const setError = (field, isInvalid) => {
    field.closest('.field')?.classList.toggle('error', isInvalid);
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    let isValid = true;

    const name = form.nome;
    const email = form.email;
    const projectType = form.tipo;

    if (!name.value.trim()) {
      setError(name, true);
      isValid = false;
    } else setError(name, false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      setError(email, true);
      isValid = false;
    } else setError(email, false);

    if (!projectType.value) {
      setError(projectType, true);
      isValid = false;
    } else setError(projectType, false);

    if (!isValid) return;

    submitButton.setAttribute('data-state', 'sending');
    submitButton.querySelector('.text').textContent = 'Enviando…';

    // Substitua este temporizador pela integração real com o backend ou formulário externo.
    setTimeout(() => {
      submitButton.removeAttribute('data-state');
      submitButton.querySelector('.text').textContent = 'Enviar proposta';
      form.querySelectorAll('.field input, .field textarea, .field select').forEach(field => {
        field.value = '';
      });
      success?.setAttribute('data-show', 'true');
      setTimeout(() => success?.removeAttribute('data-show'), 6500);
    }, 1100);
  });
}

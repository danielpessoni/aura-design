// Este arquivo centraliza a inicialização dos módulos da página.
import { startLoader } from './startLoader.js';
import { initScroll } from './scroll.js';
import { initMobileMenu } from './menuMobile.js';
import { initMovie } from './movie.js';
import { initForm } from './form.js';

startLoader();
initScroll();
initMobileMenu();
initMovie();
initForm();

import './_home.scss';
import { header } from '../../components/header/header';
import { main } from '../../components/main/main';
import { footer } from '../../components/footer/footer';
import { adjustScroll } from '../../utils/domUtils/adjustScroll';
import { background } from '../../components/background/background';

export const home = () => {
  header();
  main();
  footer();
  adjustScroll();
  background();
};

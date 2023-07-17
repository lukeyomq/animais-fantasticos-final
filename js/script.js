import ScrollSuave from "./modules/scroll-suave.js";
import TabNav from "./modules/tab-nav.js";
import Accordion from "./modules/accordion.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import ScrollAnima from "./modules/scroll-animacao.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabnav.init();

const modal = new Modal(
  "[data-modal='abrir'",
  "[data-modal='fechar'",
  "[data-modal='container'"
);

modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollanima = new ScrollAnima("[data-anime='scroll']");
scrollanima.init();

fetchAnimais("../../animaisapi.json", ".numeros-grid");
fetchBitcoin(".btc-preco");
initDropDownMenu();
initMenuMobile();
initFuncionamento();

export default class Modal {
  constructor(botaoAbrir, botaoFechar, container) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.container = document.querySelector(container);

    // bind this ao callback para fazer referencia ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.container.classList.toggle("ativo");
  }

  // adiciona o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.container) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvents() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.container.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.container) {
      this.addModalEvents();
    }
    console.log(this.botaoAbrir);
    return this;
  }
}

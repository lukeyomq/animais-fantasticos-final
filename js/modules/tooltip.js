export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);

    // bind dos objetos das classes aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // move a tooltip de acordo com o mouse
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 15}px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 240}px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 15}px`;
    }
  }
  // remove a tooltip e os eventos de mouseMove e mouseLeave

  onMouseLeave(event) {
    this.tooltipBox.remove();
    event.currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    this.tooltipBox.removeEventListener("mousemove", this.onMouseMove);
  }

  // Cria a tooltip box e coloca no body
  criarToolTipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  // Cria a tooltip e adiciona os eventos de mouseMove e MouseLeave ao target
  onMouseOver(event) {
    // cria tooltip box e coloca em uma propriedade
    this.criarToolTipBox(event.currentTarget);

    event.currentTarget.addEventListener("mousemove", this.onMouseMove);

    event.currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // add os eventos de mouseOver a cada tooltip
  addToolTipsEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addToolTipsEvents();
    }
    return this;
  }
}

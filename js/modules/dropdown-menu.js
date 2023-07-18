import outsideClick from "./outside-click.js";

export default class DropDownMenu {
  constructor(dropDownMenus) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    this.activeClass = "ativo";

    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona a função que observa o click fora dele
  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, ["touchstart", "click"], () => {
      element.classList.remove("ativo");
    });
  }

  // Adiciona os eventos ao dropdownMenu
  addEventDropdown() {
    this.dropDownMenus.forEach((menu) => {
      ["touchstart", "click"].forEach((userevent) => {
        menu.addEventListener(userevent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addEventDropdown();
    }

    return this;
  }
}

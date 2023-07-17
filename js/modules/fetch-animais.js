import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return div;
  }

  // Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Puxa os animais atraves de um arquivo json, e criar cada animal usando create animal
  async function criarAnimais() {
    // Fectch e espera resposta
    const animaisResponse = await fetch(url);
    // Transforma a resposta em json
    const animaisJson = await animaisResponse.json();
    const numerosGrid = document.querySelector(target);
    animaisJson.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    animaAnimaisNumeros();
  }

  return criarAnimais();
}

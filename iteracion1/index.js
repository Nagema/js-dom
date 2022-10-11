window.onload = function () {
  addContent();
};

const powerRangers = [
  "Soy el power ranger Amarillo",
  "Soy el power ranger Rojo",
  "Soy el power ranger Azul",
  "Soy el power ranger Negro",
];

const pokemons = ["Bulbasaur", "Charmander", "Pikachu", "Squirtle"];

const superHeros = ["Batman", "Robin", "Rick", "Morty"];

function addContent() {
  //1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

  const button$$ = document.createElement("button");
  const buttonText$$ = document.createTextNode("Pillame!");
  button$$.setAttribute("class", "showme");
  document.body.appendChild(button$$);
  button$$.appendChild(buttonText$$);
  console.log(document.querySelector(".showme"));

  // 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
  const h1$$ = document.createElement("h1");
  const h1Text$$ = document.createTextNode("Aqui estoy 8)");
  h1$$.setAttribute("id", "pillado");
  document.body.appendChild(h1$$);
  h1$$.appendChild(h1Text$$);

  console.log(document.querySelector("#pillado"));

  // 1.3 Usa querySelector para mostrar por consola todos los p

  for (const pRanger of powerRangers) {
    const p$$ = document.createElement("p");
    const pText$$ = document.createTextNode(pRanger);
    document.body.appendChild(p$$);
    p$$.appendChild(pText$$);
  }
  console.log(document.querySelectorAll("p"));
  // 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

  for (const pokemon of pokemons) {
    const h4$$ = document.createElement("h4");
    h4$$.setAttribute("class", "pokemon");
    const h4Text$$ = document.createTextNode(pokemon);
    document.body.appendChild(h4$$);
    h4$$.appendChild(h4Text$$);
  }
  console.log(document.querySelectorAll(".pokemon"));

  // 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
  // data-function="testMe"

  for (const hero of superHeros) {
    const span$$ = document.createElement("span");
    span$$.setAttribute("data-function", "testMe");
    const spanText$$ = document.createTextNode(hero + " ");
    document.body.appendChild(span$$);
    span$$.appendChild(spanText$$);
  }

  console.log(document.querySelectorAll('[data-function="testMe"]'));

  // 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
  // data-function="testMe"

  console.log(document.querySelectorAll('[data-function="testMe"]')[2]);
}

window.onload = function () {
  addContent();
};
function addContent() {
  // 2.1 Inserta dinamicamente en un html un div vacio con javascript.
  const div$$ = document.createElement("div");
  document.body.appendChild(div$$);

  // 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
  const p$$ = document.createElement("p");
  document.body.appendChild(p$$);

  // 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
  const pContainer$$ = document.createElement("div");
  for (let index = 0; index < 6; index++) {
    const p$$ = document.createElement("p");
    pContainer$$.appendChild(p$$);
  }
  console.log(pContainer$$);

  // 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

  const pTag = document.createElement("p");
  pTag.textContent = "Soy dinámico!";
  document.body.appendChild(pTag);

  // 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

  const h2$$ = document.createElement("h2");
  h2$$.textContent = "Wubba Lubba dub dub";
  h2$$.setAttribute("class", "fn-insert-here");
  document.body.appendChild(h2$$);

  // 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
  // const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

  const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
  const ullist = document.createElement("ul");
  document.body.appendChild(ullist);
  for (const app of apps) {
    const li$$ = document.createElement("li");
    li$$.textContent = app;
    ullist.appendChild(li$$);
  }
  console.log(ullist);

  // 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

  const deleteItems = document.querySelectorAll(".fn-remove-me");
  for (const item of deleteItems) {
    item.remove();
  }

  // 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
  // 	Recuerda que no solo puedes insertar elementos con .appendChild.
  const pCreated = document.createElement("p");
  divsCreated = document.querySelectorAll("div");

  pCreated.textContent = "Voy en medio!";

  document.body.insertBefore(pCreated, divsCreated[1]);

  // 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

  const insertHereElements = document.querySelectorAll(".fn-insert-here");

  for (const classElement of insertHereElements) {
    const pInside = document.createElement("p");
    pInside.textContent = "Voy dentro!";

    classElement.appendChild(pInside);
  }
}

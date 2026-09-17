/**
 * AUFGABE 2
 * 
 * Erstellen Sie ein Array namens "farben" mit drei Farbnamen als Strings.
 * Geben Sie jede Farbe des Arrays als <li> Element innerhalb der <ul>-Liste aus.
 */
const farben = ["purple", "lila", "pink"];
const ul = document.querySelector("#color-list");
for (const color of farben) {
  const newz = document.createElement("li");
  newz.textContent = color;
  ul.appendChild(newz);
};
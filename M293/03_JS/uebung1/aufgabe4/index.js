/**
 * Aufgabe 4
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird soll der Hintergrund des <body> rot werden.
 */
document.querySelector("button").addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
});

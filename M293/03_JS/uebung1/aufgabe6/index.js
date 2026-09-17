/**
 * Aufgabe 6
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird, soll der Wert des Input-Feldes ausgelesen werden
 * und die Farbe des <h1> auf den Wert gesetzt werden.
 */
document.querySelector("#change-color").addEventListener("click", () => {
  const color = document.querySelector("#background-input").value;
  document.querySelector(".main-title").style.color = color;
});

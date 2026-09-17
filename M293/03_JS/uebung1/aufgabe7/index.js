/**
 * Aufgabe 7
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird, soll der Wert des Input-Feldes ausgelesen werden
 * und ein Alert erscheinen, wo "Hallo <Name>" steht.
 */
document.querySelector("#submit-button").addEventListener("click", () => {
  alert("Hallo, " + document.querySelector("#name").value);
});

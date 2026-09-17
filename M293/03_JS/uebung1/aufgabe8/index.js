/**
 * Aufgabe 8
 *
 * Erstellen Sie einen prompt, der nach dem Namen fragt.
 * Speichern Sie den Wert des Namens in einer Variable und
 * setzen Sie den Text des H1 auf "Hallo <Name>"
 *
 * Tipp: Recherchieren Sie zu "window prompt()"
 */
userName = window.prompt("Was name?");
document.querySelector("h1").textContent = "Hallo " + userName;

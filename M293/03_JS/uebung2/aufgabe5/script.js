/**
 * AUFGABE 5
 *
 * Erstellen Sie eine Funktion namens showMessage, die zwei Parameter entgegennimmt:
 * - eine Nachricht (Text)
 * - eine Zahl, wie oft die Nachricht wiederholt werden soll
 *
 * Nutzen Sie eine for-Schleife, um die Nachricht so oft in der Konsole auszugeben,
 * wie im zweiten Parameter angegeben.
 *
 * Beispiel: showMessage("Hallo!", 3) soll dreimal "Hallo!" ausgeben.
 */
const showMessage = (message, numba) => {
  for (let i = 1; i <= numba; i++) {
    console.log(message);
  }
};
showMessage("meow", 9);

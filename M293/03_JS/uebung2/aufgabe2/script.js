/**
 * AUFGABE 2
 *
 * Erstellen Sie eine Funktion mit dem Namen isEven,
 * die eine Zahl als Parameter entgegennimmt.
 *
 * Die Funktion soll prüfen, ob die Zahl gerade oder ungerade ist.
 * - Wenn sie gerade ist, soll sie "Gerade Zahl!" in der Konsole ausgeben.
 * - Ansonsten "Ungerade Zahl!".
 *
 * Testen Sie die Funktion mit mindestens zwei verschiedenen Zahlen.
 */
const isEven = (numba) => {
  if (numba % 2 == 0) {
    console.log("even");
  } else if (numba % 2 != 0) {
    console.log("odd");
  }
};

isEven(4);

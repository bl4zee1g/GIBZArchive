/**
 * AUFGABE 4
 *
 * Schreiben Sie eine Funktion, die zwei Parameter entgegennimmt:
 * - einen minimal Wert
 * - einen maximal Wert
 *
 * Die Funktion soll onclick auf den Button nun testen, ob der Wert im input field
 * zwischen den beiden Werten liegt. Loggen Sie true bzw. false in der Konsole.
 */

const minValue = 5;
const maxValue = 45;
const meow = (numba) => {
  return minValue < numba && numba < maxValue;
};
document.querySelector("#calculate").addEventListener("click", () => {
  console.log(meow(document.querySelector("#test-value").valueAsNumber));
});

/**
 * AUFGABE 3
 *
 * Wenn der Button "Addieren" geklickt wird, sollen die beiden Werte in den Input Fields
 * in der Browser-Konsole geloggt werden. Erstellen Sie dazu eine wiederwendbare Funktion calculateSum.
 *
 * Bonus:
 * Wenn das Input Field leer ist oder Text (keine Zahl) enthält, soll ein mit window.alert
 * auf einen Error hingewiesen werden.
 */

const calculateSum = (num1, num2) => {
  return num1 + num2;
};
// console.log(calculateSum(4, 8));
document.querySelector("#calculate").addEventListener("click", () => {
  console.log(
    calculateSum(
      document.querySelector("#add1").valueAsNumber,
      document.querySelector("#add2").valueAsNumber,
    ),
  );
});

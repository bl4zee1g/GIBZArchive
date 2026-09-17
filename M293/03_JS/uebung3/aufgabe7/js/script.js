/**
 * AUFGABE 7
 * 
 * Fetchen Sie die Daten der Schüler:innen aus der
 * Datei students.json
 * 
 * Berechnen Sie für jede:n Schüler:in die Note
 * anhand der Punktzahlen nach folgender Berechnung:
 * 
 * Note = (erreichte Punktzahl / max. Punktzahl) * 5 + 1
 * 
 * Geben Sie jede Note anhand des Beispiels im HTML aus. Ist eine Note < 4,
 * färben Sie das li-Element rot ein.
 */
const raw = await fetch("./js/students.json");
const parsed = await raw.json();
const ul = document.querySelector("#wowz")

for (const meow of parsed) {
  const newz = document.createElement("li");
  const grade = Number(meow.points / meow.maxPoints * 5 + 1);
  newz.textContent = (`${meow.name} hat die Note ${grade}`);
  if (grade < 4) {
    newz.style.color = "red";
  }
  ul.appendChild(newz);
}
/**
 * AUFGABE 6
 * 
 * Verwenden Sie fetch(), um von data.json die User-Daten zu laden und wandeln Sie
 * die Daten in JSON um.
 * 
 * Berechnen Sie das Durchschnittsalter und geben Sie das Resultat
 * im HTML aus.
 */
const res = await fetch("./js/users.json");
const parsed = await res.json();
let ages = 0;
for (const meow of parsed) {
  ages += meow.age;
}
const newp = document.querySelector("#average");
newp.textContent = (ages / parsed.length);
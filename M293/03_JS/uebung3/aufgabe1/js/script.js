/**
 * AUFGABE 1
 * 
 * Erstellen Sie ein Objekt namens "person",
 * das die Eigenschaften name, alter und hobby enthält.
 * Geben Sie den Wert von hobby in einem <p>-Tag aus, den Sie mittels JS einfügen.
 */
const person = {
  name: "Jane",
  age: 20,
  hobby: "music"
};
paragraph = document.createElement("p");
paragraph.textContent = person.hobby;
document.body.appendChild(paragraph);
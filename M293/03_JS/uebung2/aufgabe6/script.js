/**
 * AUFGABE 6
 *
 * Erstellen Sie eine Funktion addHobbyToList mit einem Parameter.
 * Die Funktion soll ein <li> Element erstellen und als Textinhalt das Argument anzeigen.
 * Das erstellte <li>-Element soll danach der bestehenden <ul> Liste angefügt werden.
 *
 * Iterieren Sie (Tipp: loop) danach durch das Array mit den Hobbies und erstellen Sie für jedes Hobbie ein List-Element
 * indem Sie die Funktion aufrufen.
 */
const hobbies = ["climbing", "swimming", "running", "coding"];
const addHobbyToList = (sauce) => {
  const item = document.createElement("li");
  item.textContent = sauce;
  document.querySelector("#hobbies").appendChild(item);
};
for (const hobby of hobbies) {
  addHobbyToList(hobby);
}

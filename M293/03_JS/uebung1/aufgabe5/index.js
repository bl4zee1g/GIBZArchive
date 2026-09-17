/**
 * Aufgabe 5
 *
 * Erstellen Sie einen "click"-Event-Listener für den Button.
 * Wenn der Button geklickt wird soll ein neues <li>-Element
 * erstellt werden. Der Inhalt des <li>-Elementes soll Ihr Name sein.
 * Das List-Element soll dann der Liste (<ul>) angefügt werden.
 */
document
  .querySelector("#add-list-item-button")
  .addEventListener("click", () => {
    const litem = document.createElement("li");
    litem.textContent = "Jane";
    document.querySelector(".list").appendChild(litem);
  });

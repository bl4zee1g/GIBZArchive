/**
 * AUFGABE 2 – Einkaufsliste mit localStorage
 *
 * Eine Liste, die auch nach dem Schliessen
 * des Tabs noch da ist – wie bei vielen Web-Apps.
 *
 * 1. Beim Laden der Seite:
 *    - Lesen Sie gespeicherte Artikel aus localStorage (Key: "shoppingList")
 *    - Rendern Sie die Liste in #shopping-list
 * 2. Beim Submit von #item-form:
 *    - preventDefault()
 *    - Neuen Artikel als Objekt speichern: { name: "...", done: false }
 *    - Liste neu rendern und in localStorage speichern
 * 3. Pro Listeneintrag zwei Buttons:
 *    - "Erledigt": setzt done auf true/false und toggelt die Klasse "done" am <li>
 *    - "Löschen": entfernt den Artikel aus dem Array
 * 4. Nach jeder Änderung (hinzufügen, erledigen, löschen) speichern Sie
 *    das Array erneut mit localStorage.setItem und JSON.stringify.
 *
 * Tipps:
 * - localStorage.getItem / setItem
 * - JSON.parse / JSON.stringify
 * - Element.remove() zum Entfernen aus dem DOM (oder Liste komplett neu aufbauen)
 */

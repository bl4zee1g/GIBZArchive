/**
 * AUFGABE 3 – Live-Suche im Produktkatalog
 *
 * Realistischer Anwendungsfall: Produkte laden, suchen und nach Kategorie filtern –
 * ein Muster, das in Shops und Admin-UIs ständig vorkommt.
 *
 * 1. Laden Sie die Produkte aus js/products.json mit async/await und fetch().
 * 2. Speichern Sie die geladenen Daten in einer Variable (z.B. let products = []).
 * 3. Schreiben Sie eine Funktion renderProducts(list), die #product-list neu aufbaut:
 *    - Jedes Produkt als <li>: Name, Preis, Kategorie
 *    - Ist die Liste leer: zeigen Sie #empty-message (Klasse "hidden" entfernen)
 * 4. Schreiben Sie eine Funktion applyFilters():
 *    - Filtert products mit Array.filter() nach
 *      a) Suchtext (#search, Event "input") – Name ODER Beschreibung (ohne Gross-/Kleinschreibung)
 *      b) aktiver Kategorie-Button (data-category), "all" = keine Kategorie-Einschränkung
 *    - Ruft danach renderProducts() auf
 * 5. Kategorie-Buttons:
 *    - Klick setzt die Klasse "active" nur auf den geklickten Button (classList)
 *    - Danach applyFilters() aufrufen
 *
 * Bonus: Bei fetch-Fehler eine Fehlermeldung im DOM anzeigen (try/catch).
 */

/**
 * AUFGABE 1 – Kursanmeldung
 *
 * Ein Formular darf die Seite nicht neu laden.
 * Stattdessen prüfen Sie die Eingaben und geben Feedback.
 *
 * 1. Hören Sie auf das "submit"-Event des Formulars (#registration-form).
 * 2. Verhindern Sie das Standardverhalten. Recherchieren Sie falls nötig.
 * 3. Lesen Sie Name, E-Mail und Checkbox aus.
 * 4. Validierung:
 *    - Name und E-Mail dürfen nicht leer sein
 *    - Die Checkbox muss aktiviert sein
 * 5. Bei Fehlern:
 *    - Setzen Sie die Klasse "error" auf die betroffenen Inputs (classList)
 *    - Zeigen Sie im #feedback eine passende Fehlermeldung
 * 6. Bei Erfolg:
 *    - Entfernen Sie "error"-Klassen
 *    - Zeigen Sie eine Erfolgsmeldung mit Klasse "success"
 *    - Entfernen Sie die Klasse "hidden" am Feedback-Element
 *
 * Tipp: classList.add(), classList.remove(), classList.toggle()
 */

const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const termsInput = document.getElementById("terms");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const termsAccepted = termsInput.checked;

  const errors = [];

  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  termsInput.classList.remove("error");

  if (nameValue === "") {
    nameInput.classList.add("error");
    errors.push("Bitte geben Sie Ihren Namen an.");
  }

  if (emailValue === "") {
    emailInput.classList.add("error");
    errors.push("Bitte geben Sie Ihre E-Mail-Adresse an.");
  }

  if (!termsAccepted) {
    termsInput.classList.add("error");
    errors.push("Sie müssen die Teilnahmebedingungen akzeptieren.");
  }

  feedback.classList.remove("hidden", "success");

  if (errors.length > 0) {
    feedback.textContent = errors.join(" ");
    return;
  }

  feedback.textContent = `Danke, ${nameValue}! Ihre Anmeldung wurde erfolgreich übermittelt.`;
  feedback.classList.add("success");
  form.reset();
});

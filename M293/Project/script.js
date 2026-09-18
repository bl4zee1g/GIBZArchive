//fetch all products of a category, create a new list item and set that
//list item's innerHTML to include the first image, name, price and
//description of every product
const createList = async (category) => {
  const parsed = await fetch(
    `https://dummyjson.com/products/category/${category}`,
  ).then((res) => res.json());
  const chiefList = document.querySelector(".ProductList");
  const isSmartphone = document.body.dataset.category === "smartphones";
  for (const product of parsed.products) {
    const newLi = document.createElement("li");
    newLi.innerHTML += `
            <img src="${product.images[0]}" alt="${product.title}" class="product-image">
            <ul class="product-info">
              <li class="product-title">
                <h3>${product.title}</h3>
              </li>
              <li class="price-cart">
                <ul>
                  <li>
                    <h3>${product.price} CHF</h3>
                  </li>
                  <li>
                    <button>
                      <img src="../assets/cart.png" alt="add this to your cart">
                    </button>
                  </li>
                </ul>
            </ul>
            ${
              isSmartphone
                ? `<details class="dropdown">
            <summary class="placeholder">Speicherplatz auswählen</summary>
            <ul class="storage">
            <li><p>64GB</p></li>
            <li><p>128GB</p></li>
            <li><p>256GB</p></li>
            <li><p>1TB</p></li></ul></details>`
                : ""
            }
            <p>${product.description}</p>
            `;
    chiefList.appendChild(newLi);
  }
};
//if on homepage we only need one product image for each category
if (document.body.dataset.category == "home") {
  const categories = ["smartphones", "tablets", "laptops"];
  const setThumbnailPic = document
    .querySelectorAll(".thumbnail")
    .forEach(async (pic, i) => {
      const parsed = await fetch(
        `https://dummyjson.com/products/category/${categories[i]}`,
      ).then((res) => res.json());
      //get the product count for each category and pick a random
      //number between 0 and count -1
      const random = Math.floor(Math.random() * parsed.total);
      pic.src = parsed.products[random].images[0];
    });
} else {
  createList(document.body.dataset.category);
}
const submit = document.querySelector("#submit");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const formName = document.querySelector("#name");
  const formMail = document.querySelector("#mail");
  const formMessage = document.querySelector("#message");
  const textArray = [formName, formMail, formMessage];
  const hasEmpty = textArray.some((field) => field.value.trim() === "");

  const radios = document.querySelectorAll(
    'input[name="satisfaction"]:checked',
  );
  const noneChecked = [...radios].every((radio) => !radio.checked);

  if (hasEmpty || noneChecked) {
    alert("Bitte fülle alle Felder aus.");
  } else {
    pushToDaCord(
      formName.value,
      formMail.value,
      formMessage.value,
      radios[0]?.value,
    );
    alert("Erfolgreich übermittelt");
  }
});

//Discord Webhook
const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1550197149109583943/Rz8LJg-TKIvcNhrKe50EMV9ZPSLRPwg4l8V6uohz7TJJ4TaYyM1uxT410_-t7YA0rr77";
const pushToDaCord = async (name, mail, message, price) => {
  await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [
        {
          title: "Neue feedback!! yippers!!",
          color: 0x00ff00,
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "E-Mail", value: mail, inline: false },
            { name: "Nachricht", value: message, inline: false },
            { name: "Preiszufriedenheit", value: price, inline: false },
          ],
        },
      ],
    }),
  });
};

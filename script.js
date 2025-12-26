console.log("Arcade Prize Booth script running");

let totalInCents = 0;

const stickerBtn = document.querySelector("#sticker");
const keychainBtn = document.querySelector("#keychain");
const plushBtn = document.querySelector("#plush");
const comicBtn = document.querySelector("#comic");
const mysteryBtn = document.querySelector("#mystery");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

function updateTotal() {
  totalSpan.textContent = (totalInCents / 100).toFixed(2);
}

function addItem(name, priceInCents) {
  const item = document.createElement("p");
  item.textContent = `${name}`;
  shoppingCart.appendChild(item);

  totalInCents += priceInCents;
  updateTotal();
}

stickerBtn.addEventListener("click", function () {
  addItem("⭐ Sticker Pack ($0.50)", 50);
});

keychainBtn.addEventListener("click", function () {
  addItem("🔑 Keychain ($1.50)", 150);
});

plushBtn.addEventListener("click", function () {
  addItem("🧸 Mini Plush ($4.00)", 400);
});

comicBtn.addEventListener("click", function () {
  addItem("📚 Comic Book ($2.75)", 275);
});

mysteryBtn.addEventListener("click", function () {
  addItem("🎁 Mystery Box ($3.25)", 325);
});

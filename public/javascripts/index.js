let addRemoveBTN = null;

(function() {
  addRemoveBTN = document.getElementById('add-remove-from-cart')
})();

function addToCart(id) {
  const cart = getCart()

  updateAddRemoveBTN("remove from cart", "btn btn-danger")
  addRemoveBTN.onclick = removeFromCart.bind(this, id)
  cart.push({
    id,
    amount: 0
  })
  setCart(cart)
}

function removeFromCart (id) {
  const cart = getCart()

  updateAddRemoveBTN("add to cart", "btn btn-primary")
  addRemoveBTN.onclick = addToCart.bind(this, id)
  setCart(cart.filter((p) => p.id !== id))
}

function updateAddRemoveBTN (text, className) {
  addRemoveBTN.innerHTML = text
  addRemoveBTN.className = className
}

function setCart(cart) {
  setCookie('cart', JSON.stringify(cart))
  // todo call server to update cart
}

function getCart () {
  const rawCart = getCookie('cart')
  let cart = []

  if (rawCart !== "") {
    cart = JSON.parse(rawCart)
  }
  return cart
}

function setCookie(cname, cvalue, exdays = 100) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));

  const expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
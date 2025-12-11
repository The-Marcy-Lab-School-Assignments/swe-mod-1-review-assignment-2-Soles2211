// Create your object here
let cart = {
  customerName: "Alex",
  totalPrice: 0,
  itemCount: 0,
};

cart.items = ["apples", "bananas", "cherries"];
console.log(cart);
cart.itemCount = 3;
cart.totalPrice = 99.99;
console.log(cart);
delete cart.customerName;
console.log(cart);

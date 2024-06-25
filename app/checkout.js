export default class Checkout {
  constructor(pricelist, pricingRules) {
    this.cart = [];
    this.pricelist = pricelist;
    this.pricingRules = pricingRules;
  }

  add(id) {
    // find the cart item with the product id passed in
    const cartItem = this.cart.find((item) => item.id === id);

    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      // Add the item to the cart
      const pricelistItem = this.pricelist.find((item) => item.id === id);
      this.cart.push({ ...pricelistItem, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  total() {
    return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
  }
}

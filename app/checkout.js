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
    if (this.pricingRules?.discounts[0]) {
      // Discounts exist, apply as needed
      return this.cart.reduce((total, product) => {
        const discounts = this.pricingRules.discounts;
        const discount = discounts.find((discount) => discount.productId === product.id);
        if (!discount) {
          return total + product.price * product.quantity;
        } else {
          return total + discount.offer(product.price, product.quantity);
        }
      }, 0);
    } else {
      // Apply base pricelist
      return this.cart.reduce((total, product) => total + product.price * product.quantity, 0);
    }
  }
}

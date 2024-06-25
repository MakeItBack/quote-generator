// Create new deals here first then apply them in the customer discounts

const deals = {
  // PERCENTAGE DISCOUNTS
  fiftyOff(price: number, quantity: number) {
    const discountPercentage = 0.5;
    return price * discountPercentage * quantity;
  },
  // SPECIAL PRICE
  flat300(price: number, quantity: number) {
    const discountPrice = 300;
    return discountPrice * quantity;
  },
  // MULTI-DEALS
  twoForOne(price: number, quantity: number) {
    const pairs = Math.floor(quantity / 2);
    let totalPrice = pairs * price;
    // If the quantity is odd, add the price of one more item
    if (quantity % 2 !== 0) {
      totalPrice += price;
    }
    return totalPrice;
  },
};

export default deals;

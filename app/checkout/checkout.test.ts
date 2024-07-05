import { describe, it, expect, jest } from "@jest/globals";
import Checkout from "./checkout";
import { pricelist } from "../pricing/pricelist";
import { getPricingRules } from "../pricing/customerDeals";

describe("Checkout Setup", () => {
  const testCheckout = new Checkout(pricelist, undefined);
  it("Has a pricelist", () => {
    expect(testCheckout.pricelist).toBe(pricelist);
  });
  it("Has an empty cart when initialised", () => {
    expect(testCheckout.cart).toEqual([]);
  });
});

describe("Example scenarios", () => {
  it("Produces correct price for Nike", () => {
    const testCheckout = new Checkout(pricelist, undefined);
    testCheckout.add("1");
    testCheckout.add("2");
    testCheckout.add("3");
    console.log("Nike: $", testCheckout.total());
    expect(testCheckout.total()).toBe(1950);
  });
  it("Produces correct price for Nandos", () => {
    const pricingRules = getPricingRules("1");
    expect(pricingRules?.dealName).toBe("Nandos");

    const testCheckout = new Checkout(pricelist, pricingRules);
    testCheckout.add("2");
    testCheckout.add("2");
    testCheckout.add("2");
    testCheckout.add("1");
    console.log("Nandos: $", testCheckout.total());
    expect(testCheckout.total()).toBe(2500);
  });

  it("Produces correct price for Catch", () => {
    const pricingRules = getPricingRules("2");
    expect(pricingRules?.dealName).toBe("Catch");

    const testCheckout = new Checkout(pricelist, pricingRules);
    testCheckout.add("2");
    testCheckout.add("2");
    testCheckout.add("4");
    console.log("Catch: $", testCheckout.total());
    expect(testCheckout.total()).toBe(2300);
  });
  it("Produces correct price for Onepass", () => {
    const pricingRules = getPricingRules("3");
    expect(pricingRules?.dealName).toBe("Onepass");

    const testCheckout = new Checkout(pricelist, pricingRules);
    testCheckout.add("1");
    testCheckout.add("2");
    testCheckout.add("2");
    testCheckout.add("2");

    console.log("Onepass: $", testCheckout.total());
    expect(testCheckout.total()).toBe(1800);
  });
});

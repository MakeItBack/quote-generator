import deals from "./dealLib";
import { Deal } from "@/app/types";

export function getPricingRules(dealId: string) {
  return customerDeals.find((deal) => deal.dealId === dealId);
}

export const customerDeals: Deal[] = [
  {
    dealName: "Base Pricing",
    dealId: "0",
    discounts: [
      /* Leave empty */
    ],
  },
  { dealName: "Nandos", dealId: "1", discounts: [{ productId: "2", offer: deals.twoForOne }] },
  {
    dealName: "Catch",
    dealId: "2",
    discounts: [
      { productId: "3", offer: deals.fiftyOff },
      { productId: "4", offer: deals.fiftyOff },
    ],
  },
  {
    dealName: "Onepass",
    dealId: "3",
    discounts: [
      { productId: "1", offer: deals.flat300 },
      { productId: "2", offer: deals.fiftyOff },
    ],
  },
];

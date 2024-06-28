import { PriceListItem } from "@/app/types";

export const pricelist: PriceListItem[] = [
  {
    id: "1",
    offering: "Basic Ad",
    capability: "Generic Ad that allows the user to change images and text",
    price: 500,
    addOn: false,
  },
  {
    id: "2",
    offering: "Standard Ad",
    capability: "Standard template offering",
    price: 1000,
    addOn: false,
  },
  {
    id: "3",
    offering: "AI copy writing (Add-on)",
    capability: `Generate dynamic text based off the userʼs brand`,
    price: 450,
    addOn: true,
  },
  {
    id: "4",
    offering: "AI voice generation (Add-on)",
    capability: "Enables AI voice over generatio",
    price: 600,
    addOn: true,
  },
];

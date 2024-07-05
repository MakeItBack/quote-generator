export interface PriceListItem {
  id: string;
  offering: string;
  capability: string;
  price: number;
  addOn: boolean;
}

export interface CartItem extends PriceListItem {
  quantity: number;
}

interface Discount {
  productId: string;
  offer: any;
}
export interface Deal {
  dealName: string;
  dealId: string;
  discounts: Discount[];
}

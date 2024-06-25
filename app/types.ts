export interface PriceListItem {
  id: string;
  offering: string;
  capability: string;
  price: number;
  addOn: boolean;
}

export interface CartItem extends PriceListItem {
  quantity: number;
  discountedTotal?: number;
}

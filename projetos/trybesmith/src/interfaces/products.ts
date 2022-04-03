export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface NewProduct {
  item: {
    id: number;
    name: string;
    amount: string;
  };
}

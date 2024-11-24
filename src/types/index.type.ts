// BTN TYPE
export interface SliderArrowBtnProps {
  direction: "left" | "right";
  className?: string;
}

// PRODUCTS TYPE
export interface Product {
  id: number;
  product_name: string;
  img: string;
  price: number;
  up_to?: string;
  reviews?: number;
  sizes?: string[];
}

export interface LocalProduct extends Product {
  quantity: number;
}

export interface ProductCardProps {
  product: Product;
}

// Params type
export interface ParamsProps {
  params: {
    id: string;
  };
}

// Cart Item type
export interface CartItemProps {
  product: LocalProduct;
}

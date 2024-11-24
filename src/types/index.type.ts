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

export interface ProductCardProps {
  product: Product;
}

// Params type
export interface ParamsProps {
  params: {
    id: string;
  };
}

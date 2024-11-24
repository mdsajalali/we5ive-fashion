// BTN TYPE
export interface SliderArrowBtnProps {
  direction: "left" | "right";
  className?: string;
}

// PRODUCTS TYPE
interface Product {
  id: number;
  product_name: string;
  img: string;
  price: number;
  up_to?: string;
}

export interface ProductCardProps {
  product: Product;
}

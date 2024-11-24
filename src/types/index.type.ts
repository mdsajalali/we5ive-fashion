// BTN TYPE
export interface SliderArrowBtnProps {
  direction: "left" | "right";
  className?: string;
}

// PRODUCTS TYPE
interface Product {
  product_name: string;
  img: string;
  price: number;
}

export interface ProductCardProps {
  product: Product;
}

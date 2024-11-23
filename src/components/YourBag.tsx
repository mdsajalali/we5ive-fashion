import { ShoppingBag } from "lucide-react";

const YourBag = () => {
  return (
    <div className="fixed right-0 top-1/2 flex -translate-y-1/2 transform flex-col items-center justify-center rounded-l-xl bg-primary p-4 text-white">
      <ShoppingBag className="text-2xl" />
      <h1 className="pt-2">Your bag</h1>
      <p>0</p>
    </div>
  );
};

export default YourBag;

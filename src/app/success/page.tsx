import { CheckCircle } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 py-20">
      <div className="max-w-md rounded-lg bg-white p-6 text-center shadow-lg">
        <CheckCircle className="mx-auto text-green-500" size={48} />
        <h1 className="mt-4 text-2xl font-bold text-gray-800">Thank You!</h1>
        <p className="mt-2 text-gray-600">
          Your purchase was successful. We appreciate your business!
        </p>
        <p className="mt-1 text-sm text-gray-500">
          Check your email for the receipt and order details.
        </p>
        <Link href="/shops">
          <button className="mt-6 w-full rounded-lg bg-primary px-4 py-2 text-white">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;

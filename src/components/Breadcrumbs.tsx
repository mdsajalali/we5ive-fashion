import Link from "next/link";

export default function Breadcrumbs() {
  return (
    <div>
      <Link className="text-[18px] font-semibold" href="/shops">
        Feature Product /
      </Link>{" "}
      <Link className="text-[18px] font-semibold text-primary" href="/shops">
        New Arrival
      </Link>
    </div>
  );
}

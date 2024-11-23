import Link from "next/link";
import React from "react";

export default function Breadcrumbs() {
  return (
    <div>
      <Link className="text-[18px] font-semibold" href="/">
        Feature Product /
      </Link>{" "}
      <Link className="text-[18px] font-semibold text-primary" href="/">
        New Arrival
      </Link>
    </div>
  );
}

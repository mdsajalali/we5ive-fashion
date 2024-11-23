import React, { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="max-w-[1280px] mx-auto xl:px-0 px-4">{children}</div>;
}

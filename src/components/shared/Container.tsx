import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-[1280px] px-4 xl:px-0">{children}</div>;
}

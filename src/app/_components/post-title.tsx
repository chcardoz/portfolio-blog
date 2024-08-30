import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="font-mate text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-12 text-center">
      {children}
    </h1>
  );
}

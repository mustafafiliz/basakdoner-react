import React from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function MenuCard({ children, className = "" }: Props) {
  return (
    <div
      className={`bg-white rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }: Props) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

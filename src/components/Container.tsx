import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Container;

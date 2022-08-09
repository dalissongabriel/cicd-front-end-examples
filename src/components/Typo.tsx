import { HTMLAttributes } from "react";

const Typo = ({ children, ...rest }: HTMLAttributes<HTMLParagraphElement>) => {
  return <p {...rest}>{children}</p>;
};

export default Typo;

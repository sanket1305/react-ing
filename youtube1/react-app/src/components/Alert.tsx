import { ReactNode } from "react";

interface Props {
  children: ReactNode; // this is useful when you want to pass HTML code as children
}

const Alert = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Alert;

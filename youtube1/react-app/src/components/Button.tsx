import React from "react";

interface Props {
  children: string;
  //   color?: string;       // tell react that this property is optional
  color?: "primary" | "secondary" | "danger"; // specifying react that only this values are allowed
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

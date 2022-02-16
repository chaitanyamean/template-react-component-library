import React from "react";
import "./Button.css";

export interface ButtonProps {
  label: string;
  type: any;
}

const primaryStyle = {
  color: "#fff",
  backgroundColor: "#0d6efd",
  borderColor: "#0d6efd",
};

const successStyle = {
  color: "#fff",
  backgroundColor: "#198754",
  borderColor: "#198754",
};

const setClass = (type: any) => {
  if (type === "success") {
    return successStyle;
  }

  return primaryStyle;
};

const Button = (props: ButtonProps) => {
  return <button style={setClass(props.type)}>{props.label}</button>;
};

export default Button;

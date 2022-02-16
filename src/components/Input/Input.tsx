import React from "react";

export interface InputProps {
  name: string;
  placeholder: string;

}

const Input = (props: InputProps) => {
  return <input name={props.name} placeholder={props.placeholder}/>
};

export default Input;
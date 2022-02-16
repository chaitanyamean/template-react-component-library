import React from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export interface ButtonProps {
  label: string;
  type: any;
}

const AntButton = (props: ButtonProps) => {
  return <Button variant={props.type}>{props.label}</Button>;
};

export default AntButton;
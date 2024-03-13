import { ReactNode } from "react";

type Props = {
  disabled: boolean;
  children: ReactNode;
  onClick: (number: number) => void;
}

export const Button = ({ children, disabled, onClick }: Props) =>{
  return(
    <button 
      style={{backgroundColor: disabled ? "gray" : "green"}}
      onClick={() => onClick(10)}
    >
      {children}
    </button>
  );
}
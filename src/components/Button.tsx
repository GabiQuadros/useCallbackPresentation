import React from "react";

interface ButtonProps {
  name: string;
  handleClick: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = React.memo(({ name, handleClick }) => {
  console.log({ name });
  return <button onClick={handleClick}>{name}</button>;
});

export { Button };

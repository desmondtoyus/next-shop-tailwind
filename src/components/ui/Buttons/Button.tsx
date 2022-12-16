import React, { FC } from 'react';

export interface ButtonProps {
  cta: string;
  onClick: (e?: MouseEvent) => void;
}

const Button: FC<ButtonProps> = ({ cta }) => {
  return <button>{cta}</button>;
};

export default React.memo(Button);

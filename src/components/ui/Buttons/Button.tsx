import React, { FC } from 'react';

export interface ButtonProps {
  cta: string;
  onClick?: (e?: MouseEvent) => void;
}

const Button: FC<ButtonProps> = ({ cta, onClick = () => null }) => {
  return (
    <button
      className="p-2 border-r-2 bg-blue-300 text-center text-zinc-50"
      onClick={() => onClick}
    >
      {cta}
    </button>
  );
};

export default React.memo(Button);

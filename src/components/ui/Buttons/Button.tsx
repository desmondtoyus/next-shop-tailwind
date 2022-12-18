import Link from 'next/link';
import React, { FC } from 'react';

export interface ButtonProps {
  cta: string;
  onClick?: (e?: MouseEvent) => void;
  href?: string | null;
}

const Button: FC<ButtonProps> = ({
  cta,
  onClick = () => null,
  href = null,
}) => {
  const Btn = () => (
    <button
      className="p-2 rounded-md bg-blue-300 text-center text-zinc-50 w-full"
      onClick={() => onClick()}
    >
      {cta}
    </button>
  );
  if (href) {
    return (
      <Link href={href}>
        <Btn />
      </Link>
    );
  }
  return <Btn />;
};

export default React.memo(Button);

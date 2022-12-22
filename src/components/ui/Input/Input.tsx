import React, { FC } from 'react';

export interface InputProps {
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: FC<InputProps> = ({ type, value, onChange, required = false }) => {
  return (
    <input
      type={type}
      className="border rounded px-3 py-1 w-full"
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default React.memo(Input);

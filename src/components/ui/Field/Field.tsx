import React, { FC } from 'react';

export interface FieldProps {
  label: string;
  children: React.ReactNode;
}

const Field: FC<FieldProps> = ({ label, children }) => {
  return (
    <label className="flex flex-col py-2">
      <span>{label}</span>
      {children}
    </label>
  );
};

export default React.memo(Field);

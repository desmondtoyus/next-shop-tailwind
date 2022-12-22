import React, { FC } from 'react';

const Input: FC<{ type: string }> = ({ type }) => {
  return <input type={type} className="border rounded px-3 py-1 w-full" />;
};

export default React.memo(Input);

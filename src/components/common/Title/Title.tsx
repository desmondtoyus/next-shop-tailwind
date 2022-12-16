import React, { FC, ReactNode } from 'react';

const Title: FC<{ children: ReactNode }> = ({ children }) => {
  return (<h1 className="text-2xl pb-4">{children}</h1>);
};

export default React.memo(Title);

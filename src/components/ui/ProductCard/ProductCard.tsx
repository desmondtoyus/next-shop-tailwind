import Image from 'next/image';
import React, { FC } from 'react';
import { Button } from '../Buttons';

export interface ProductProps {
  name: string;
  id: number;
  imageUrl: string;
  description: string;
  price: number;
}

const ProductCard: FC<ProductProps> = ({
  name,
  id,
  imageUrl,
  description,
  price,
}) => {
  return (
    <div
      className="border-solid border-2 border-indigo-600 rounded-md p-4 grow shrink basis-1/4 max-w-md shadow hover:shadow-xl"
      key={id}
    >
      <h2 className="font-semibold text-center text-3xl pb-2">{name}</h2>
      <Image
        src={imageUrl}
        width="100"
        height="100"
        alt="product.title"
        className="pb-1 w-full object-cover rounded-lg"
      />
      <div className="flex justify-between">
        <p className="text-sm leading-6 py-4">{name}</p>
        <p className="text-sm leading-6 py-4">{`$${price}`}</p>
      </div>
      <Button cta="See Details" href={`/products/${id}`} />
    </div>
  );
};

export default React.memo(ProductCard);

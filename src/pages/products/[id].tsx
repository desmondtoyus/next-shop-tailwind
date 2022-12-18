import { PRODUCTS } from '@/constants';
import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
} from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

export interface ProductProp {
  id: number;
  title: string;
  image_src: string;
  description: string;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  return {
    paths: [],
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { id } = params || {};
  const product = PRODUCTS.find((product) => product.id === Number(id));
  return {
    props: {
      ...product,
    },
  };
}

const Product: FC<ProductProp> = ({ id, title, image_src, description }) => {
  return (
    <div className="p-2 max-w-3xl">
      <Link href="/" className="text-blue-300">
        {' '}
        {'<< Back '}
      </Link>
      {id ? (
        <>
          <h4 className="text-2xl pb-3">{`${id}. ${title}`}</h4>
          <Image src={image_src} width="100" height="100" alt={title} />
          <p>{description}</p>
        </>
      ) : (
        <h3 className="text-lg text-center">Can find product</h3>
      )}
    </div>
  );
};

export default React.memo(Product);

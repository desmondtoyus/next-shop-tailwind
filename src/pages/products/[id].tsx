import { getProduct, getProducts } from '@/helper';
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
  name: string;
  image_url: string;
  description: string;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const { data } = await getProducts();
  return {
    paths: data.map(({ id }: { id: number }) => ({
      params: { id: String(id) },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const { id } = params || {};
  const { data = {} } = (await getProduct(Number(id))) || {};
  const { attributes } = data;
  return {
    props: {
      id: data?.id || null,
      ...attributes,
    },
    revalidate: 5 * 60, // seconds
  };
}

const Product: FC<ProductProp> = ({ id, name, image_url, description }) => {
  return (
    <div className="p-2 max-w-3xl">
      <Link href="/" className="text-blue-300">
        {' '}
        {'<< Back '}
      </Link>
      {id ? (
        <>
          <h4 className="text-2xl pb-3">{`${id}. ${name}`}</h4>
          <Image src={image_url} width="100" height="100" alt={name} />
          <p>{description}</p>
        </>
      ) : (
        <h3 className="text-lg text-center">Can find product</h3>
      )}
    </div>
  );
};

export default React.memo(Product);

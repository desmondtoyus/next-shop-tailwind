import { ErrorHandler, getProduct, getProducts } from '@/helper';
import { GetStaticPathsResult, GetStaticPropsContext } from 'next';
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
  try {
    const { id } = params || {};
    const { data = {} } = (await getProduct(Number(id))) || {};
    const { attributes } = data;
    return {
      props: {
        id: data?.id || null,
        ...attributes,
      },
      revalidate: 10, // seconds /// Incremental Static Regeneration
    };
  } catch (error) {
    console.log('error == ', error);
    if (error instanceof ErrorHandler && error.status == 404) {
      return { notFound: true };
    }
    throw error;
  }
}

// server side rendering
// export async function getServerSideProps({
//   params,
// }: GetServerSidePropsContext) {
//   console.log('params = ', params);
//   const { id } = params || {};
//   const { data = {} } = (await getProduct(Number(id))) || {};
//   const { attributes } = data;
//   return {
//     props: {
//       id: data?.id || null,
//       ...attributes,
//     },
//   };
// }

const Product: FC<ProductProp> = ({ id, name, image_url, description }) => {
  return (
    <div className="p-2 max-w-3xl">
      <Link href="/" className="text-blue-300">
        {' '}
        {'<< Back '}
      </Link>
      <>
        <h4 className="text-2xl pb-3">{`${id}. ${name}`}</h4>
        <Image src={image_url} width="100" height="100" alt={name} />
        <p>{description}</p>
      </>
    </div>
  );
};

export default React.memo(Product);

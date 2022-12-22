import { Button } from '@/components/ui/Buttons';
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
  price: number;
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

const Product: FC<ProductProp> = ({
  id,
  name,
  image_url,
  description,
  price,
}) => {
  return (
    <div className="p-2">
      <Link href="/" className="text-blue-300">
        {' '}
        {'<< Back '}
      </Link>
      <>
        <h4 className="text-2xl pb-3">{`${id}. ${name}`}</h4>
        <div className="flex md:flex-col lg:flex-row gap-2">
          <div>
            <Image src={image_url} width={640} height={480} alt={name} />
          </div>
          <div className="flex flex-col">
            <p>{description}</p>
            <p className="py-4">{price}</p>
            <Button cta="Add to Cart" />
          </div>
        </div>
      </>
    </div>
  );
};

export default React.memo(Product);

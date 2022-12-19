import React, { FC } from 'react';
import { Title } from '@/components/common/Title';
import { Button } from '@/components/ui/Buttons';
import Image from 'next/image';
import { getProducts } from '@/helper';

export interface Props {
  title: string;
  products: [
    {
      id: number;
      attributes: {
        name: string;
        description: string;
        price: number;
        image_url: string;
      };
    },
  ];
}

export async function getStaticProps() {
  try {
    const { data = {} } = (await getProducts()) || {};
    return {
      props: {
        // Used to override the default header meta tags in /config/seo.json for page-specific
        // metafields passed as pageProps to the Head component in _app.tsx
        title: 'Next Shop',
        products: data,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

const Home: FC<Props> = ({ title, products }) => {
  console.log('title: ', title);

  return (
    <>
      <main className="px-6 py-4">
        <Title>Next shop</Title>
        <div className="flex gap-3 flex-wrap">
          {products.map((product) => (
            <div
              className="border-solid border-2 border-indigo-600 rounded-md p-4 grow shrink basis-1/4 max-w-md"
              key={product.id}
            >
              <h4 className="font-semibold text-center text-3xl pb-2">
                {product.attributes.name}
              </h4>
              <Image
                src={product.attributes.image_url}
                width="100"
                height="100"
                alt="product.title"
                className="pb-1 w-full object-cover rounded-lg"
              />
              <p className="text-sm leading-6 py-4">
                {product.attributes.description}
              </p>
              <Button cta="Order Now" href={`/products/${product.id}`} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default React.memo(Home);

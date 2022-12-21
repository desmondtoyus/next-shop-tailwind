import React, { FC } from 'react';
import { Title } from '@/components/common/Title';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
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
      <main className="flex flex-col">
        <Title>Next shop</Title>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-2">
          {products.map((product) => {
            const { attributes } = product;
            const item = {
              id: product.id,
              name: product.attributes.name,
              imageUrl: attributes.image_url,
              description: attributes.description,
              price: attributes.price,
            };
            return <ProductCard {...item} key={product.id} />;
          })}
        </div>
      </main>
    </>
  );
};

export default React.memo(Home);

import React, { FC } from 'react';
import { Title } from '@/components/common/Title';
import { Button } from '@/components/ui/Buttons';
import Image from 'next/image';
import { PRODUCTS } from '@/constants';

export interface Props {
  title: string;
}

export async function getStaticProps() {
  return {
    props: {
      // Used to override the default header meta tags in /config/seo.json for page-specific
      // metafields passed as pageProps to the Head component in _app.tsx
      title: 'Next Shop',
    },
  };
}

const Home: FC<Props> = ({ title }) => {
  console.log('title: ', title);
  {
    /* <div class="basis-1/4 md:basis-1/3">01</div> */
  }
  return (
    <>
      <main className="px-6 py-4">
        <Title>Next shop450</Title>
        <div className="flex gap-3 flex-wrap">
          {PRODUCTS.map((product) => (
            <div
              className="border-solid border-2 border-indigo-600 rounded-md p-4 grow shrink basis-1/4 max-w-md"
              key={product.id}
            >
              <h4 className="font-semibold text-center text-3xl pb-2">
                {product.title}
              </h4>
              <Image
                src={product.image_src}
                width="100"
                height="100"
                alt="product.title"
                className="pb-1 w-full object-cover rounded-lg"
              />
              <p className="text-sm leading-6 py-4">{product.description}</p>
              <Button cta="Order Now" href={`/products/${product.id}`} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default React.memo(Home);

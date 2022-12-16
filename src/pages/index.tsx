import { Title } from '@/components/common/Title';
import React, { FC } from 'react';

export interface Props {
  title: string;
}

export async function getStaticProps() {
  return {
    props: {
      // Used to override the default header meta tags in /config/seo.json for page-specific
      // metafields passed as pageProps to the Head component in _app.tsx
      title:
        "Next Shop",
    },
  };
}

const Home: FC<Props> = ({ title }) => {
  console.log('title: ', title);
  return (
    <>
      <main className='px-6 py-4'>
        <Title>
        Next shop
          </Title>
      </main>
    </>
  );
};

export default React.memo(Home);
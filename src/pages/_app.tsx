import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { Head } from '@/components/common/Head';
import { NavBar } from '@/components/common/NavBar';
import '@/styles/globals.css';
import { fetcher } from '@/helper';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (uri, options) => fetcher(uri, options).then((res) => res),
      }}
    >
      <NavBar />
      <Head {...pageProps} />
      <Component {...pageProps} />
      <footer>Footer</footer>
    </SWRConfig>
  );
}

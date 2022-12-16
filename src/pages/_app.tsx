import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Head } from '@/components/common/Head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header>Header</header>
      <Head {...pageProps} />
      <Component {...pageProps} />
      <footer>Footer</footer>
    </>
  );
}

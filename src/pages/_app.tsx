import type { AppProps } from 'next/app';
import { Head } from '@/components/common/Head';
import { NavBar } from '@/components/common/NavBar';
import '@/styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Head {...pageProps} />
      <Component {...pageProps} />
      <footer>Footer</footer>
    </>
  );
}

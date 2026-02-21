import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Meta from '../components/Meta';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

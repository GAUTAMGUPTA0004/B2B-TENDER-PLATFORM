import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../Components/Layout';
import '../Styles/globals.css'; // Fixed path to match your file structure

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Pages where navbar should not be shown
  const noNavbarPages = ['/', '/login', '/register'];
  const showNavbar = !noNavbarPages.includes(router.pathname);

  return (
    <Layout showNavbar={showNavbar} >
      <Component {...pageProps} />
    </Layout>
  );
}
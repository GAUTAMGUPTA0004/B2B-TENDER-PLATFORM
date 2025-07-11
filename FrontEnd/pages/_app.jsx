import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // Pages where navbar should not be shown
  const noNavbarPages = ['/', '/login', '/register'];
  const showNavbar = !noNavbarPages.includes(router.pathname);

  return (
    <Layout showNavbar={showNavbar}>
      <Component {...pageProps} />
    </Layout>
  );
}
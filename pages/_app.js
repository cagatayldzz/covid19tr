import React from 'react';
import NProgress from '../components/nprogress';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NProgress />
    </>
  );
}
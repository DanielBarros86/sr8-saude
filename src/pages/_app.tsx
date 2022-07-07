import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Layout } from '../components/Layout';
import { theme } from '../styles/themes/theme';
import { GlobalStyles } from '../styles/global';

import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <ToastContainer theme="colored" />
      <GlobalStyles />
    </ThemeProvider>
  );
}

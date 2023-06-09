import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { Layout } from '../components/Layout';
import { theme } from '../styles/themes/theme';
import { GlobalStyles } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}

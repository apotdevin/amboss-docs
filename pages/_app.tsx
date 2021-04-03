import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';

const Content: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Content>
      <Head>
        <title>
          Amboss - Professional Node Manager for your Lightning Network Node
        </title>
      </Head>
      <Component {...pageProps} />
    </Content>
  );
}

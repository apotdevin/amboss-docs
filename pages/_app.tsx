import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import { Header } from '../src/components/layouts/Header';
import { Footer } from '../src/components/layouts/Footer';
import { constantDimensions } from '../src/styles/Themes';

const S = {
  wrapper: styled.div`
    min-height: 100vh;
    position: relative;
  `,
  body: styled.div`
    padding-bottom: ${constantDimensions.footerHeight};
  `,
};

const Content: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <GlobalStyles />
      <S.wrapper>
        <S.body>
          <Header />
          {children}
        </S.body>
        <Footer />
      </S.wrapper>
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

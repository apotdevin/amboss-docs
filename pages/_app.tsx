import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/GlobalStyle';
import { AppProps } from 'next/dist/next-server/lib/router/router';

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
      <Component {...pageProps} />
    </Content>
  );
}

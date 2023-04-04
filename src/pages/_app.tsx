import { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

import { createGlobalStyle } from "styled-components";

import { queryClient } from "services/queryClient";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;

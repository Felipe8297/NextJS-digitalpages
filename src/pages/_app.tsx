import { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";

import { queryClient } from "services/queryClient";

function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default App;
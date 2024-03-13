import Head from "next/head";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProvider } from "../context/AppProvider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next Avatar App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout , Heading} from "../components";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => (
   <Layout>
      <Head>
         <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
   </Layout >
);

export default App;

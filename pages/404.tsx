import Head from "next/head";
import { Heading } from "../components";

const Error = () => (
  <>
    <Head>
      <title>404 - Not Found</title>
    </Head>
    <Heading>404</Heading>
    <p>Page not found</p>
  </>
);

export default Error

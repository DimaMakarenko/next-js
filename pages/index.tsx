import { Heading } from "../components";
import styles from '../styles/Home.module.scss';
import Head from "next/head";

const Home = () => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading>Hello World</Heading>
  </div>
);


export default Home

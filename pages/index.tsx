import { Heading, Socials } from "../components";
import styles from '../styles/Home.module.scss';
import Head from "next/head";
import { Socials as SocialsType } from "../entities/social";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";

export const getStaticProps: GetStaticProps<{ socials: SocialsType | null }> = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data: SocialsType = await response.json();

    if (!data) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        socials: data
      }
    }
  }
  catch {
    return {
      props: {
        socials: null
      }
    }
  }
}

const Home = ({ socials }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className={styles.wrapper}>
    <Head>
      <title>Home</title>
    </Head>
    <Heading>Hello World</Heading>
    {socials && <Socials socials={socials} />}
  </div>
);


export default Home

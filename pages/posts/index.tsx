import Head from "next/head";
import { Heading } from "../../components";
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from "next/link";
import { Posts } from "../../entities/posts";

export const getStaticProps: GetStaticProps<{ posts: Posts }> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Posts = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      posts: data
    }
  }
}

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading>Posts list</Heading>
      <ul>
        {posts.map(({ id, title }) =>
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <strong>
                {title}
              </strong>
            </Link>
          </li>)}
      </ul>
    </>
  )
};

export default Posts

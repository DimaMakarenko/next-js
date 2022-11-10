import { Heading } from "../../components";
import Head from "next/head";
import { Posts, Post as PostT } from "../../entities/posts";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

// SSG
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Posts = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() }
  }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<{ post: PostT }> = async (context) => {
  const id = context?.params?.id;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data: PostT = await response.json();

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post: data
    }
  }
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <Heading>{post.title}</Heading>
    <article>
      <p>{post.body}</p>
    </article>
  </>
);

export default Post

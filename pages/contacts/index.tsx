import Head from "next/head";
import { Heading } from "../../components";
import { GetStaticProps, InferGetStaticPropsType } from 'next'

type Contact = {
  id: number;
  name: string;
  email: string;
}

export const getStaticProps: GetStaticProps<{ contacts: Contact[] }> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Contact[] = await response.json();

  if (!data) { 
    return {
      notFound: true
    }
  }

  return {
    props: {
      contacts: data
    }
  }

}

const Contacts = ({ contacts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading>Contacts list</Heading>
      <ul>
        {contacts.map(({ id, name, email }) =>
          <li key={id}>
            <strong>
              {name}
            </strong> -
            ({email})
          </li>)}
      </ul>
    </>
  )
};

export default Contacts

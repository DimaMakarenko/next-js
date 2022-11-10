import Head from "next/head";
import { Heading } from "../../components";
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from "next/link";
import { Contacts } from "../../entities/contact";

export const getStaticProps: GetStaticProps<{ contacts: Contacts }> = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: Contacts = await response.json();

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
            <Link href={`/contacts/${id}`}>
              <strong>
                {name}
              </strong>
            </Link>
            -
            ({email})
          </li>)}
      </ul>
    </>
  )
};

export default Contacts

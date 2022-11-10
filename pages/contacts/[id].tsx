import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import { Heading, ContactInfo } from "../../components";
import { Contact } from "../../entities/contact";

// SSR
export const getServerSideProps: GetServerSideProps<{ contact: Contact }> = async (context) => {
  const id = context?.params?.id;

  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data: Contact = await response.json();

  return {
    props: {
      contact: data
    }
  }
}

const Contact = ({ contact }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const title = contact?.name || 'Empty contact';

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {contact?.name ?
        <ContactInfo contact={contact} />
        :
        <Heading as='h3'>
          Empty contact
        </Heading>}

    </>
  )
};

export default Contact

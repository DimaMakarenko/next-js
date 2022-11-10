import React from 'react'
import { Contact } from '../../entities/contact'
import Heading from '../heading/Heading'

interface ContactInfoProps {
  contact: Contact
}

const ContactInfo = ({ contact }: ContactInfoProps) => {
  const { name, email, address } = contact;
  const { street, suite, city, zipcode } = address || {};

  return (
    <div>
      <Heading as='h1'>
        {name}
      </Heading>
      <p>
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Address: </strong>
        {`${city}, ${street} ${suite}. Zip: ${zipcode}`}
      </p>

    </div>
  )
}

export default ContactInfo

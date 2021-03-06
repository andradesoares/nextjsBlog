import { Fragment } from "react"
import Head from  'next/head'
import ContactForm from "../../components/Contact/ContactForm"

const ContactPage = () => {
 return (
  <Fragment>
    <Head>
      <title>Contact</title>
      <meta name="description" content="contact" />
    </Head>
    <ContactForm />   
  </Fragment>
 )
}

export default ContactPage
import { useState, useEffect } from 'react'
import classes from './ContactForm.module.css'
import Notification from '../ui/Notification'

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [requestStatus, setRequestStatus] = useState()
  const [requestError, setRequestError] = useState()

  useEffect(() => {
    if(requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
        setRequestError(null)
      }, 3000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [requestStatus])

  const newMessageHandler = async (event) => {
    event.preventDefault()

    setRequestStatus('pending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          email,
          name,
          message
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      const data = await response.json()
  
      if(!response.ok) {
        throw new Error(data.message)
      }
      setEmail('')
      setName('')
      setMessage('')
      setRequestStatus('success')
    } catch (error) {
      setRequestError(error.message)
      setRequestStatus('error')
    }
  }

  let notification

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Pending',
      message: 'Sending message'
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Message sent',
      message: 'Message sent'
    }
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: requestError
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I Help?</h1>
      <form onSubmit={newMessageHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input 
              type='email' 
              id='email' 
              required 
              value={email} 
              onChange={event => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input 
              type='text' 
              id='name' 
              required 
              value={name} 
              onChange={event => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea 
            id='message' 
            rows='5'
            required
            value={message} 
            onChange={event => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.action}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && 
      <Notification 
        status={notification.status} 
        title={notification.title} 
        message={notification.message}
      />
      }
    </section>
  )
}

export default ContactForm
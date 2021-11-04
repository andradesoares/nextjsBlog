import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const {email, name, message } = req.body

    if (
      !email || 
      !name || 
      name.trim() === '' || 
      !message || 
      message.trim() === ''
    ) {
      res.sattus(422).json({message: 'Invalid input'})
      return
    }

    const newMessage = {
      email, 
      name, 
      message
    }

    let client
    let db

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.1488c.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
  
    try {
      client = await MongoClient.connect(connectionString)
      db = client.db()
    } catch (error) {
      res.status(500).json({message: 'Server error.'})
      return
    }

    try {
      await db.collection('messages').insertOne(newMessage)
    } catch (error) {
      client.close()
      res.status(500).json({message: 'Failed to send message.'})
      return 
    }

    client.close()

    res.status(201).json({message: 'Message sent.', sentMessage: newMessage})
  }
}

export default handler
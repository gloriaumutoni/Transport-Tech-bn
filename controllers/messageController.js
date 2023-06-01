// controllers/messageController.js

import Message from '../models/messageModol.js';

async function createMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Message({ name, email, message });

    await newMessage.save();

    res.status(200).json({ message: 'Message saved successfully' , data:newMessage});
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).json({ error: 'Failed to save message' });
  }
}

export default {
  createMessage,
};



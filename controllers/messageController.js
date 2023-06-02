// controllers/messageController.js

import messageModel from "../models/messageModol.js";

async function createMessage(req, res) {
  try {
    const { name, email, message } = req.body;

    const newMessage = new messageModel({ name, email, message });

    await newMessage.save();

    res
      .status(200)
      .json({ message: "Message saved successfully", data: newMessage });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
}
//read all messages
const readAllMessages = async (req, res) => {
  try {
    const response = await messageModel.find({});

    if (response.length == 0) {
      res.status(404).json({
        message: "No data found",
        data: response,
        error: "No data found",
      });
    } else {
      res.status(200).json({
        message: "Retrieved successfully",
        data: response,
        error: null,
      });
    }
  } catch (error) {
    console.log("Error occurred in readAllMessages: ", error);
    res.status(500).json({
      message: "Error occurred",
      error: error,
      data: null,
    });
  }
};
export { createMessage, readAllMessages };

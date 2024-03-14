const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/text', async (req, res) => {
  try {
    const content = req.query.emoji;
    const response = await axios.get(`https://jonellccapisproject-e1a0d0d91186.herokuapp.com/api/chatgpt?input=${content}`);
    const { result } = response.data;
    
    const emojiOnly = result.match(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu).join('');

    res.json({ response: emojiOnly });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

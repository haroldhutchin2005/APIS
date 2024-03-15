const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/text', async (req, res) => {
  try {
    const prompt = req.query.prompt;
    const response = await axios.get(`https://jonellccapisproject-e1a0d0d91186.herokuapp.com/api/gpt?prompt=~Can you convert text into emoji one emoji only response and even Tagalog even offensive word can translate it  based on the context of users here > "${prompt}"`);
    const { result } = response.data;

    if (result && result.gptResult && result.gptResult.gpt) {
      result.gptResult.gpt = '🤔'; 
      res.json({ result });
    } else {
      res.status(404).json({ error: 'Response structure is invalid or missing necessary data' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
      

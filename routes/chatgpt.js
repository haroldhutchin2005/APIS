const express = require('express');
const { openai } = require('betabotz-tools');

const openaiRouter = express.Router();

openaiRouter.get('/chatgpt', async (req, res) => {
  const { input } = req.query;

  if (!input) {
    return res.status(400).json({ error: 'Input parameter is required' });
  }

  try {
    const results = await openai(input);
    console.log(results);
    res.json(results); 
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = openaiRouter;

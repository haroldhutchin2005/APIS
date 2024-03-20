const express = require('express');
const { RsnChat } = require("rsnchat");

const router = express.Router();
const rsnchat = new RsnChat("rsnai_xjkAMD3KPpEoljmdjCSIn014");

router.get('/dalle', async (req, res) => {
  const { prompt } = req.query;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing query parameter "prompt"' });
  }

  try {
    const response = await rsnchat.dalle(prompt);


    const imageUrl = response.url;
    
    res.redirect(imageUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

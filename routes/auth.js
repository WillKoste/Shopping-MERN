const express = require('express');
const router = express.Router();

// @ Route    POST /api/auth/register
// @ Desc     Register user
// @ Access   Public
router.get('/register', async (req, res) => {
  try {
    res.send('AUTHENTICATION.............. approved ');
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

// @ Route    POST /api/auth/login
// @ Desc     Login user
// @ Access   Public
router.get('/login', async (req, res) => {
  try {
    res.send('LOgiN.............. approved ');
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'});
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

// @ Route    POST /api/auth/login
// @ Desc     Login
// @ Access   Public
router.post('/login', [
  check('email').isEmail(),
  check('password').not().isEmpty()
], async (req, res) => {
  const errors = validationResult(req);

  if(!errors.isEmpty()){
    return res.status(400).json({success: false, errors: errors.array()});
  }
  
  const {email, password} = req.body;
  
  try {
    const user = await User.findOne({email}).select('+password');

    if(!user){
      return res.status(404).json({success: false, data: 'User not available'});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(404).json({success: false, data: 'User not available'});
    }

    const payload = {
      user: {
        id: user.id
      }
    }

    if(!payload){
      return res.status(200).json({success: false, data: 'Something went wrong, please try again'})
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "10h"
    })

    res.json({success: true, data: token});
  } catch (err) {
    console.error(err);
    res.status(500).json({success: false, data: 'Server Error'})
  }
});


// @ Route    POST /api/auth/register
// @ Desc     Register user
// @ Access   Public
router.post('/register', [
  check('name', 'Name field is reuired').not().isEmpty(),
  check('email', 'Valid email address is required').isEmail(),
  check('password', 'Password is required with at least 6 characters').isLength({min: 6})
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({success: false, errors: errors.array()});
  }

  const {name, email, password} = req.body;

  try {
    let user = await User.findOne({email});

    if(user){
      return res.status(200).json({success: false, data: 'User already exists'})
    }

    user = new User({
      name,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt)
    
    await user.save();

    const payload = {
      user: {
        id: user.id
      }
    }

    if(!payload){
      return res.status(200).json({success: false, data: 'Something went wrong, please try again'})
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "10h"
    })

    res.json({success: true, data: token});
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
const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');
const userService = require('./user.service');

dotenv.config();

router.post('/register',
  [
    check('name', 'name').notEmpty(),
    check('email', 'email').isEmail(),
    check('password', 'password').isLength({ min: 6 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'dataRegisterError'
        });
      }
      const {
        name, email, password, userImage
      } = req.body;

      const candidate = await userService.getOneByEmail({ email });

      if (candidate) {
        return res.status(401).json({ message: 'userExists' });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const insertedId = await userService.addUser({
        name, email, password: hashedPassword, userImage
      });
      const token = jwt.sign(
        { userId: insertedId },
        process.env.JWT_SECRET
      );

      res.status(201).json({
        token, userId: insertedId, name, email, userImage
      });
    }
    catch (e) {
      res.status(500).json({ message: 'registerError' });
    }
  });

router.post(
  '/login',
  [
    check('email', 'emailIncorrect').normalizeEmail().isEmail(),
    check('password', 'passwordIncorrect').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'dataLoginError'
        });
      }

      const { email, password } = req.body;

      const user = await userService.getOneByEmail({ email });

      if (!user) {
        return res.status(400).json({ message: 'wrongInput' });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: 'wrongInput' });
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET
      );

      res.json({
        token, userId: user.id, name: user.name, email: user.email, userImage: user.userImage
      });
    }
    catch (e) {
      res.status(500).json({ message: 'loginError' });
    }
  }
);

module.exports = router;

const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel.js');


exports.getUsers = (req, res) => {
  UserModel.getAllUsers((err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

exports.createUser = async (req, res) => {
  try {
    const { name, surname, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { name, surname, email, password: hashedPassword };

    UserModel.createUser(newUser, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).send('User created successfully');
    });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  UserModel.deleteUser(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('User deleted successfully');
  });
};




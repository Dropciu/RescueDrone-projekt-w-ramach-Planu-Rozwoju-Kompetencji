const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/userModel.js');
const { createUserSession } = require("./userSessionController.js")



const login = async (req, res) => {
  try {
    const { email, password } = req.body;


    UserModel.getUserByEmail(email, async (err, results) => {
      if (err) return res.status(500).send(err);

      if (results.length === 0) {
        return res.status(403).send('Invalid email or password');
      }

      const user = results[0];

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(403).send('Invalid email or password');
      }

      
      const IP = req.ip || req.headers['x-forwarded-for'] || req.socket.remoteAddress;

      await createUserSession(user.id, IP, req.headers['user-agent'], (err, results)=>{
        if (err) res.status(500).send(err);
       
        const userSessionId = results.insertId;

        const token = jwt.sign({ id: user.id, email: user.email, userSessionId: userSessionId }, process.env.JWT_SECRET, { expiresIn: '2h' });
        res.cookie('token', token, { maxAge: 1000*60*60*2, httpOnly: true, secure: true });
        res.cookie('loggedIn', true, { maxAge: 1000*60*60*2 });
        res.status(200).json({ message: 'Logged in successfully' });
      })
    
    });
  } catch (err) {
    res.status(500).send(err.message);
  }

};



//SingUp

// const p =  await bcrypt.hash("Kacper2006", 10)
// UserModel.createUser({
//   name: "Kacper",
//   surname: "Drobik",
//   email: "kacper.drobik.kd@gmail.com",
//   password: p
// })






const logout = (req, res) => {
  res.clearCookie("token", { httpOnly: true, secure: true, domain:  process.env.DOMAIN });
  res.clearCookie("loggedIn", { secure: true, domain:  process.env.DOMAIN });  
  
  res.status(200).json('Signed out successfully');
};






module.exports = { login, logout };

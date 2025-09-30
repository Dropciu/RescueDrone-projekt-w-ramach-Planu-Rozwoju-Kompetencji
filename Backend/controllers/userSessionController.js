const UserSession = require('../models/userSessionModel.js');


exports.getUserSession = (id, callback) => {
  return UserSession.getUserSessionById(id, callback);
};


exports.createUserSession = async (userId, IP, navigator, callback) => {
  try {

    const userSession = { 
        userId: userId, 
        IP: IP, 
        createdTime: (new Date(Date.now())).toUTCString(), 
        expiryTime: (new Date(Date.now() + 1000*60*60*2)).toUTCString(), 
        navigator: navigator
    };

    return UserSession.createUserSession(userSession, callback);
    
  } catch (err) {
    return "err"
  }
};


exports.deleteUser = (req, res) => {
  const { id } = req.params;
  UserModel.deleteUser(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('User deleted successfully');
  });
};




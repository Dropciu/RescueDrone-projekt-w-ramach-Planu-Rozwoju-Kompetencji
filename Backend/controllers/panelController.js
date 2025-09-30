const UserModel = require('../models/userModel.js');
const DroneModel = require('../models/droneModel.js');



const getMe = async (req, res) => {
    const { userSessionId, email } = req.session;

    try {
      UserModel.getUserByEmail(email, async (err, results) => {
        res.status(200).json(results[0]);
      })
      
    } catch (error) {
      res.status(500).json({ error: 'Failed get user info' });
    }
}

const getMyPicture = async (req, res) => {
    const { id } = req.session;

    try {
      UserModel.getUserPicture(id, async (err, results) => {
        res.status(200).json(results[0]);
      })
      
    } catch (error) {
      res.status(500).json({ error: 'Failed get user info' });
    }
}


const getDrones = async (req, res) => {
    const { id } = req.session;

    try {
        DroneModel.getDrones(id, async (err, results) => {
        res.status(200).json(results);
    })
      
    } catch (error) {
      res.status(500).json({ error: 'Failed get user info' });
    }
}


const updateDroneName = async (req, res) => {
  const { id } = req.session;
  const { droneId, newName } = req.body;

  try {
    DroneModel.updateDroneName(id, droneId, newName, async (err, results) => {
      if(err) res.status(500).json({ error: 'Failed update drone name' });

      res.status(200).send("ok");
    })
    
  } catch (error) {
    res.status(500).json({ error: 'Failed update drone name' });
  }
}

const updateDroneComment = async (req, res) => {
  const { id } = req.session;
  const { droneId, newComment } = req.body;

  try {
    DroneModel.updateDroneComment(id, droneId, newComment, async (err, results) => {
      if(err) res.status(500).json({ error: 'Failed update drone comment' });
      
      res.status(200).send("ok");
    })
    
  } catch (error) {
    res.status(500).json({ error: 'Failed update drone comment' });
  }
}


const updateDronePicture = async (req, res) => {
  const { id } = req.session;
  const { droneId } = req.query;
  
  const mimetypeBuffer = Buffer.from(req.file.mimetype, 'utf8'); 
  const separator = Buffer.from('||', 'utf8'); 
  const combinedBuffer = Buffer.concat([mimetypeBuffer, separator, req.file.buffer]);

  try {
    DroneModel.updateDronePicture(id, droneId, combinedBuffer, async (err, results) => {
      if(err) res.status(500).json({ error: 'Failed update drone comment' });
      
      res.status(200).send("ok");
    })
    
  } catch (error) {
    res.status(500).json({ error: 'Failed update drone comment' });
  }
}

module.exports = { getMe, getMyPicture, getDrones, updateDroneName, updateDroneComment, updateDronePicture }
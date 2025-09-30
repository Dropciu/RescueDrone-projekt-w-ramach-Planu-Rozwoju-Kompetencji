const express = require('express');
const { verifyToken } = require("../middlewares/authMiddleware")
const router = express.Router();
const { getMe, getMyPicture, getDrones, updateDroneName, updateDroneComment, updateDronePicture } = require("../controllers/panelController")

const multer = require('multer');
const storage = multer.memoryStorage()
const upload = multer({ storage });


router.get('/getMe', verifyToken, getMe);
router.get('/getMyPicture', verifyToken, getMyPicture);
router.get('/getDrones', verifyToken, getDrones);

router.put('/updateDroneName', verifyToken, updateDroneName);
router.put('/updateDroneComment', verifyToken, updateDroneComment);
router.post('/updateDronePicture', upload.single('image'), verifyToken, updateDronePicture);


module.exports = router;

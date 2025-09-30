const db = require('../config/db.js');


class DroneModel {

  static getDrones(userId, callback) {
    const sql = 'SELECT * FROM drones JOIN `drones-picture` ON `drones-picture`.droneId = drones.id WHERE userId = ?;';
    db.query(sql, [userId], callback);
  }

  static updateDroneName(userId, droneId, newName, callback) {
    const sql = "UPDATE `drones` SET `name`=? WHERE `drones`.`id` = ? AND `drones`.`userId` = ?;";
    db.query(sql, [newName, droneId, userId], callback);
  }

  static updateDroneComment(userId, droneId, newComment, callback) {
    const sql = "UPDATE `drones` SET `comment`=? WHERE `drones`.`id` = ? AND `drones`.`userId` = ?;";
    db.query(sql, [newComment, droneId, userId], callback);
  }

  static updateDronePicture(userId, droneId, file, callback) {
    const sql = 'UPDATE `drones-picture` JOIN `drones` ON `drones`.`id` = `drones-picture`.`droneId` SET `drones-picture`.`picture`= "?" WHERE `drones-picture`.`droneId` = ? AND `drones`.`userId` = ?;';
    
    db.query(sql, [file, droneId, userId], callback);
  }

}


module.exports = DroneModel;

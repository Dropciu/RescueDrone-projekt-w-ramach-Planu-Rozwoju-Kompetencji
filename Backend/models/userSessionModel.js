const db = require('../config/db.js');


class UserSession {
    static getUserSessionById(id, callback) {
        const sql = 'SELECT * FROM `users-sessions` WHERE id = ?';
        db.query(sql, [id], callback);
    }

  static createUserSession(userSession, callback) {
    const sql = 'INSERT INTO `users-sessions` (userId, IP, createdTime, expiryTime, navigator) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [userSession.userId, userSession.IP, userSession.createdTime, userSession.expiryTime, userSession.navigator], callback);
  }

  static deleteUserSession(id, callback) {
    const sql = 'DELETE FROM `users-sessions` WHERE id = ?';
    db.query(sql, [id], callback);
  }
}


module.exports = UserSession;

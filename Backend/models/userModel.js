const db = require('../config/db.js');


class UserModel {
  static getAllUsers(callback) {
    const sql = 'SELECT * FROM users;';
    db.query(sql, callback);
  }

  static getUserByEmail(email, callback) {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], callback);
  }

  static getUserPicture(id, callback) {
    const sql = 'SELECT * FROM `users-picture` WHERE userId = ?';
    db.query(sql, [id], callback);
  }

  static createUser(user, callback) {
    const sql = 'INSERT INTO users (name, surname, email, password) VALUES (?, ?, ?, ?);';
    db.query(sql, [user.name, user.surname, user.email, user.password], callback);
  }

  static deleteUser(id, callback) {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  }
}


module.exports = UserModel;

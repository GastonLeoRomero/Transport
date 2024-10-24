var pool = require("./bd");
var md5 = require("md5");

async function getUserByUserNameAndPassword(user, password) {
  try {
    const query =
      "select * from usuarios where usuarios = ? and password = ? limit 1";

    const rows = await pool.query(query, [user, md5(password)]);
    return rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getUserByUserNameAndPassword };
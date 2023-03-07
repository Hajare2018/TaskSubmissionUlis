const { connection } = require("../model/connection");

let getImageData = async (req, res) => {
  try {
    sqlQuery = "SELECT * FROM uploadimage";
    await con.query(sqlQuery, (err, result) => {
      if (err) {
        return res.send({ status: 400, Error: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch {
    return res.send({ status: 400, Error: err.sqlMessage });
  }
};

const postImageData = (req, res) => {
  try {
    const data = {
      image: req.file.path,
    };
    const sqlQuery = "INSERT INTO uploadimage SET ?";
    con.query(sqlQuery, data, (err, result) => {
      if (err) {
        return res.send({ status: 400, Error: err.sqlMessage });
      }
      res.send({ status: 200, response: result });
    });
  } catch {
    return res.send({ status: 400, Error: err.sqlMessage });
  }
};

module.exports = { getImageData, postImageData };

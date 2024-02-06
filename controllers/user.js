const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE,
});

exports.register = (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  db.query("SELECT email FROM users WHERE email=?", [email], (error, result) => {
    if (error) {
      console.log(error);
      // Handle the error appropriately, e.g., send an error response to the client
    } else {
      if (result.length > 0) {
        return res.render("register", { msg: 'Email id already taken' });
      } else if (password !== confirmpassword) {
        return res.render("register", { msg: 'Password mismatch' });
      } else {
        // Perform the user insertion within the callback of the SELECT query
        db.query('INSERT INTO users SET ?', { name: name, email: email, pass: password }, (error, result) => {
          if (error) {
            console.log(error);
            // Handle the error appropriately, e.g., send an error response to the client
          } else {
            console.log(result);
            return res.render("register", { msg: 'User registration success' });
          }
        });
      }
    }
  });
};

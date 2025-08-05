const adminAuth = (req, res, next) => {
  //Logic of checking if the admin is authorized
  console.log("admin auth is getting checked!");
  const token = "erfdfg";
  const isAdminAuth = token === "erf";
  if (!isAdminAuth) {
    res.status(401).send("Unauthorized request!");
  } else {
    next();
  }
};

module.exports = { adminAuth };

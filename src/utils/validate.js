const validator = require("validator");

const validateSignupData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name is not valid.");
  }
  if (!validator.isEmail(emailId)) {
    throw new Error("Enter a valid email address.");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Please enter a strong password.");
  }
};

const validateProfileEditData = (req) => {
  const isAllowedFields = [
    "firstName",
    "lastName",
    "emailId",
    "age",
    "gender",
    "photoUrl",
    "about",
    "skills",
  ];

  const isEditAllowed = Object.keys(req.body).every((field) =>
    isAllowedFields.includes(field)
  );

  return isEditAllowed;
};

module.exports = { validateSignupData, validateProfileEditData };

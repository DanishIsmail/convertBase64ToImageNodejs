require("dotenv").config();

const isEmailIsValid = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

module.exports = {
  isEmailIsValid,
};

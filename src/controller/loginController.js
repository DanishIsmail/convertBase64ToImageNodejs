const fs = require("fs"),
  path = require("path"),
  result = require("../response/result"),
  messages = require("../utilities/errormessages");

require("dotenv").config();

const saveImage = async (req, res) => {
  try {
    const data = req.body.profile.substr(req.body.profile.indexOf(",") + 1);
    const buffer = Buffer.from(data, "base64");
    fs.writeFileSync(
      path.join(__dirname, `../../public/assets/${Math.random()}.jpg`),
      buffer
    );
    result.isError = false;
    result.message = messages.identityVerifiedSuccess;
    res.send({ result });
  } catch (error) {
    console.log("hello");
    result.isError = true;
    result.message = error.message;
    res.send(result);
  }
};

module.exports = {
  saveImage,
};

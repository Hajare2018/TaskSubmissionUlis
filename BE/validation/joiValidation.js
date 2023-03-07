const joi = require("joi");
const FileType = require("file-type");

const schema = joi.object({
  image: joi.binary().required(),
});

const validate = async (req, res, next) => {
  const { error } = await schema.validate(req.body);
  if (error) {
    res.send(error.details[0].message);
  }
  const { mime } = await FileType.fromBuffer(user.image);
  if (!["image/png", "image/jpg"].includes(mime)) {
    res.send("Use jpg/png file type");
  } else {
    next();
  }
};

module.exports = {validate}
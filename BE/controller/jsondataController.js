const engJsonData = require("../english.json");
const hindiJsonData = require("../hindi.json");

let englishLanguageData = (req, res) => {
  const data = engJsonData;
  res.json(data);
  console.log(data, "mydata");
};

let hindiLanguageData = (req, res) => {
  const data = hindiJsonData;
  res.json(data);
  console.log(data, "mydata");
};

module.exports = { englishLanguageData, hindiLanguageData };

// app.get("/english-data", (req, res) => {
//   const data = require("./english_language.json");
//   res.json(data);
//   console.log(data, "mydata");
// });

// app.get("/hindi-data", (req, res) => {
//   const data = require("./hindi_language.json");
//   res.json(data);
//   console.log(data);
// });

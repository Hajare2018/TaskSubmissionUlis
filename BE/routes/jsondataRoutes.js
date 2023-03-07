const express = require("express")
const { englishLanguageData, hindiLanguageData } = require("../controller/jsondataController")
const jsondataRoutes = express.Router()

jsondataRoutes.get("/eng-json-data", englishLanguageData)

jsondataRoutes.get("/hindi-json-data",hindiLanguageData)

module.exports = { jsondataRoutes}
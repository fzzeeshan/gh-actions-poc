const fs = require("fs");
const ejs = require("ejs");

const jsonReportPath = "./reports/results.json";
const htmlReportPath = "./reports/results.html";

// Read the JSON report file
const jsonReport = fs.readFileSync(jsonReportPath, "utf8");

// Load the HTML template
const template = fs.readFileSync("./template.ejs", "utf8");

// Render the HTML report using the JSON data
const htmlContent = ejs.render(template, { jsonReport });

// Save the HTML report file
fs.writeFileSync(htmlReportPath, htmlContent, "utf8");

console.log(`HTML report generated at ${htmlReportPath}`);

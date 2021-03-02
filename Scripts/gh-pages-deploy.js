/* eslint-disable no-console */
const execa = require("execa");
var rimraf = require("rimraf");
const fs = require("fs");
const appURL = 'franciscomacedo.pt';


(async () => {
  try {
    await execa("git", ["checkout", "--orphan", "gh-pages"]);
    // eslint-disable-next-line no-console
    console.log("Building started...");
    await execa("npm", ["run", "build"]);
    // Understand if it's dist or build folder
    const folderName = fs.existsSync("dist") ? "dist" : "build";
    await fs.writeFile(`${folderName}/CNAME`, appURL, function(err) {
      if (err === null){
        console.log('website url defined CNAME:', appURL)
      }
      else{
        console.log(err)
      }
    });
    
    await execa("git", ["--work-tree", folderName, "add", "--all"]);
    await execa("git", ["--work-tree", folderName, "commit", "-m", "gh-pages"]);
    console.log("Pushing to gh-pages...");
    await execa("git", ["push", "origin", "HEAD:gh-pages", "--force"]);
    // await execa("rm", ["-r", folderName]);
    await rimraf(folderName, function () { console.log("removed dist folder");});
    await execa("git", ["checkout", "-f", "master"]);
    await execa("git", ["branch", "-D", "gh-pages"]);
    console.log("Successfully deployed");
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message);
    process.exit(1);
  }
})();
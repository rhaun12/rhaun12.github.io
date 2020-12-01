/*INSERT GROUP ID AND COOKIE BELOW*/
 
var groupId = 4496349 // << Replace 12345 with your Group Id
var cookie = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_037436661CA53F1E4EF90AA2544A9D556B00B6C34F063126FDD58DD640743720F43B7E61C0FBE97B9BAB4FD01E2A4C60EB95164ACBF1CF2E29793234DF0154643DD67596FA848107AE0DFD0DD67AAC1302A1FF44AA1C83888D49CF0B2A27975D6E019683FD2CE664E90791313AEF895E107CB20EDE6B528CD8A1090C6C5A568F7B6AA61800BDEC30EAF8679B7ABE1BA06D7EC06F79BADC95FDCE2BB05D268845C43F2D709590834B50139F61B8849A5DA8B60560697380660B58BF47F4276669ED190B2BB90E978BDBA66785EB531C21A49C18147A4F5B679A026F44F82BA585A276CA8ED71D5561FE4002F2C2F8CA72A07B44B8F0C87982E8FA64AF75FCCBFE45AAEDFD33B00DD07ED2D9FA3E8124C220667FEEFA57EF36FDEEB40BACD2BC8BA62FE5AF" // << Put your account cookie inside of the quotes
 
/*INSERT GROUP ID AND COOKIE ABOVE*/
 
 
const express = require("express");
const rbx = require("noblox.js");
const app = express();
 
app.use(express.static("public"));
 
async function startApp() {
  await rbx.cookieLogin(cookie);
  let currentUser = await rbx.getCurrentUser();
  console.log(currentUser.UserName);
}
startApp();
 
app.get("/ranker", (req, res) => {
    var User = req.param("userid");
    var Rank = req.param("rank");
  
    rbx.setRank(groupId, parseInt(User), parseInt(Rank));
    res.json("Ranked!");
});
 
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

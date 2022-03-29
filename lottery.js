
const numRegex = /\d/g; // just the numbers
var tezoData = [];
var currentHash;
var resultNumRegex;
var lottery;
var apiUrl = "https://api.tzkt.io/v1/cycles"; // URL to grab this stuff from
var spacing = 100;
var leftSide = 69;
var catSpace = 50;

function setup() {
  noCanvas();
  head();
  jimmi()  
}

function jimmi(){
var img = createImg(
  "./background/backji.png",
  "jimmie the cat "
);
img.position(-catSpace*10,0);
img.size(innerWidth,innerHeight*.99)
}

function head() {
  loadJSON(apiUrl, getHead);
}

function getHead(data) {
  tezoData = data;
  currentHash = tezoData[0].randomSeed;
  resultNumRegex = currentHash.match(numRegex).slice(0, 16).join("");
  randomSeed(resultNumRegex);
  lottery = round(random() * 420);
  var pthing = createP("(luck)=>{" + lottery + "}");
  pthing.style("font-size:108px");
  pthing.style("text-align:center");
  pthing.style("color:white");
  pthing.position(leftSide, displayHeight * 0.2);
  var morePs = createP("HA$H: " + resultNumRegex);
  morePs.style("fonts-size:36px");
  morePs.style("color:yellow");
  morePs.position(leftSide, displayHeight * 0.42);
  var catImg = createImg(
    "./background/logo.png",
    "cat in the tkxt tezo baking hat"
  );
  catImg.size(catSpace, catSpace);
  catImg.position(leftSide - catSpace, displayHeight - spacing * 2);
  var topthingy = createA('https://www.fxhash.xyz/generative/4369', 'FXHash Mondrian Ticket');
  topthingy.position(leftSide,catSpace);
  topthingy.style('color:blue')
  topthingy.style('font-size:36px');
  var bottomAck = createA('http://tzkt.io/', 'Powered by TzKT API');
  bottomAck.position(leftSide, displayHeight - spacing * 2);
  bottomAck.style("color:#5963ff");
  bottomAck.style("font-size:18px");
  var img = createImg(
    "./background/asterisk-01.png",
    "the p5 magenta asterisk"
  );
  img.position(catSpace * 5, displayHeight - spacing * 2);
  img.size(catSpace, catSpace);
  var bottomP5 = createA("https://p5js.org/", "P5.js");
  bottomP5.position(catSpace * 6, displayHeight - spacing * 2);
  bottomP5.style("color:red");
  bottomP5.style("font-size:36px");
}


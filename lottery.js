
const numRegex = /\d/g; // just the numbers 
let tezoData = []; 
let currentHash; 
let resultNumRegex;
let lottery;
let apiUrl = "https://api.tzkt.io/v1/cycles"; // URL to grab this stuff from
var nextUpdate;

const OGHolders = [
  'tz1bm6ku1MdBLvaSLs9tYX2TaFFw6Q76SdMS',
  'tz1SioLF6ViffZjf9REHXCdJe4SjyuS4D9s6',
   'tz2RUdXvAKyJSfX39koV7WtPE423adE2fGg2',
   'tz1aeDqdw9729EBCb4j2uUhZQ2ctfco7W6uT',
   'tz1RBMsWWneoYbkbaxAhcnhNsJrpfSEMocwL',
   'tz1fsz5x9dABLHt97kvXAa3LYomtu1BVrS7e',
   'tz1RfaqRfuQ1V484wP2M17eEhpd7NvHszyva',
   'tz1RfaqRfuQ1V484wP2M17eEhpd7NvHszyva',
   'tz1LV3UhLA9WPjAodmhqypb6cF2daod1rrVn',
   'tz1RytjjMduXapWhyUK26cYkqLXEsU6NhG1k',
   'tz1gj3xrfZLCjsZWPjMxJ66D5kTxFs1W2x2A',
   'tz1gj3xrfZLCjsZWPjMxJ66D5kTxFs1W2x2A',
   'tz1TSdoeS5udkYmVr1cEpErTqxGVrC3Kcd2J',
   'tz1SDghykbfny4ss819wZqvVAozjvEAvCedZ',
   'tz1SDghykbfny4ss819wZqvVAozjvEAvCedZ',
   'tz1SDghykbfny4ss819wZqvVAozjvEAvCedZ',
   'tz1SDghykbfny4ss819wZqvVAozjvEAvCedZ',
   'tz1SDghykbfny4ss819wZqvVAozjvEAvCedZ',
 ]
 

function setup() {
  noCanvas()
  head();

}

function head() {
  loadJSON(apiUrl, getHead);
}

function getHead(data) {
  tezoData = data.slice(0,10); //past 10 events 
  currentHash = tezoData[0].randomSeed;  // grab that 1st seed 
  resultNumRegex = currentHash.match(numRegex).slice(0, 16).join("");
  randomSeed(resultNumRegex);
  lottery = round(random() * 420);


  nextUpdate = tezoData[4].startTime;
  document.getElementById("nextdrop").innerHTML =  "Next Cycle/ Lottery Drawing: " + `${nextUpdate}`;
  document.getElementById("hash").innerHTML =  " Current Ha$H: " + ` ${resultNumRegex} `;
  document.getElementById("winner").innerHTML = ` ${lottery} ` ;
  console.log(tezoData)
}



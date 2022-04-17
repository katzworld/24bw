let tezoData;
let currentHash;
let numRegex = /\d/g; // just the numbers 
let resultNumRegex;
let lottery;
let apiUrl = "https://api.tzkt.io/v1/cycles"; // URL to grab this stuff from
let nextUpdate;

const OGHolders = [ // the ones who hold the OG Token on FX 
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
    getStuff()

}

async function getStuff() {
    const response = await fetch(apiUrl);
    const data = await response.json();

    tezoData = data.map(function(giveMeThatApiDrip) {
        return `${giveMeThatApiDrip.randomSeed}`
    })
    nextUpdate = data[4].startTime; // what time fo the next drop
    currentHash = tezoData[0].match(numRegex).slice(0, 16).join("");
    randomSeed(currentHash); //same seed same result 
    lottery = round(random() * 420); // RNG based yaaa

    document.getElementById("nextdrop").innerHTML = "Next Cycle/ Lottery Drawing: " + `${nextUpdate}`;
    document.getElementById("hash").innerHTML = " Current Ha$H: " + ` ${currentHash} `;
    document.getElementById("winner").innerHTML = ` ${lottery} `;

}
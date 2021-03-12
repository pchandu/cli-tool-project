const funcs = require("./scripts.js")
const prompt = require('prompt-sync')({sigint: true});

exports.parkbotScript = parkbot;
function parkbot(){
    const command = prompt('')
    if(command === "exit") return;
    const commandArray = command.split(" ");
    const file = commandArray[0];
    const script = commandArray[1];
    const input = commandArray[2];
    const data = require(`./${file}`);
    if (script === "locate") funcs.locate(data, input);
    if (script === "find_price_hourly_lte") funcs.findPriceHourlyGT(data, input);
    if (script === "find_price_hourly_gt") funcs.findPriceHourlyLTE(data, input);
}


const info = require("./information.js");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `I'm ${info.student} and i study at Wild code school of ${info.campus}`,
    e : "oO",
    T : "U "
}));

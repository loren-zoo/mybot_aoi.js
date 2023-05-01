module.exports = (bot) => {

const aoijs = require('aoi.js');
const loader = new aoijs.LoadCommands(bot)

loader.load(bot.cmd,"./Commandes/")



}
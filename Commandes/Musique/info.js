module.exports = [{
    name:"nowinfo",
    aliases:"nowplaying",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $color[$getServerVar[color]]
    $title[1;$songInfo[title];$songInfo[url]]
    $image[1;$replaceText[$songInfo[thumbnail];undefined;$songInfo[artistURL]]]
    $addField[1;Queue;\`$numberSeparator[$queueLength]\`- \`$songInfo[position]\`;yes]
    $addField[1;Likes;\`$songInfo[likes]\` likes;yes]
    $addField[1;Views;\`$songInfo[views]\` views;yes]
    $addField[1;Chanteur/Artiste;\`$songInfo[artist]\`;yes]
    $addField[1;Lancée par;$songInfo[requester]]
    $onlyIf[$queueLength!=0;Aucune musique ne se joue]
$endif
    `
}]
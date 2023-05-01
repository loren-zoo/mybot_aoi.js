module.exports = [{
    name:"rep",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $setUservar[rep;$sum[$getUserVar[rep;$get[user]];1];$get[user]]
    $onlyIf[$userExists[$get[user]]==true;Utilisateur introuvable {delete:5s}]
    $onlyIf[$authorID!=$get[user];Tu ne peux pas t'auto rep]
    $let[user;$findUser[$message[1];no]]
    $onlyif[$message[1]!=;La mention ou l'id de l'utilisateur est invalide {delete:5s}]
    $cooldown[10h;Veuillez attendre %time% avant de donner un point de réputation.]
    $endif

    `
}]
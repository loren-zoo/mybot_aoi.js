module.exports = ({
name: "clear",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$if[$$getservervar[clearlimit]!=off]
$clear[$sum[$message[1];1]
$onlyif[$message[1]<$getservervar[clearlimit];Nombre de messages trop haut. {delete:5s}]
$onlyif[$message[1]!=0;Je ne peux pas supprimer 0 message. {delete:5s}]
$onlyif[$isnumber[$message[1]]==true;Argument invalide. {delete:5s}]
$onlyif[$message[1]!=;Argument invalide. {delete:5s}]
$endif
$if[$getservervar[clearlimit]==off]
$clear[$sum[$message[1];1]
$onlyif[$message[1]<101;Nombre de messages trop haut{delete:5s}]
$onlyif[$message[1]!=0;Je ne peux pas supprimer 0 message. {delete:5s}]
$onlyif[$isnumber[$message[1]]==true;Argument invalide. {delete:5s}]
$onlyif[$message[1]!=;Argument invalide. {delete:5s}]
$endif
$endif




`

},{
name:"purge",
$if:"v4",
code:`


$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$forEachGuildChannel[purgeuser]
$onlyif[$memberExists[$get[user]]==true;Le membre est introuvable. {delete:5s}]
$let[user;$findUser[$message[1];no]]
$onlyif[$message[1]!=;Argument invalide. {delete:5s}]
$endif



`
},{
    type:"awaited",
    name:"purgeuser",
    code:`
    $clear[100;$get[user];no;$channelID]
    $let[user;$findUser[$message[1];no]]
    `
}
)
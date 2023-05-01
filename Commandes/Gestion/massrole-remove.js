module.exports =[{
name: "massrole remove",
$if:"v4",
code: `
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$forEachMember[5;{};massremove;]
$author[1;Retrait du rôle <@&$findRole[$message]> à $djsEval[message.guild.roles.cache.get('$findRole[$message]').members.map(m=>m.id).length;yes] membre(s).]
$color[1;$getServerVar[color]]
$onlyIf[$rolePosition[$highestRole[$clientID];$guildID]<$rolePosition[$findRole[$message[1]];$guildID];Je n'ai pas les permissions nécessaires pour faire ça]
    $onlyIf[$roleExists[$findRole[$message[1]]]==true;La mention ou l'id du rôle est invalide.]
    $onlyIf[$message[1]!=;Argument manquant]
    $endif
    `
},{
type: "awaited",
$if:	"v4",
name: "massremove",
code: `
$if[$hasRoles[$guildID;$authorID;$findRole[$message]]==true]
$takeRole[$guildID;$authorID;$findRole[$message]]
$endif`}]
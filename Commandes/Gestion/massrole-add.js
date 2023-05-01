module.exports =[{
    name: "massrole add",
    $if:"v4",
    code: `
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $forEachMember[5;{};massadd;]
    $color[1;$getServerVar[color]]
    
    $author[1;Ajout du rôle $rolename[$findRole[$message[1]]] (\`$findRole[$message[1]]\`) à $sub[$memberscount;$djsEval[message.guild.roles.cache.get('$findRole[$message[1]]').members.map(m=>m.id).length;yes]] membres.]
    $wait[10ms]
    $onlyIf[$rolePosition[$highestRole[$clientID];$guildID]<$rolePosition[$findRole[$message[1]];$guildID];Je n'ai pas les permissions nécessaires pour faire ça]
    $onlyIf[$roleExists[$findRole[$message[1]]]==true;La mention ou l'id du rôle est invalide.]
    $onlyIf[$message[1]!=;Argument manquant]
    $endif
    `
    },{
    type: "awaited",
    $if:	"v4",
    name: "massadd",
    code: `
    $if[$hasRoles[$guildID;$authorID;$findRole[$message[1]]]==false]
    $giveRole[$guildID;$authorID;$findRole[$message[1]]]
    $endif`}]
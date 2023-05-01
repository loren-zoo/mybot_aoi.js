module.exports = [{
    name:"logall",
    aliases:"log all",
    $if:"V4",
    code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true]
$channelSendMessage[$channelID;<@$authorID> Toutes les logs sont configurés sur ce salon]
$wait[1s]
$setServerVar[joinleavelog;$get[id]]
$setservervar[raidlog;$get[id]]
$setservervar[channellog;$get[id]]
$setservervar[boostlog;$get[id]]
$setservervar[msglog;$get[id]]
$setservervar[rolelog;$get[id]]
$setservervar[voicelog;$get[id]]


$let[id;$findchannel[$message[1];yes]]
$onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]

$endif
    
    `
}]
module.exports = [{
name: "antichannel",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$if[$message[1]==create]
$if[$message[2]==on]
L'antichannel create est maintenant __activé__
$setServerVar[antichannelcreate;on]
$setServerVar[antichannelcreatemax;off]
$endif
$if[$message[2]==off]
L'antichannel create est maintenant __désactivé__
$setServerVar[antichannelcreate;off]
$setServerVar[antichannelcreatemax;off]
$endif
$if[$message[2]==max]
L'antichannel create est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
$setServerVar[antichannelcreate;on]
$setServerVar[antichannelcreatemax;on]
$endif
$onlyif[$checkContains[$message[2];on;off;max]==true;L'option est invalide {delete:5s}]
$endif

$if[$message[1]==update]
$if[$message[2]==on]
L'antichannel update est maintenant __activé__
$setServerVar[antichannelupdate;on]
$setServerVar[antichannelupdatemax;off]
$endif
$if[$message[2]==off]
L'antichannel update est maintenant __désactivé__
$setServerVar[antichannelupdate;off]
$setServerVar[antichannelupdatemax;off]
$endif
$if[$message[2]==max]
L'antichannel update est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
$setServerVar[antichannelupdate;on]
$setServerVar[antichannelupdatemax;on]
$endif
$onlyif[$checkContains[$message[2];on;off;max]==true;L'option est invalide {delete:5s}]
$endif

$if[$message[1]==delete]
$if[$message[2]==on]
L'antichannel delete est maintenant __activé__
$setServerVar[antichanneldelete;on]
$setServerVar[antichanneldeletemax;off]
$endif
$if[$message[2]==off]
L'antichannel delete est maintenant __désactivé__
$setServerVar[antichanneldelete;off]
$setServerVar[antichanneldeletemax;off]
$endif
$if[$message[2]==max]
L'antichannel delete est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
$setServerVar[antichanneldelete;on]
$setServerVar[antichanneldeletemax;on]
$endif
$onlyif[$checkContains[$message[2];on;off;max]==true;L'option est invalide {delete:5s}]
$endif
$onlyif[$checkContains[$message[1];create;update;delete]==true;L'option de l'antichannel est invalide {delete:5s}]
$endif


`},{
type: "channelCreate",
$if: "v4",
code:`
$if[$getservervar[antichannelcreatemax]==off]
$if[$getservervar[channelcreate]==kick]
$kick[$get[user];$guildID;Crée un salon]
$endif 
$if[$getservervar[channelcreate]==ban]
$ban[$guildID;$get[user];0;Crée un salon]
$endif
$if[$getservervar[channelcreate]==derank]
$takeRoles[$guildID;$authorID;$joinSplitText[;]]
$textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
$onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
$endif

$if[$getservervar[antichannelcreatemax]==on]
$if[$getservervar[channelcreate]==kick]
$kick[$get[user];$guildID;Crée un salon]
$endif 
$if[$getservervar[channelcreate]==ban]
$ban[$guildID;$get[user];0;Crée un salon]
$endif
$if[$getservervar[channelcreate]==derank]
$takeRoles[$guildID;$authorID;$joinSplitText[;]]
$textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
$endif
$endif
$deletechannels[$channelID]
$if[$serverChannelExists[$getservervar[raidlog]]==true]
$channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) a tenté de créer un salon sur le serveur}{color:$getservervar[color]}}]
$endif
$onlyIf[$authorID!=$ownerID;]
$onlyif[$checkContains[$getVar[owner];<@$get[user]>]==false;]
$onlyIf[$get[user]!=$getVar[buyerID];]
$onlyIf[$get[user]!=$clientid;]
$let[user;$finduser[$getAuditLogs[1;;CHANNEL_CREATE;$guildID;{executor.id}]]]
$onlyif[$getservervar[antichannelcreate]==on;]
`

},{

type: "channelUpdate",
$if: "v4",
code:`$if[$getservervar[antichannelupdatemax]==off]
$if[$getservervar[channelupdate]==kick]
$kick[$get[user];$guildID;Modifie un salon]
$endif 
$if[$getservervar[channelupdate]==ban]
$ban[$guildID;$get[user];0;Modifie un salon]
$endif
$if[$getservervar[channelupdate]==derank]
$takeRoles[$guildID;$authorID;$joinSplitText[;]]
$textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
$endif
$onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
$endif


$if[$getservervar[antichannelupdatemax]==on]
$if[$getservervar[channelupdate]==kick]
$kick[$get[user];$guildID;Modifie un salon]
$endif 
$if[$getservervar[channelupdate]==ban]
$ban[$guildID;$get[user];0;Modifie un salon]
$endif
$if[$getservervar[channelupdate]==derank]
$takeRoles[$guildID;$authorID;$joinSplitText[;]]
$textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
$endif

$endif


$if[$serverChannelExists[$getservervar[raidlog]]==true]
$channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) a tenté de modifier un salon sur le serveur}{color:$getservervar[color]}}]
$endif


$onlyIf[$authorID!=$ownerID;]
$onlyif[$checkContains[$getVar[owner];<@$get[user]>]==false;]
$onlyIf[$get[user]!=$getVar[buyerID];]
$onlyIf[$get[user]!=$clientid;]
$let[user;$finduser[$getAuditLogs[1;;CHANNEL_UPDATE;$guildID;{executor.id}]]]
$onlyif[$getservervar[antichannelupdate]==on;]
`
},{
type: "channelDelete",
$if: "v4",
code:`
$if[$getservervar[antichanneldeletemax]==off]
$if[$getservervar[channeldelete]==kick]
$kick[$get[user];$guildID;Supprime un salon]
$endif 
$if[$getservervar[channeldelete]==ban]
$ban[$guildID;$get[user];0;Supprime un salon]
$endif
$if[$getservervar[channeldelete]==derank]
$takeRoles[$guildID;$authorID;$joinSplitText[;]]
$textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
$endif
$onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
$endif
$if[$getservervar[antichanneldeletemax]==on]
$if[$getservervar[channeldelete]==kick]
$kick[$get[user];$guildID;Supprime un salon]
$endif 
$if[$getservervar[channeldelete]==ban]
$ban[$guildID;$get[user];0;Supprime un salon]
$endif
$if[$getservervar[channeldelete]==derank]
$takeRoles[$guildID;$authorID;$joinSplitText[;]]
$textSplit[$replaceText[$userRoles[$authorID;$guildID;id;+;'];+;-];-]
$endif
$endif


$deletechannels[$channelID]
$if[$serverChannelExists[$getservervar[raidlogs]]==true]
$channelsendmessage[$getservervar[raidlogs];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) a tenté de supprimer un salon sur le serveur}{color:$getservervar[color]}}]
$endif


$onlyIf[$authorID!=$ownerID;]
$onlyif[$checkContains[$getVar[owner];<@$get[user]>]==false;]
$onlyIf[$get[user]!=$getVar[buyerID];]
$onlyIf[$get[user]!=$clientid;]
$let[user;$finduser[$getAuditLogs[1;;CHANNEL_DELETE;$guildID;{executor.id}]]]
$onlyif[$getservervar[antichanneldelete]==on;]
`
}]
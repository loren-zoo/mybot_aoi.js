module.exports = ({
name:"del punish",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$if[$message[1]==antiban]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[ban;]
$endif
$if[$message[1]==antiunban]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[unban;]
$endif
$if[$message[1]==antirolecreate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[rolecreate;]
$endif
$if[$message[1]==antiroleupdate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[roledelete;]
$endif
$if[$message[1]==antiroledelete]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[roledelete;]
$endif
$if[$message[1]==antichannelcreate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[channelcreate;]
$endif
$if[$message[1]==antichannelupdate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[channeldelete;]
$endif
$if[$message[1]==antichanneldelete]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[channemdelete;]
$endif
$if[$message[1]==antibot]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[bot;]
$endif
$if[$message[1]==antirank]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[rank;]
$endif
$if[$message[1]==antiupdate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ est désactivé]
$setServerVar[update;]
$endif
$onlyif[$checkContains[$message[1];antiupdate;antibot;antirolecreate;antiroledelete;antiroleupdate;antichannelcreate;antichannelupdate;antichanneldelete;antiban;antiunban;all]==true;L'antiraid est invalide {delete:5s}]
$endif


`

})
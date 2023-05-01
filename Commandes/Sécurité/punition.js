module.exports = ({
name:"punish",
$if: "v4",
code:`
$if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
$if[$message[1]==antiban]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[ban;$message[2]]
$endif
$if[$message[1]==antiweb]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[web;$message[2]]
$endif
$if[$message[1]==antiunban]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[unban;$message[2]]
$endif
$if[$message[1]==antirolecreate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[rolecreate;$message[2]]
$endif
$if[$message[1]==antiroleupdate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[roledelete;$message[2]]
$endif
$if[$message[1]==antiroledelete]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[roledelete;$message[2]]
$endif
$if[$message[1]==antichannelcreate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[channelcreate;$message[2]]
$endif
$if[$message[1]==antichannelupdate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[channeldelete;$message[2]]
$endif
$if[$message[1]==antichanneldelete]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[channemdelete;$message[2]]
$endif
$if[$message[1]==antibot]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[bot;$message[2]]
$endif
$if[$message[1]==antirank]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[rank;$message[2]]
$endif
$if[$message[1]==antiupdate]
$channelsendmessage[$channelID;La punition pour __l'$message[1]__ sera maintenant un \`$message[2]\`]
$setServerVar[update;$message[2]]
$endif
$onlyif[$checkContains[$message[2];kick;derank;ban]==true;La sanction est invalide {delete:5s}]
$onlyif[$checkContains[$message[1];antiupdate;;antiweb;antibot;antirolecreate;antiroledelete;antiroleupdate;antichannelcreate;antichannelupdate;antichanneldelete;antiban;antiunban;all]==true;L'antiraid est invalide {delete:5s}]
$endif

`

})
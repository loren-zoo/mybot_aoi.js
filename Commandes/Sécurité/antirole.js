module.exports = [{
    name: "antirole",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==create]
    $if[$message[2]==on]
    L'antirole create est maintenant __activé__
    $setServerVar[antirolecreate;on]
    $setServerVar[antirolecreatemax;off]
    $onlyif[$getservervar[antirolecreatemax]==on;L'antirole create est déjà __activé__]
    $endif
    $if[$message[2]==off]
    L'antirole create est maintenant __désactivé__
    $setServerVar[antirolecreate;off]
    $setServerVar[antirolecreatemax;off]
    $onlyif[$getservervar[antirolecreate]==on;L'antirole create est déjà __désactivé__]
    $endif
    $if[$message[2]==max]
    L'antirole create est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antirolecreate;on]
    $setServerVar[antirolecreatemax;on]
    $onlyif[$getservervar[antirolecreatemax]==off;L'antirole create max est déjà __activé__]
    $endif
    $onlyif[$checkContains[$message[2];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    
    $if[$message[1]==update]
    $if[$message[2]==on]
    L'antirole update est maintenant __activé__
    $setServerVar[antiroleupdate;on]
    $setServerVar[antiroleupdatemax;off]
    $onlyif[$getservervar[antiroleupdatemax]==on;L'antirole update est déjà __activé__]
    $endif
    $if[$message[2]==off]
    L'antirole update est maintenant __désactivé__
    $setServerVar[antiroleupdate;off]
    $setServerVar[antiroleupdatemax;off]
    $onlyif[$getservervar[antiroleupdate]==on;L'antirole update est déjà __désactivé__]
    $endif
    $if[$message[2]==max]
    L'antirole update est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antiroleupdate;on]
    $setServerVar[antiroleupdatemax;on]
    $onlyif[$getservervar[antiroleupdatemax]==off;L'antirole update max est déjà __activé__]
    $endif
    $onlyif[$checkContains[$message[2];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    
    $if[$message[1]==delete]
    $if[$message[2]==on]
    L'antirole delete est maintenant __activé__
    $setServerVar[antiroledelete;on]
    $setServerVar[antiroledeletemax;off]
    $onlyif[$getservervar[antiroledeletemax]==on;L'antirole delete est déjà __activé__]
    $endif
    $if[$message[2]==off]
    L'antirole delete est maintenant __désactivé__
    $setServerVar[antiroledelete;off]
    $setServerVar[antiroledeletemax;off]
    $onlyif[$getservervar[antiroledelete]==on;L'antirole delete est déjà __désactivé__]
    $endif
    $if[$message[2]==max]
    L'antirole delete est maintenant __activé__ **même pour les utilisateurs dans la whitelist**
    $setServerVar[antiroledelete;on]
    $setServerVar[antiroledeletemax;on]
    $onlyif[$getservervar[antiroledeletemax]==off;L'antirole delete max est déjà __activé__]
    $endif
    $onlyif[$checkContains[$message[2];on;off;max]==true;L'option est invalide {delete:5s}]
    $endif
    $onlyif[$checkContains[$message[1];create;update;delete]==true;L'option de l'antirolel est invalide {delete:5s}]
    $endif

    
    `},{
    type: "roleCreate",
    $if: "v4",
    code:`
    $if[$getservervar[antirolecreatemax]==off]
    $if[$getservervar[rolecreate]==kick]
    $kick[$get[user];$guildID;Crée un role]
    $endif 
    $if[$getservervar[rolecreate]==ban]
    $ban[$guildID;$get[user];0;Crée un role]
    $endif
    $if[$getservervar[rolecreate]==derank]
    $takeRoles[$guildID;$get[user];$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$get[user];$guildID;id;+;'];+;-];-]
    $endif
    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    $endif

    $if[$getservervar[antirolecreatemax]==on]
    $if[$getservervar[rolecreate]==kick]
    $kick[$get[user];$guildID;Crée un role]
    $endif 
    $if[$getservervar[rolecreate]==ban]
    $ban[$guildID;$get[user];0;Crée un role]
    $endif
    $if[$getservervar[rolecreate]==derank]
    $takeRoles[$guildID;$get[user];$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$get[user];$guildID;id;+;'];+;-];-]
    $endif
    $endif


    $deleteRoles[$guildID;$newRole[id]]
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) a tenté de créer un rôle sur le serveur}{color:$getservervar[color]}}]
    $endif
    
    
    $onlyIf[$authorID!=$ownerID;]
    $onlyif[$checkContains[$getVar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getVar[buyerID];]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;ROLE_CREATE;$guildID;{executor.id}]]]
    $onlyif[$getservervar[antirolecreate]==on;]
    `
    
    },{
    
    type: "roleUpdate",
    $if: "v4",
    code:`
    $if[$getservervar[antiroleupdatemax]==off]
    $if[$getservervar[roleupdate]==kick]
    $kick[$get[user];$guildID;Modifie un rôle]
    $endif 
    $if[$getservervar[roleupdate]==ban]
    $ban[$guildID;$get[user];0;Modifie un rôle]
    $endif
    $if[$getservervar[roleupdate]==derank]
    $takeRoles[$guildID;$get[user];$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$get[user];$guildID;id;+;'];+;-];-]
    $endif
    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    $endif

    $if[$getservervar[antiroleupdatemax]==on]
    $if[$getservervar[roleupdate]==kick]
    $kick[$get[user];$guildID;Modifie un rôle]
    $endif 
    $if[$getservervar[roleupdate]==ban]
    $ban[$guildID;$get[user];0;Modifie un rôle]
    $endif
    $if[$getservervar[roleupdate]==derank]
    $takeRoles[$guildID;$get[user];$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$get[user];$guildID;id;+;'];+;-];-]
    $endif
    $endif

    $modifyRolePerms[$guildID;$oldRole[id];-all]
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) a tenté de modifier un rôle sur le serveur}{color:$getservervar[color]}}]
    $endif
    
    
    $onlyIf[$authorID!=$ownerID;]
    $onlyif[$checkContains[$getVar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getVar[buyerID];]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;ROLE_UPDATE;$guildID;{executor.id}]]]
    $onlyif[$getservervar[antiroleupdate]==on;]
    `
    },{
    type: "roleDelete",
    $if: "v4",
    code:`
    $if[$getservervar[antiroledeletemax]==off]
    $if[$getservervar[roledelete]==kick]
    $kick[$get[user];$guildID;Supprime un rôle]
    $endif 
    $if[$getservervar[roledelete]==ban]
    $ban[$guildID;$get[user];0;Supprime un rôle]
    $endif
    $if[$getservervar[roledelete]==derank]
    $takeRoles[$guildID;$get[user];$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$get[user];$guildID;id;+;'];+;-];-]
    $endif
    $onlyif[$checkContains[$getServerVar[wl];<@$get[user]>]==false;]
    $endif

    $if[$getservervar[antiroledeletemax]==on]
    $if[$getservervar[roledelete]==kick]
    $kick[$get[user];$guildID;Supprime un rôle]
    $endif 
    $if[$getservervar[roledelete]==ban]
    $ban[$guildID;$get[user];0;Supprime un rôle]
    $endif
    $if[$getservervar[roledelete]==derank]
    $takeRoles[$guildID;$get[user];$joinSplitText[;]]
    $textSplit[$replaceText[$userRoles[$get[user];$guildID;id;+;'];+;-];-]
    $endif
    $endif

    $createRole[$guildID;yes;$oldRole[name];$oldRole[color];no;$oldRole[position];no]
    $if[$serverChannelExists[$getservervar[raidlogs]]==true]
    $channelsendmessage[$getservervar[raidlogs];{newEmbed:{description:Le membre <@$get[user]> (\`$get[user]\`) a tenté de supprimer un rôle sur le serveur}{color:$getservervar[color]}}]
    $endif
   
   
    $onlyIf[$authorID!=$ownerID;]
    $onlyif[$checkContains[$getVar[owner];<@$get[user]>]==false;]
    $onlyIf[$get[user]!=$getVar[buyerID];]
    $onlyIf[$get[user]!=$clientid;]
    $let[user;$finduser[$getAuditLogs[1;;ROLE_DELETE;$guildID;{executor.id}]]]
    $onlyif[$getservervar[antiroledelete]==on;]
    `
    }]
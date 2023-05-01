module.exports = [{
    name: "antilink off",
    $if:    "v4",
    code: `
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    L'antilien est maintenant __désactivé__
    $setServerVar[antilink;off]
    $onlyIf[$getServerVar[antilink]==true;L'antilien est déja __désactivé__]
    $endif`
    },{
    name: "$alwaysExecute",
    $if:    "v4",
    code:`
    
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:Le membre <@$authorID> (\`$authorID\`) a envoyé un **lien** dans le salon <#$channelID>}{color:$getservervar[color]}}]
    $endif
    
    $if[$getservervar[modeantilink]==discord]
    $deletecommand
    $onlyIf[$checkContains[$message;discord.gg;.gg/]==true;]
    $endif
    
    $if[$getservervar[modeantilink]==all]
    $deletecommand
    $onlyIf[$checkContains[$message;https://;discord.gg/]==true;]
    $endif

    $if[$getservervar[warnlimit]!=off]

    $if[$getservervar[link]==mute]
    $timeoutMember[$guildID;$authorID;5m;no;Envoie un lien;]
    $endif

    $if[$getservervar[link]==warn]

    $if[$getUserVar[warn]<$getservervar[warnlimit]]
    $channelSendMessage[$channelID;<@$authorID> Tu as $getuservar[warn] avertissements, tu te feras **$getservervar[limitwarn]** à **$getservervar[warnlimit]** avertissements]
    $setUserVar[warn;$sum[$getuservar[warn];1]]
    $endif

    $if[$getuservar[warn]>=$getservervar[warnlimit]]

    $if[$getservervar[limitwarn]==mute]
    $channelSendMessage[$channelID;<@$authorID> à été mute car il a envoyé un lien et a dépassé la limite de warn. {delete:5s}]
    $timeoutMember[$guildID;$authorID;10m;no;Envoie un lien;]
    $endif

    $if[$getservervar[limitwarn]==kick]
    $channelSendMessage[$channelID;<@$authorID> à été kick car il a envoyé un lien et a dépassé la limite de warn. {delete:5s}]
    $kick[$authorID;$guildID;Envoie un lien]
    $endif

    $setUserVar[warn;0]
    $endif

    $endif
    
    $endif
    

    $onlyif[$checkContains[$getServerVar[wl];<@$authorID>]==false;]


    $onlyif[$checkContains[$getvar[owner];<@$authorID>]==false;]
    $onlyIf[$authorID!=$ownerID;]
    $onlyIf[$authorID!=$getvar[buyerID];]
    $onlyIf[$authorID!=$clientid;]
    $onlyif[$getchannelvar[wllink]!=allow;]
    $onlyIf[$getServerVar[antilink]==on;]
    `
      },{
    name: "antilink",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$authotID==$ownerid]
    $if[$message==discord]
    L'antilien bloque maintenant les liens d'invitation de discord
    $setservervar[modeantilink;discord]
    $setServerVar[antilink;on]
    $onlyIf[$getservervar[modeantilink]!=discord;L'antilien bloque déjà uniquement les liens d'invitations discord.]
    $endif
    $if[$message==all]
    L'antilien bloque maintenant tout type de liens
    $setservervar[modeantilink;all]
    $setServerVar[antilink;on]
    $onlyIf[$getservervar[modeantilink]!=all;L'antilien bloque déjà tout type de liens.]
    $endif
    $onlyif[$checkContains[$message[1];all;discord]==true;Argument invalide, \`$getservervar[prefix]antilink discord/all/off\`
    $endif
    `
    
    },{
    name: "link",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$authotID==$ownerid]
     
    
    $if[$message[1]==allow]
    Le salon <#$get[salon]> n'est plus affecté par __l'antilien__
    $setchannelvar[wlspam;allow;$get[salon]]
    $setServerVar[spamlist;$getServerVar[linklist],<#$get[salon]>]
    $onlyif[$getchannelvar[wllink;$get[salon]]!=allow;Salon est déja en __allow__]
    $let[salon;$findChannel[$message[2];no]]
    $onlyif[$channelExists[$findChannel[$message[2];no]]==true;Salon invalide {delete:5s}]
    $onlyif[$message[2]!=;Salon invalide {delete:5s}]
    $endif
    
    $if[$message[1]==deny]
    Le salon <#$get[salon]> est de nouveau affecté par __l'antilien__
    $setchannelvar[wlspam;deny;$get[salon]]
    $setServerVar[linklist;$replaceText[$getServerVar[linklist];,<@$get[salon]>;]]
    $onlyif[$getchannelvar[wllink;$get[salon]]==allow;Salon est déja en __deny__]
    $let[salon;$findChannel[$message[2];no]]
    $onlyif[$channelExists[$findChannel[$message[2];no]]==true;Salon invalide {delete:5s}]
    $onlyif[$message[2]!=;Salon invalide {delete:5s}]
    $endif 
    
    $if[$message[1]==list]
    $color[1;$getservervar[color]]
    $title[1;Liste des salon allow]
    $description[1;$replaceText[$getServerVar[linklist];,;
    ]
    $onlyif[$getservervar[linklist]!=;Aucun salon enregistré\n**\`$getservervar[prefix]link allow <salon>\`**]
    $endif
    
    $if[$message[1]==clear]
    Tout les salon allow ont été __retiré__
    $resetServerVar[linklist]
    $endif
    $onlyif[$checkContains[$message[1];allow;deny;list;clear]==true;L'option est invalide {delete:5s}]
    $endif
    
   
    `
    
    }]
module.exports = [{
name: "piconly",
$if: "v4",
code:`
$if[$getVar[buyerID]==$authorID]
$if[$message[1]==add]
Le salon <#$get[salon]> est désormais __piconly__
$setchannelvar[piconly;true;$get[salon]]
$setServerVar[piconlylist;$getServerVar[piconlylist],<#$get[salon]>]
$onlyif[$getchannelvar[piconly;$get[salon]]!=allow;Salon est déja en __piconly__]
$let[channel;$mentionedChannels[1;yes]]
$onlyif[$message[2]!=;Salon invalide {delete:5s}]
$endif
$if[$message[1]==del]
Le salon <#$get[salon]> n'est plus __piconly__
$setchannelvar[piconly;false;$get[salon]]
$setServerVar[piconlylist;$replaceText[$getServerVar[piconlylist];,<@$get[salon]>;]]
$onlyif[$getchannelvar[piconly;$get[salon]]==allow;Salon n'est pas en __piconly__]
$let[channel;$mentionedChannels[1;yes]]
$onlyif[$message[2]!=;Salon invalide {delete:5s}]
$endif 
$if[$message[1]==list]
$color[1;$getservervar[color]]
$title[1;Liste des salon piconly]
$description[1;$replaceText[$getServerVar[piconlylist];,;
]
$onlyif[$getservervar[piconlylist]!=;{newEmbed:{title:Pour ajouter un salon}{description:Aucun salon enregistré
**\`$getservervar[prefix]piconly add <salon>\`**}{color:$getservervar[color]}}]
$endif
$if[$message[1]==clear]
Tout les salon piconly ont été __retiré__
$resetServerVar[piconlylist]
$endif
$onlyif[$checkContains[$message[1];add;del;list;clear]==true;L'option est invalide {delete:5s}]
$endif
$if[$checkContains[$getVar[owner];<@$authorID>]==true]  
$if[$message[1]==add]
Le salon <#$get[salon]> est désormais __piconly__
$setchannelvar[piconly;true;$get[salon]]
$setServerVar[piconlylist;$getServerVar[piconlylist],<#$get[salon]>]
$onlyif[$getchannelvar[piconly;$get[salon]]!=allow;Salon est déja en __piconly__]
$let[channel;$mentionedChannels[1;yes]]
$onlyif[$message[2]!=;Salon invalide {delete:5s}]
$endif
$if[$message[1]==del]
Le salon <#$get[salon]> n'est plus __piconly__
$setchannelvar[piconly;false;$get[salon]]
$setServerVar[piconlylist;$replaceText[$getServerVar[piconlylist];,<@$get[salon]>;]]
$onlyif[$getchannelvar[piconly;$get[salon]]==allow;Salon n'est pas en __piconly__]
$let[salon;$findChannel[$message[2];no]]
$onlyif[$message[2]!=;Salon invalide {delete:5s}]
$endif 
$if[$message[1]==list]
$color[1;$getservervar[color]]
$title[1;Liste des salon piconly]
$description[1;$replaceText[$getServerVar[piconlylist];,;
]
$onlyif[$getservervar[piconlylist]!=;{newEmbed:{title:Pour ajouter un salon}{description:Aucun salon enregistré
**\`$getservervar[prefix]piconly add <salon>\`**}{color:$getservervar[color]}}]
$endif
$if[$message[1]==clear]
Tout les salon piconly ont été __retiré__
$resetServerVar[piconlylist]
$endif
$onlyif[$checkContains[$message[1];add;del;list;clear]==true;L'option est invalide {delete:5s}]
$endif


$if[$getservervar[public]==true]
$if[$checkContains[$getVar[owner];<@$authorID>]!=true]
$if[$getuservar[buyerID]!=$authorID]
$if[$hasroles[$guildID;$authorID;$getservervar[admin]]==true]
$if[$message[1]==add]
Le salon <#$get[salon]> est désormais __piconly__
$setchannelvar[piconly;true;$get[salon]]
$setServerVar[piconlylist;$getServerVar[piconlylist],<#$get[salon]>]
$onlyif[$getchannelvar[piconly;$get[salon]]!=allow;Salon est déja en __piconly__]
$let[salon;$findChannel[$message[2];no]]

$onlyif[$message[2]!=;Salon invalide {delete:5s}]
$endif
$if[$message[1]==del]
Le salon <#$get[salon]> n'est plus __piconly__
$setchannelvar[piconly;false;$get[salon]]
$setServerVar[piconlylist;$replaceText[$getServerVar[piconlylist];,<@$get[salon]>;]]
$onlyif[$getchannelvar[piconly;$get[salon]]==allow;Salon n'est pas en __piconly__]
$let[salon;$findChannel[$message[2];no]]
$onlyif[$message[2]!=;Salon invalide {delete:5s}]
$endif 
$if[$message[1]==list]
$color[1;$getservervar[color]]
$title[1;Liste des salon piconly]
$description[1;$replaceText[$getServerVar[piconlylist];,;
]
$onlyif[$getservervar[piconlylist]!=;{newEmbed:{title:Pour ajouter un salon}{description:Aucun salon enregistré
**\`$getservervar[prefix]piconly add <salon>\`**}{color:$getservervar[color]}}]
$endif
$if[$message[1]==clear]
Tout les salon piconly ont été __retiré__
$resetServerVar[piconlylist]
$endif
$onlyif[$checkContains[$message[1];add;del;list;clear]==true;L'option est invalide {delete:5s}]
$endif
$endif
$endif
$endif

$if[$getservervar[public]==false]
$if[$checkContains[$getVar[owner];<@$authorID>]!=true]
$if[$getuservar[buyerID]!=$authorID]
$if[$hasroles[$guildID;$authorID;$getservervar[admin]]==false]
$reply 
$getservervar[noperm]
$deleteIn[$getservervar[deleteperm]]
$endif
$endif
$endif
$endif
`
},{
name: "$alwaysExecute",
$if:"v4",
code: `
$if[$message==]
$deletecommand
$endif
$onlyif[$checkContains[$getVar[owner];<@$authorID>]==false;]
$onlyIf[$authorID!=$getVar[buyerID];]
$onlyIf[$authorID!=$clientid;]
$onlyIf[$getChannelVar[piconly;$channelID]!=false;]
`
}]
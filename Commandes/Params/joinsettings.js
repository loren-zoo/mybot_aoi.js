module.exports = [{
    name:"join settings",
    aliases:["joinsettings"],
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
   
    $addField[1;Style;\`$getservervar[welcomemode]\`;yes]
    $addField[1;Message;$replaceText[$getservervar[welcomemsg];none;\`Aucun message configuré\`];yes]
    $addField[1;Salon;$replaceText[<#$getservervar[welcomesalon]>;<#>;\`Aucun\`];yes]
    $addField[1;Êtat :;$replaceText[$replaceText[$getservervar[welcome];true;\`Activé\`];false;\`Désactivé\`];yes]
    $color[1;$getservervar[color]]
   
    $addButton[2;Désactiver;danger;desacwelcome_$authorID;$replaceText[$replaceText[$getServerVar[welcome];true;no];false;yes]]
    $addButton[2;Activer;success;activwelcome_$authorID;$replaceText[$replaceText[$getServerVar[welcome];true;yes];false;no]]
    $addButton[2;Actualiser;2;welcome10_$authorID;no;🔁]
    $addSelectMenu[1;welcome0_$authorID;$username[$clientID];1;1;no;Message:Configure le message d'arrivée:welcome1:no;Salon:Configure le salon d'arrivée:welcome2:no;Style:Configure le style du message d'arrivée:welcome3:no]
   
    $endif

  

    `
},{
    type:"interaction",
    prototype:"selectMenu",
    $if:"v4",
    code:`
    $if[$message==welcome1]
    $channelSendMessage[$channelID;Quel est le message à envoyer quand un nouveau membre arrive ? (\`variables\`)]
    $awaitMessages[$channelID;$authorID;2m;everything;welcomemsg;Non éffectué] 
    $endif
    
    $if[$message==welcome2]
    $channelSendMessage[$channelID;Quel est le salon qui recevera les messages de bienvenue ?]
    $awaitMessages[$channelID;$authorID;2m;everything;welcomesalon;Non éfféctué] 
    $endif

    $if[$message==welcome3]
    $if[$getservervar[welcomemode]==Textuel]
    $setServerVar[welcomemode;Embed]
    $interactionReply[Mode \`Embed\` activé (Clique sur le bouton sur l'embed pour actualiser);;;;everyone;yes]
    $else
    $setServerVar[welcomemode;Textuel]
    $interactionReply[Mode \`Textuel\` activé (Clique sur le bouton sur l'embed pour actualiser);;;;everyone;yes]
    $endif
    $endif

    $onlyif[$interactionData[customId]==welcome0_$interactiondata[author.id];]
    `
},{
    type:"awaited",
    name:"welcomemsg",
    $if:"v4",
    code:`
    
$if[$checkContains[$message;variables;variable;help;$getservervar[prefix]variables]==true]
$addField[1;{member};Mentionne le membre;yes]
$addField[1;{membername};Affiche le nom complet du membre;yes]
$addField[1;{membertag};Affiche le pseudo du membre;yes]
$addField[1;{createdAt};Affiche la date de création du compte;yes]
$addField[1;{server};Affiche le nom du serveur;yes]
$addField[1;{membercount};Affiche le nombre de membre du serveur;yes]
$addField[1;{serverboost};Affiche le nombre de boost du serveur;yes]


$color[1;$getservervar[color]]
$footer[1;$getvar[footerall]]
$addTimestamp[1]
$else
$setServerVar[welcomemsg;$message]
$clear[1;$clientID;no;$channelID]
$deletecommand
$endif
    
    `
},{
type:"awaited",
name:"welcomesalon",
$if:"v4",
code:`
$setServerVar[welcomesalon;$get[channel]]
$deletecommand
$clear[1;$clientID;no;$channelID]
$onlyif[$serverChannelExists[$get[channel]]==true;Le salon est invalide.]
$let[channel;$mentionedChannels[1;yes]]
`
},{
    type: "join",
    channel: "$getservervar[welcomesalon]",
    $if: "v4",
    code:`
    $if[$getservervar[welcomemode]==Textuel]
    $channelsendmessage[$getservervar[welcomesalon];$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{membername};$username];{membertag};$usertag];{member};<@$authorID>];{createdAt};<t:$truncate[$math[$creationDate[$authorID;ms]/1000]]:R>];{server};$servername];{membercount};$membersCount];{serverboost};$serverBoostCount]]
    $endif
    
    $if[$getservervar[welcomemode]==Embed]
    $thumbnail[1;$authoravatar]
    $title[1;$usertag vient de rejoindre.]
    $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{membername};$username];{membertag};$usertag];{member};<@$authorID>];{createdAt};<t:$truncate[$math[$creationDate[$authorID;ms]/1000]]:R>];{server};$servername];{membercount};$membersCount];{serverboost};$serverBoostCount]]]
    $endif
    $onlyif[$serverChannelExists[$getservervar[welcomesalon]]==true;]
    $onlyif[$getservervar[welcomemsg]!=none;]
    $onlyif[$getservervar[welcome]==true;]
    
    
    `
    
},{
    type:"interaction",
    prototype:"button",
    $if:"v4",
    code:`
    
    $interactionReply[Système arrêté;;;;everyone;yes]
    $setservervar[welcome;false]
    $onlyif[$interactionData[customId]==desacwelcome_$interactiondata[author.id];]
    `
},{
    type:"interaction",
    prototype:"button",
    $if:"v4",
    code:`
    
    $interactionReply[Système fonctionnel;;;;everyone;yes]
    $setservervar[welcome;true]
    $onlyif[$interactionData[customId]==activwelcome_$interactiondata[author.id];]
    `
},{
    type: "interaction",
    prototype: "button",
    code:`
    $interactionUpdate[;{newEmbed:
    {color:$getservervar[color]}{footer:$getvar[footerall]}}{field:Êtat :$replaceText[$replaceText[$getservervar[welcome];true;\`Activé\`];false;\`Désactivé\`]:yes}
    {field:Salon:$replaceText[<#$getservervar[welcomesalon]>;<#>;\`Aucun\`]:yes}
    {field:Message:$replaceText[$getservervar[welcomemsg];none;\`Aucun message configuré\`]:yes}
    {field:Style:\`$getservervar[welcomemode]\`:yes}
    };
    {actionRow:{selectMenu:welcome0_$authorID:$username[$clientID]:1:1:no:
    {selectMenuOptions:Message:welcome1:Configure le message d'arrivée:no}
    {selectMenuOptions:Salon:welcome2:Configure le salon d'arrivée:no:}
    {selectMenuOptions:Style:welcome3:Configure le style du message d'arrivée:no:}
    {actionRow:{button:Actualiser:2:welcome10:no:🔁}{button:Desactiver:danger:desacwelcome_$authorID:$replaceText[$replaceText[$getServerVar[welcome];true;no];false;yes]}{button:Activer:success:actiwelcome_$authorID:$replaceText[$replaceText[$getServerVar[welcome];true;yes];false;no]}}]
    
    $onlyif[$interactionData[customId]==welcome10_$interactiondata[author.id];]
    `
    
    }]
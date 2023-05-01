module.exports = [{
    name:"dm settings",
    aliases:"dmsettings",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $addField[1;Style;\`$getservervar[welcomemodedm]\`;yes]
    $addField[1;Message;$replaceText[$getservervar[welcomemsgdm];none;\`Aucun message configuré\`];yes]
    $addField[1;Êtat :;$replaceText[$replaceText[$getservervar[welcomedm];true;\`Activé\`];false;\`Désactivé\`];yes]
    $color[1;$getservervar[color]]
    $addButton[2;Actualiser;2;welcomedm10_$authorID;no;🔁]
    $addButton[1;Désactiverdanger;desacwelcomedm_$authorID;$replaceText[$replaceText[$getServerVar[welcome];true;no];false;yes]]
    $addButton[1;Activer;success;activwelcomedm_$authorID;$replaceText[$replaceText[$getServerVar[welcome];true;yes];false;no]]
    $addSelectMenu[1;welcomedm0_$authorID;$username[$clientID];1;1;no;Message MP:Configure le message d'arrivée mp:welcomedm1:no;Style:Configure le style du message d'arrivée:welcomedm2:no]
    $endif

    
    `
},{
    type:"interaction",
    prototype:"selectMenu",
    $if:"v4",
    code:`
    $if[$message==welcomedm1]
    $channelSendMessage[$channelID;Quel est le message à envoyer en message privé quand un nouveau membre arrive ? (\`variables\`)]
    $awaitMessages[$channelID;$authorID;2m;everything;welcomemsgdm;Non éffectué] 
    $endif
    
    $if[$message==welcomedm2]
    $if[$getservervar[welcomedmmode]==Textuel]
    $setServerVar[welcomedmmode;Embed]
    $interactionReply[Mode \`Embed\` activé (Clique sur le bouton sur l'embed pour actualiser);;;;everyone;yes]
    $else
    $setServerVar[welcomedmmode;Textuel]
    $interactionReply[Mode \`Textuel\` activé (Clique sur le bouton sur l'embed pour actualiser);;;;everyone;yes]
    $endif
    $endif
    
    $onlyif[$interactionData[customId]==welcomedm0_$interactiondata[author.id];]
    `
},{
    type:"awaited",
    name:"welcomemsgdm",
    $if:"v4",
    code:`
    
$if[$checkContains[$message;variables;variable;help;;$getservervar[prefix]variables]==true]
$addField[1;{member};Mentionne le membre;yes]
$addField[1;{membername};Affiche le nom complet du membre;yes]
$addField[1;{membertag};Affiche le pseudo du membre;yes]
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
    type: "join",
    $if: "v4",
    code:`
    $if[$getservervar[welcomedmmode]==Textuel]
    $senddm[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{membername};$username];{membertag};$usertag];{member};<@$authorID>];{server};$servername];{membercount};$membersCount];{serverboost};$serverBoostCount]
    ;{actionRow:{button:Envoyé depuis $servername:2:btntkt;yes}};$authorID;no]
    $endif
    
    $if[$getservervar[welcomedmmode]==Embed]
    $senddm[{newEmbed:{title:$usertag}{description:$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemsg];{membername};$username];{membertag};$usertag];{member};<@$authorID>];{server};$servername];{membercount};$membersCount];{serverboost};$serverBoostCount]}{color:$getservervar[color]}}]
    $endif
    $onlyif[$getservervar[welcomedmmsg]!=none;]
    $onlyif[$getservervar[welcomedm]==true;]
    
    
    `
    
},,{
    type: "interaction",
    prototype: "button",
    code:`
    $interactionUpdate[;{newEmbed:
    {color:$getservervar[color]}{footer:$getvar[footerall]}}{field:Êtat :$replaceText[$replaceText[$getservervar[welcomedm];true;\`Activé\`];false;\`Désactivé\`]:yes}
    {field:Message:$replaceText[$getservervar[welcomemsgdm];none;\`Aucun message configuré\`]:yes}
    {field:Style:\`$getservervar[welcomedmmode]\`:yes}};
    {actionRow:{selectMenu:welcome0_$authorID:$username[$clientID]:1:1:no:
    {selectMenuOptions:Message:welcome1:Configure le message d'arrivée:no}
    {selectMenuOptions:Salon:welcome2:Configure le salon d'arrivée:no:}
    {selectMenuOptions:Style:welcome3:Configure le style du message d'arrivée:no:}
    {actionRow:{button:Actualiser:2:welcomedm10:no:🔁}{button:Desactiver:danger:desacwelcomedm_$authorID:$replaceText[$replaceText[$getServerVar[welcomedm];true;no];false;yes]}{button:Activer:success:actiwelcomedm_$authorID:$replaceText[$replaceText[$getServerVar[welcomedm];true;yes];false;no]}}]
    
    $onlyif[$interactionData[customId]==welcomedm10_$interactiondata[author.id];]
    `
    
    }]
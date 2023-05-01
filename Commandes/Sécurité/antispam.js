module.exports = [{
    name: "antispam",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    L'**antispam** est __activé__ pour **$message[1]** messages en 5s
    $setservervar[antispam;$message[1]]
    $onlyIf[$message[1]>2;Le nombre doit être supérieur à **2**]
    $onlyIf[$isNumber[$message[1]]!=false;Nombre invalide.]
  
    $onlyif[$message[1]!=;Argumant invalide]
    $endif
    `
    },{
    name:"antispam off",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$authorID==$ownerid]
    L'antilien est maintenant __désactivé__
    $setservervar[antispam;false]
    $endif
    `
    },{
    name: "$alwaysExecute",
    $if: "v4",
    code:`
    $if[$getuservar[msg]>=$getservervar[antispam]]
    $if[$getuservar[spamwarn]>=$getservervar[warnlimit]]
    
    $if[$getservervar[spam]==mute]
    $resetUserVar[spamwarn]
    $wait[1ms]
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelSendMessage[$getServerVar[raidlog];{newEmbed:{description:{Le membre **$usertag** a été \`mute\` après avoir __spam__ dans le salon <#$channelID>.}{color:$getservervar[color]}{footer:Raid Logs}}]
    $endif
    $timeoutMember[$guildID;$authorID;24h;no;Automod spam;]
    $endif
    
    $if[$getservervar[spam]==ban]
    $resetUserVar[spamwarn]
    $wait[1ms]
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelSendMessage[$getServerVar[raidlog];{newEmbed:{description:{Le membre **$usertag** a été \`ban\` après avoir __spam__ dans le salon <#$channelID>.}{color:$getservervar[color]}{footer:Raid Logs}}]
    $endif
    $ban[$guildID;$authorID;0;Automod spam]
    $endif
    
    $if[$getservervar[spam]==kick]
    $resetUserVar[spamwarn]
    $wait[1ms]
    
    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelSendMessage[$getServerVar[raidlog];{newEmbed:{description:{Le membre **$usertag** a été \`expulsé\` après avoir __spam__ dans le salon <#$channelID>.}{color:$getservervar[color]}{footer:Raid Logs}}]
    $endif
    $kick[$authorID;$guildID;Automod spam]
    $endif
   $setUserVar[msg;0]

    $endif


    $if[$serverChannelExists[$getservervar[raidlog]]==true]
    $channelsendmessage[$getservervar[raidlog];{newEmbed:{description:$usertag (\`$authorID\`), a été **avertis** pour avoir __spam__ dans le salon <#$channelID>}{color:$getservervar[color]}{timestamp}{footer:$usertag[$clientID]:$useravatar[$clientID]}}]
    $endif


    $timeoutMember[$guildID;$authorID;10s;no;Avertissement de spam;]
    $setUserVar[spamwarn;$sum[$getuservar[spamwarn;$authorID];1];$authorID]
    $channelsendmessage[$channelID;<@$authorID>, vous envoyez des messages trop rapidement {delete:2s}]
    $clear[5;$authorID;no;$channelID]
    $endif
    
    $if[$getuservar[msg]<$getservervar[antispam]]
    $setUserVar[msg;0]
    $wait[5s]
    $setUserVar[msg;$sum[$getUserVar[msg;$authorID];1];$authorID]
    $endif
    
    
    $onlyIf[$checkContains[$getservervar[wl];<@$authorID>]==false;]
    $onlyif[$checkContains[$getvar[owner];<@$authorID>]==false;]
    $onlyIf[$authorID!=$ownerid;]
    $onlyIf[$authorID!=$clientid;]
    $onlyif[$getchannelvar[wlspam]!=allow;]
    $onlyif[$getservervar[antispam]!=false;]`
    },{
        name: "spam",
        $if: "v4",
        code:`
        $if[$checkContains[$getvar[owner];<@$authorID>]==true||$authotID==$ownerid]
         
        
        $if[$message[1]==allow]
        Le salon <#$get[salon]> n'est plus affecté par __l'antispam__
        $setchannelvar[wlspam;allow;$get[salon]]
        $setServerVar[spamlist;$getServerVar[spamlist],<#$get[salon]>]
        $onlyif[$getchannelvar[wlspam;$get[salon]]!=allow;Salon est déja en __allow__]
        $let[salon;$findChannel[$message[2];no]]
        $onlyif[$channelExists[$findChannel[$message[2];no]]==true;Salon invalide {delete:5s}]
        $onlyif[$message[2]!=;Salon invalide {delete:5s}]
        $endif
        
        $if[$message[1]==deny]
        Le salon <#$get[salon]> est de nouveau affecté par __l'antispam__
        $setchannelvar[wlspam;deny;$get[salon]]
        $setServerVar[spamlist;$replaceText[$getServerVar[spamlist];,<@$get[salon]>;]]
        $onlyif[$getchannelvar[wlspam;$get[salon]]==allow;Salon est déja en __deny__]
        $let[salon;$findChannel[$message[2];no]]
        $onlyif[$channelExists[$findChannel[$message[2];no]]==true;Salon invalide {delete:5s}]
        $onlyif[$message[2]!=;Salon invalide {delete:5s}]
        $endif 
        
        $if[$message[1]==list]
        $color[1;$getservervar[color]]
        $title[1;Liste des salon allow]
        $description[1;$replaceText[$getServerVar[spamlist];,;
        ]
        $onlyif[$getservervar[spamlist]!=;:Aucun salon enregistré\n**\`$getservervar[prefix]spam allow <salon>\`**]
        $endif
        
        $if[$message[1]==clear]
        Tout les salon allow ont été __retiré__
        $resetServerVar[spamlist]
        $endif
        $onlyif[$checkContains[$message[1];allow;deny;list;clear]==true;L'option est invalide {delete:5s}]
        $endif
        
       
        `
            
    }]
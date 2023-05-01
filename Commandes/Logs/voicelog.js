module.exports = [{
    name:   "voicelog",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]  
    Le salon <#$get[channel]> sera maintenant utilisé pour envoyer les logs de __boosts__
    $setServerVar[voicelog;$get[channel]]
    $onlyIf[$serverChannelExists[$get[channel]]==true;Salon invalide {delete:5s}]
    $let[channel;$findchannel[$message[1];yes]]
    $onlyIf[$message[1]!=;Argumant manquant : \`$getserverVar[prefix]$commandName <#salon>\`]
    $endif

    
            `
    },{
    name:"voicelog off",
    $if: "v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs des boosts est désormais __désactivé__
    $setServerVar[voicelog;]
    $endif

    `
    },{
    name:"voicelog statut",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    Le salon des logs est <#$getServerVar[voicelog]>.
    $onlyIf[$serverChannelExists[$getServerVar[voicelog]]==true;Le salon n'est pas configuré]
    $endif

    `
    },{
        type: "voiceStateUpdate",
        $if: "v4",
        channel: "$getservervar[voicelog]",
        code:`
        **$usertag[$authorID]** \`\`quitte\`\` le salon <#$oldState[channelId]>
        $onlyIf[$voiceID==;]
        $onlyIf[$serverChannelExists[$getservervar[voicelog]]==true;]`
        },{
        type: "voiceStateUpdate",
        $if: "v4",
        channel: "$getservervar[voicelog]",
        code:`
        **$usertag[$authorID]** se connecte au salon <#$voiceID>.
        $onlyIf[$newState[channelId]!=;]
        $onlyIf[$oldState[channelId]==;]
        $onlyIf[$serverChannelExists[$getservervar[voicelog]]==true;]`
        },{
        type: "voiceStateUpdate",
        $if: "v4",
        channel: "$getservervar[voicelog]",
        code:`
        **$usertag[$authorID]** s'est \`\`déplacé\`\` de <#$oldState[channelId]> à <#$newState[channelId]>
        $onlyIf[$oldState[channelId]!=$newState[channelId];]
        $onlyIf[$oldState[channelId]!=;]
        $onlyIf[$newState[channelId]!=;]
        $onlyIf[$serverChannelExists[$getservervar[voicelog]]==true;]`
        },{
        type: "voiceStateUpdate",
        $if: "v4",
        channel: "$getservervar[voicelog]",
        code:`
        $if[$isStreaming[$authorID]==true]
        **$usertag[$authorID]** a lancé un \`\`stream\`\` dans la vocal <#$voiceID>
        $endif
        $if[$isStreaming[$authorID]==false]
        **$usertag[$authorID]** a arrété son stream dans le salon <#$voiceID>
        $endif
        $onlyIf[$voiceID!=;]
        $onlyIf[$oldState[streaming]!=$newState[streaming];]
        $onlyIf[$serverChannelExists[$getservervar[voicelog]]==true;]`
        },{
        type: "voiceStateUpdate",
        $if: "v4",
        channel: "$getservervar[voicelog]",
        code:`
        $if[$isMuted[$authorID]==true]
        **$usertag[$authorID]** a \`\`désactiver son microphone\`\` <#$voiceID>
        $endif
        $if[$isMuted[$authorID]==false]
        **$usertag[$authorID]** a \`\`réactivé son microphone\`\` dans le salon <#$voiceID>
        $endif
        $onlyIf[$voiceID!=;]
        $onlyIf[$oldState[mute]!=$newState[mute];]
        $onlyIf[$serverChannelExists[$getservervar[voicelog]]==true;]`
    }]
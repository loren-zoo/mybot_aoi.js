module.exports = [{
    name:"help",
    aliases:["aide", "h"],
    $if:"v4",
    code:`


    $title[1;Utilitaire;https://github.com/axe-fr/]
    $footer[1;By $usertag[1025100674964393986]]
    $description[1;Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]banlist\`**
    Affiche les utilisateurs bannis du serveur.

    **\`$getservervar[prefix]snipe [#channel]\`**
    Affiche le dernier message supprimé dans un salon.

    **\`$getservervar[prefix]top <warn/rep/bank/money>\`**
    Affiche le classement du serveur parmis les options

    ]
    $addSelectMenu[1;help0_$authorID;Catégories de commandes;1;1;no;Utilitaire:Catégorie Utilitaire:help1:no;Informations:Catégorie Informations:help2:no;Sécurité:Catégorie Sécurité:help3:no;Paramètres:Catégorie Paramètres:help4:no;Modération:Catégorie Modération:help5:no;Logs:Catégorie Logs:help6:no;Musique:Catégorie Musique:help7:no;Coins:Catégorie Coins:help8:no;Owers:Catégorie Owners:help11:no]


    `
},{
    type:"interaction",
    prototype:"selectMenu",
    $if:"v4",
    code:`
    


    $if[$message==help1]
    $interactionUpdate[;{newEmbed:{title:Utilitaire}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]banlist\`**
    Affiche les utilisateurs bannis du serveur.

    **\`$getservervar[prefix]snipe [#channel]\`**
    Affiche le dernier message supprimé dans un salon.

    **\`$getservervar[prefix]top <warn/rep/bank/money>\`**
    Affiche le classement du serveur parmis les options





    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètre:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $if[$message==help2]
    $interactionUpdate[;{newEmbed:{title:Information}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    

    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètre:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $if[$message==help3]
    $interactionUpdate[;{newEmbed:{title:Sécurtité}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    

    **\`$getservervar[prefix]automod warnlimit <nombre> <kick/mute>\`**
    Permet de configurer la limite des warns atteignables sur le serveur.

    **\`$getservervar[prefix]automod antilink <mute/warn>\`**
    Permet de configurer les sanctions de l'antilink.

    **\`$getservervar[prefix]automod del <antilink/warnlimit>\`**
    Permet de supprimer les configurations faites sur l'automod.

    **\`$getservervar[prefix]antiweb <on/off/max>\`**
    Permet de configurer le module d'antiraid : antiweb

    **\`$getservervar[prefix]antibot <on/off/max>\`**
    Permet de configurer le module d'antiraid : antibot

    **\`$getservervar[prefix]antirank <on/off/max>\`**
    Permet de configurer le module d'antiraid : antirank

    **\`$getservervar[prefix]antiban <on/off/max>\`**
    Permet de configurer le module d'antiraid : antiban

    **\`$getservervar[prefix]antiunban <on/off/max>\`**
    Permet de configurer le module d'antiraid : antiunban

    **\`$getservervar[prefix]antiupdate <on/off/max>\`**
    Permet de configurer le module d'antiraid : antiguild


    **\`$getservervar[prefix]antichannel <create/update/delete> <on/off/max>\`**
    Permet de configurer le module d'antiraid : antichannel

    **\`$getservervar[prefix]antirole <create/update/delete> <on/off/max>\`**
    Permet de configurer le module d'antiraid : antirole


    **\`$getservervar[prefix]antilink <discord/all/off>\`**
    Permet de configurer le module d'antiraid : antilink

    **\`$getservervar[prefix]punish <module d'antiraid> <kick/ban/derank>\`**
    Permet de configurer les punitions lié aux modules.

    **\`$getservervar[prefix]del punish <module d'antiraid>\`**
    Permet de supprimer une punition fixé à un module.

    **\`$getservervar[prefix]whitelist <add/del(/list/clear)> <@user>\`**
    Permet de configurer la liste blanche du serveur.

    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètre:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $if[$message==help4]
    $interactionUpdate[;{newEmbed:{title:Paramètres}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]pfp <#channel/off/statut>\`**
    Configure le système de pfps/banners aléatoires 

    **\`$getservervar[prefix]autorename <"message"/var/off>\`**
    Configure l'autorename

    **\`$getservervar[prefix]defaultroles <add/del/list/clear> (add/del <role>)\`**
    Configure l'autorôle

    **\`$getservervar[prefix]clearlimit <nombre/off>\`**
    Configure la limite de clear

    **\`$getservervar[prefix]dmsettings\`**
    Configure le système de bienvenue en message privé

    **\`$getservervar[prefix]joinsettings\`**
    Configure le système de bienvenue

    **\`$getservervar[prefix]prefix <nouveau prefix>\`**
    Configure un nouveau prefix pour le bot

    **\`$getservervar[prefix]setcount <#channel/statut/off>\`**
    Configure le système de count

    **\`$getservervar[prefix]antijoin <on/off>\`**
    Permet de configurer l'antijoin en cas de raid. (ce n'est pas un module d'antiraid)

    **\`$getservervar[prefix]antinewacount <on/off>\`**
    Permet d'activer ou de désactiver l'antinewaccount, ce qui empêchera les comptes trop récents de rejoindre le serveur. (ce n'est pas un module d'antiraid)


    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètres:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif
    
    $if[$message==help5]
    $interactionUpdate[;{newEmbed:{title:Modération}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]addrole <membre> <role/id>\`**
    Permet de donner un rôle à un utilisateur

    **\`$getservervar[prefix]ban <membre/id> [raison]\`**
    Permet de bannir un membre 

    **\`$getservervar[prefix]clear <amount>\`**
    Permet de suprimmer plusieurs messages dans un salon
    
    **\`$getservervar[prefix]purge <membre/id>\`**
    Permet de supprimer les 100 derniers messages d'un utilisateur dans un salon

    **\`$getservervar[prefix]delrole <membre> <role/id>\`**
    Permet de retirer un rôle à un membre

    **\`$getservervar[prefix]derank <membre/id>\`**
    Permet de retirer tous les rôles d'un utilisateur

    **\`$getservervar[prefix]kick <membre/id>\`**
    Permet d'expulser un utilisateur du serveur

    **\`$getservervar[prefix]lock [role/user/salon] [salon]\`***
    Permet de vérouiller un salon

    **\`$getservervar[prefix]unlock [role/user/salon] [salon]\`**
    Permet de dévérouiller un salon

    **\`$getservervar[prefix]renew [salon]\`**
    Permet de récréer un salon 

    **\`$getservervar[prefix]tempmute <membre/id> <temps> [raison]\`**
    Permet de mute un utilisateur pendant un temps définie

    **\`$getservervar[prefix]unban <id>\`**
    Permet de débannir un membre

    **\`$getservervar[prefix]vkick <membre/id>\`**
    Permet de kick un utilisateur d'un salon vocal

    **\`$getservervar[prefix]warn <membre/id>\`**
    Permet d'ajouter un warn à un utilisateur

    **\`$getservervar[prefix]warn del <membre/id> <nombre/all>\`**
    Permet de supprimer des warns à un utilisateur

    **\`$getservervar[prefix]warn list <membre/id> \`**
    Permet de voir la list des warns d'un utilisateur

    **\`$getservervar[prefix]warn clear\`**
    Permet d'éffacer tous les warns dans un serveur
    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètres:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $if[$message==help6]
    $interactionUpdate[;{newEmbed:{title:Gestion & Administration}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]soutien <add/del/list/vanity/clear> (add/del <mot>) \`**
    Permet de configurer le soutien

    **\`$getservervar[prefix]soutien mode <on/off>\`**
    Permet d'activer ou de désactiver le mode soutien

    **\`$getservervar[prefix]soutien role <add/del> <@role/id>\`**
    Permet de configurer le rôle de soutien

    **\`$getservervar[prefix]autoreact <add/del/list/clear> (add/del <emoji>) \`**
    Permet d'ajouter de supprimer une réaction auto

    **\`$getservervar[prefix]antibadword <on/off>\`**
    Permet d'activer et de désactiver l'antibadword.

    **\`$getservervar[prefix]badword <add/del/list/clear> (add/del <mot>)\`**
    Permet de configurer la liste des mots interdits.

    **\`$getservervar[prefix]blrank <add/del/list> (add/del <@user>)\`**
    Permet de configurer la liste des blranks.

    **\`$getservervar[prefix]clean <#channel>\`**
    Permet de supprimer plusieurs salons en cas de raids

    **\`$getservervar[prefix]embed\`**
    Permet de génerer des embeds

    **\`$getservervar[prefix]hideall\`**
    Permet de cacher plusieurs salons

    **\`$getservervar[prefix]unhideall\`**
    Permet de montrer les salons cachés

    **\`$getservervar[prefix]lockall\`**
    Permet de lock tous les salons du serveurs

    **\`$getservervar[prefix]unlockall\`**
    Permet d'unlock tous les salons du serveurs lock
    
    **\`$getservervar[prefix]massrole add <role/id>\`**
    Permet de donner un rôle à plusieurs utilisateurs

    **\`$getservervar[prefix]massrole remove <role/id>\`**
    Permet de retirer un rôle à plusieurs utilisateurs

    **\`$getservervar[prefix]piconly <add/del/list/clear< (add/del: #salon)\`**
    Permet de gèrer les salons piconly
    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètres:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $if[$message==help7]
    $interactionUpdate[;{newEmbed:{title:Logs}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]presetlogs \`**
    Configure toutes les logs

    **\`$getservervar[prefix]boostlog <#channel/off/statut>\`**
    Configure les logs: logs boosts 

    **\`$getservervar[prefix]raidlog <#channel/off/statut>\`**
    Configure les logs: logs raids

    **\`$getservervar[prefix]joinleavelog <#channel/off/statut>\`**
    Configure les logs: logs join/leave

    **\`$getservervar[prefix]channellog <#channel/off/statut>\`**
    Configure les logs: logs channels

    **\`$getservervar[prefix]boostlog <#channel/off/statut>\`**
    Configure les logs: logs rôles

    **\`$getservervar[prefix]messagelog <#channel/off/statut>\`**
    Configure les logs: logs messages

    **\`$getservervar[prefix]voicelog <#channel/off/statut>\`**
    Configure les logs: logs vocaux

    **\`$getservervar[prefix]logall <#channel>\`**
    Configure toutes les logs sur un seul salon

    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètres:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $if[$message==help8]
    $interactionUpdate[;{newEmbed:{title:Musique}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]play <musique>\`**
    Permet de jouer de la musique depuis un salon vocal

    **\`$getservervar[prefix]nowplaying\`**
    Permet d'optenir des informations sur la musique qui est en cours
    
    **\`$getservervar[prefix]queue\`**
    Permet d'optenir la queue (liste des musiques) du serveur

    **\`$getservervar[prefix]volume <volume>\`**
    Permet de modifier le volume de la musique

    **\`$getservervar[prefix]dc\`**
    Permet de déconneté le bot d'un salon vocal

    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètres:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $if[$message==help9]
    $interactionUpdate[;{newEmbed:{title:Coins}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    
    **\`$getservervar[prefix]daily\`**
    Permet de gagner de l'argent rapidement

    **\`$getservervar[prefix]dep <nombre/all>\`**
    Permet de mettre en lieu sûr votre argent

    **\`$getservervar[prefix]tinfo <taff>\`**
    Permet d'optenir des informations sur un mètier

    **\`$getservervar[prefix]bal [membre]\`**
    Permet d'optenir des informations sur l'argent d'un utilisateur

    **\`$getservervar[prefix]rep <membre>\`**
    Permet de donner un point de réputation à un utilisateur

    **\`$getservervar[prefix]rob <membre\`**
    Permet d'essayer de voler un utilisateur

    **\`$getservervar[prefix]taff <list/buy/dem>\`**
    Permet de travaiiller/démissioner

    **\`$getservervar[prefix]with\`**
    Permet de retirer de l'argent à la banque

    **\`$getservervar[prefix]work\`**
    Permet de gagner un argent grâce à votre travail

    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètres:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    

    $if[$message==help11]
    $interactionUpdate[;{newEmbed:{title:Owners}{url:https://github.com/axe-fr/}
    {description:
    Les options entre \`<...>\` sont obligatoire, alors que les options entre [\`...\`] eux sont facultatifs, Les options séparé par \`/\` sont des actions possible.
    

    }
    {color:$getservervar[color]}{footer:By $usertag[1025100674964393986]}};{actionRow:{selectMenu:help0_$authorID:$username[$clientid]:1:1:no:
        {selectMenuOptions:Utilitaire:help1:Catégorie Utilitaire:no}
        {selectMenuOptions:Information:help2:Catégorie Information:no}
        {selectMenuOptions:Sécurité:help3:Catégorie Sécurité:no}
        {selectMenuOptions:Paramètres:help4:Catégorie Paramètres:no}
        {selectMenuOptions:Modération:help5:Catégorie Modération:no}
        {selectMenuOptions:Gestion:help6:Catégorie Gestion & Administration:no}
        {selectMenuOptions:Logs:help7:Catégorie Logs:no}
        {selectMenuOptions:Musique:help8:Catégorie Musique:no}
        {selectMenuOptions:Coins:help9:Catégorie Coins:no}
        {selectMenuOptions:Tickets:help10:Catégorie Tickets:no}
        {selectMenuOptions:Jeux:help11:Catégorie Jeux:no}
        {selectMenuOptions:Owners:help12:Catégorie Owners:no}]
    $endif

    $onlyIf[$interactionData[customId]==help0_$interactiondata[author.id];]


    `
}]
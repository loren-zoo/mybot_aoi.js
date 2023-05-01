module.exports = [{
    name:"taff",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]


    $if[$message[1]==buy]
    $if[$message[2]==plombier]
    Tu viens de devenir plombier, bien joué ! Effectue \`$getServerVar[prefix]tinfo plombier\` pour avoir des informations sur ton nouveau taff.
    $setUserVar[travail;plombier]
    $onlyIf[$getUserVar[money]>135;Tu n'as pas assez d'argent actuellement pour devenir plombier.]
    $endif

    $if[$message[2]==mangaka]
    Tu viens de devenir mangaka, bien joué ! Effectue \`$getServerVar[prefix]tinfo mangaka\` pour avoir des informations sur ton nouveau taff.
    $setUserVar[travail;mangaka]
    $onlyIf[$getUserVar[money]>110;Tu n'as pas assez d'argent actuellement pour devenir mangaka.]
    $endif

    $if[$message[2]==pompier]
    Tu viens de devenir pompier, bien joué ! Effectue \`$getServerVar[prefix]tinfo pompier\` pour avoir des informations sur ton nouveau taff.
    $setUserVar[travail;pomier]
    $onlyIf[$getUserVar[money]>125;Tu n'as pas assez d'argent actuellement pour devenir pompier.]
    $endiff

    $if[$message[2]==policier]
    Tu viens de devenir policier, bien joué ! Effectue \`$getServerVar[prefix]tinfo policier\` pour avoir des informations sur ton nouveau taff.
    $setUserVar[travail;policier]
    $onlyIf[$getUserVar[money]>130;Tu n'as pas assez d'argent actuellement pour devenir policier.]
    $endif

    $if[$message[2]==manager]
    Tu viens de devenir manager, bien joué ! Effectue \`$getServerVar[prefix]tinfo manager\` pour avoir des informations sur ton nouveau taff.
    $setUserVar[travail;manager]
    $onlyIf[$getUserVar[money]>150;Tu n'as pas assez d'argent actuellement pour devenir manager.]
    $endif
    
    $if[$message[2]==éléctricien||$message[2]==electricien]
    Tu viens de devenir éléctricien, bien joué ! Effectue \`$getServerVar[prefix]tinfo éléctricien\` pour avoir des informations sur ton nouveau taff.
    $setUserVar[travail;éléctricien]
    $onlyIf[$getUserVar[money]>125;Tu n'as pas assez d'argent actuellement pour devenir éléctricien.]
    $endif
    
    $if[$message[2]==patron]
    Tu viens de devenir patron, bien joué ! Effectue \`$getServerVar[prefix]tinfo patron\` pour avoir des informations sur ton nouveau taff.
    $setUserVar[travail;patron]
    $onlyIf[$getUserVar[money]>205;Tu n'as pas assez d'argent actuellement pour devenir patron d'une entreprise.]
    $endif


    $onlyIf[$getUserVar[travail]==;Tu as déja un travail, éffectue \`$getservervar[prefix]work\` pour gagner de l'argent ou \`$getservervar[prefix]taff dem $getuservar[travaill]\` pour démissioner ]
    $onlyIf[$checkContains[$tolowercase[$message[2]];plombier;mangaka;pompier;policier;manager;éléctricien;electricien;patron]==true;Métier invalide, \`$getServervar[prefix]taff list\` pour voir les métiers disponibles.]
    $endif
    $if[$message[1]==dem]

    $if[$message[2]==plombier]
    $setUserVar[travail;]
    $setUservar[money;$sum[$getUservar[money];50]]
    Tu viens de démissioner, tu es maintenant au chômage. La banque te verse 50$, tu gagnes maintenant le smic (\`$getServerVar[prefix]work\`)
    $endif

    $if[$message[2]==mangaka]
    $setUserVar[travail;]
    $setUservar[money;$sum[$getUservar[money];30]]
    Tu viens de démissioner, tu es maintenant au chômage. La banque te verse 30$, tu gagnes maintenant le smic (\`$getServerVar[prefix]work\`)
    $endif

    $if[$message[2]==pompier]
    $setUserVar[travail;]
    $setUservar[money;$sum[$getUservar[money];45]]
    Tu viens de démissioner, tu es maintenant au chômage. La banque te verse 45$, tu gagnes maintenant le smic (\`$getServerVar[prefix]work\`)
    $endif

    $if[$message[2]==policer]
    $setUserVar[travail;]
    $setUservar[money;$sum[$getUservar[money];50]]
    Tu viens de démissioner, tu es maintenant au chômage. La banque te verse 50$, tu gagnes maintenant le smic (\`$getServerVar[prefix]work\`)
    $endif

    $if[$message[2]==manager]
    $setUserVar[travail;]
    $setUservar[money;$sum[$getUservar[money];85]]
    Tu viens de démissioner, tu es maintenant au chômage. La banque te verse 85$, tu gagnes maintenant le smic (\`$getServerVar[prefix]work\`)
    $endif

    $if[$message[2]==patron]
    $setUserVar[travail;]
    $setUservar[money;$sum[$getUservar[money];150]]
    Tu viens de démissioner, tu es maintenant au chômage. La banque te verse 150$, tu gagnes maintenant le smic (\`$getServerVar[prefix]work\`)
    $endif

    $onlyIf[$checkContains[$tolowercase[$message[2]];plombier;mangaka;pompier;policier;manager;éléctricien;electricien;patron]==true;Métier invalide, \`$getServervar[prefix]taff list\` pour voir les métiers disponibles.]
    $endif
    $if[$message[1]==list]
    $description[Liste des taffs disponible,
    > \`$getserverVar[prefix]tinfo <taff>\` pour plus d'informations
    > Tu as actuellement **$getuservar[money]$**.
    ]
    $addField[1;Mangaka;110$;yes]
    $addField[1;Pompier;125$;yes]
    $addField[1;Patron;300$;yes]
    $addField[1;Manager;210$;yes]
    $addField[1;Eléctricien;170$;yes]
    $addField[1;Policier;130$;yes]
    $addField[1;Plombier;175$;yes]
    $color[1;$getServervar[color]]


    $endif
    $onlyIf[$checkContains[$tolowercase[$message[1]];list;buy;dem]==true;Argumant incorrect, \`$getServerVar[prefix]taff list/buy/dem\`]
    $endif
    `
}]
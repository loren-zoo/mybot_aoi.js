module.exports = [{
    name:"work",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$getUserVar[travail]==]
    $channelSendMessage[$channelID;Tu viens de gagner **15$**]
    $reply
    Tu n'as aucun travail à l'heure d'aujourd'hui, tu touches donc le smic.
    $setUservar[money;$sum[$getUservar[money];15]]
    $endif
    
    $if[$getUserVar[travail]==plombier]
    $reply
    Tu as travaillé en tant que plombier, tu gagnes donc **45$**
    $setUservar[money;$sum[$getUservar[money];45]]
    $endif

    $if[$getUservar[travail]==mangaka]
    $reply
    Tu as travaillé en tant que mangaka, tu gagnes donc **40$**
    $setUservar[money;$sum[$getUservar[money];40]]
    $endif

    $if[$getUservar[travail]==pompier]
    $reply
    Tu as travaillé en tant que pompier, tu gagnes donc **30$**
    $setUservar[money;$sum[$getUservar[money];30]]
    $endif

    $if[$getUservar[travail]==policier]
    $reply
    Tu as travaillé en tant que pompier, tu gagnes donc **35$**
    $setUservar[money;$sum[$getUservar[money];35]]
    $endif

    $if[$getUservar[travail]==manager]
    $reply
    Tu as travaillé en tant que pompier, tu gagnes donc **60$**
    $setUservar[money;$sum[$getUservar[money];60]]
    $endif

    $if[$getUservar[travail]==éléctricien]
    $reply
    Tu as travaillé en tant que pompier, tu gagnes donc **40$**
    $setUservar[money;$sum[$getUservar[money];40]]
    $endif

    $if[$getUservar[travail]==patron]
    $reply
    Tu as travaillé en tant que pompier, tu gagnes donc **85$**
    $setUservar[money;$sum[$getUservar[money];85]]
    $endif

    $cooldown[6h;Veuillez attendre %time% avant de retravailler.]


    
    $endif


    `
}]
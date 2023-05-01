module.exports = [{
    name:"tinfo",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==plombier]
    $title[1;Plombier;https://github.com/axe-fr/]
    $addField[1;Paye;Tu peux gagner 45$ toutes les 6h en éffectuant la commande \`$getServerVar[prefix]work\`;yes]
    $addField[1;Prix;175$]
    $endif

    $if[$message[1]==policier]
    $title[1;Policier;https://github.com/axe-fr/]
    $addField[1;Paye;Tu peux gagner 35$ toutes les 6h en éffectuant la commande \`$getServerVar[prefix]work\`;yes]
    $addField[1;Prix;130$]
    $endif

    $if[$message[1]==mangaka]
    $title[1;Mangaka;https://github.com/axe-fr/]
    $addField[1;Paye;Tu peux gagner 30$ toutes les 6h en éffectuant la commande \`$getServerVar[prefix]work\`;yes]
    $addField[1;Prix;110$]
    $endif
    
    $if[$message[1]==pompier]
    $title[1;Pompier;https://github.com/axe-fr/]
    $addField[1;Paye;Tu peux gagner 40$ toutes les 6h en éffectuant la commande \`$getServerVar[prefix]work\`;yes]
    $addField[1;Prix;125$]
    $endif

    $if[$message[1]==manager]
    $title[1;Manager;https://github.com/axe-fr/]
    $addField[1;Paye;Tu peux gagner 60$ toutes les 6h en éffectuant la commande \`$getServerVar[prefix]work\`;yes]
    $addField[1;Prix;150$]
    $endif

    $if[$message[1]==patron]
    $title[1;Patron;https://github.com/axe-fr/]
    $addField[1;Paye;Tu peux gagner 85$ toutes les 6h en éffectuant la commande \`$getServerVar[prefix]work\`;yes]
    $addField[1;Prix;205$]
    $endif


    $if[$message[1]==éléctricien]
    $title[1;éléctricien;https://github.com/axe-fr/]
    $addField[1;Paye;Tu peux gagner 40$ toutes les 6h en éffectuant la commande \`$getServerVar[prefix]work\`;yes]
    $addField[1;Prix;125$]
    $endif
    
    $color[1;$getservervar[color]]
    $footer[1;$getvar[footerall]]
    
    $onlyIf[$checkContains[$tolowercase[$message[1]];pompier;mangaka;policier;plombier;manager;patron;éléctricien]==true;Argumant incorrect, \`$getServerVar[prefix]tinfo pompier/mangaka/policier/plombier\`]

    $endif

    `
}]
module.exports = [{
    name:"top",
    $if:"v4",
    code:`
    $if[$checkContains[$getvar[owner];<@$authorID>]==true||$getvar[buyerID]==$authorID]
    $if[$message[1]==warn]
    $title[1;Top warns;https://github.com/axe-fr/]
    $description[
    $userLeaderboard[$guildID;warn;asc;{top} - {username} - {value}]]
    $onlyIf[$userLeaderboard[$guildID;warn;asc;{top} - {username} - {value}]!=;Aucune donnée enregistré]
    $endif
    $endif

    $if[$message[1]==bank||$message[1]==banque]
    $title[1;Top bank;https://github.com/axe-fr/]
    $description[
    $userLeaderboard[$guildID;bank;asc;{top} - {username} - {value}]]
    $onlyIf[$userLeaderboard[$guildID;bank;asc;{top} - {username} - {value}]!=;Aucune donnée enregistré]
    $endif

    $if[$message[1]==money]
    $title[1;Top money;https://github.com/axe-fr/]
    $description[
    $userLeaderBoard[$guildID;money;asc;{top} - {username} - {value}]]
    $onlyIf[$userLeaderboard[$guildID;money;asc;{top} - {username} - {value}]!=;Aucune donnée enregistré]
    $endif


    $if[$message[1]==rep]
    $title[1;Top réputation;https://github.com/axe-fr/]
    $description[
    $userLeaderBoard[$guildID;rep;asc;{top} - {username} - {value}]]
    $onlyIf[$userLeaderboard[$guildID;rep;asc;{top} - {username} - {value}]!=;Aucune donnée enregistré]
    $endif



    
    
    
    $onlyIf[$checkContains[$message[1];bank;rep;banque;money;warn]==true;Argumant "$message[1]"" invalide.]
    $endif
    
    `
}]
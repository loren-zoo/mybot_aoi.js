module.exports = [{
name: "queue",
 aliases: ["q"],
 $if: "v4",
 code: `


$if[$isNumber[$message[1]]==false]
$reply[$messageID;no]
$description[2;**($numberSeparator[$queueLength]) Queue | Page 1 / $replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]]**
$queue[1;5;\n \`{position}\` \`|\` [\`{title}\`]({url} "{url}")]]
$color[2;$getserverVar[color]]
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]]
$addField[1;Durée;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Musique;[$songInfo[title]]($songInfo[url] "$advancedTextSplit[$songInfo[title]; ;1] | $replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;$replaceText[$replaceText[$checkContains[$songInfo[url];open.spotify.com];true;Spotify];false;Audio]]]");yes]
$color[1;$getserverVar[color]]
$addTimestamp[2;$dateStamp]
$addButton[1;Next;2;nextqueue;$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==1];true;yes];false;no];⏩]
$addButton[1;Close;1;closequeue;no;⏹]
$addButton[1;Back;2;previousqueue;yes;⏪]
$else
$reply[$messageID;no]
$author[1;Queue]
$description[2;**($numberSeparator[$queueLength]) Queue | Page $filterMessage[$message[1];-] / $replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]**
$queue[$filterMessage[$message[1];-];5;\`{position}\` \`|\` [\`{title}\`]({url} "{url}")]]
$color[2;$getserverVar[color]]
$thumbnail[1;$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]]
$addField[1;Durée;\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`;yes]
$addField[1;Musique;[$songInfo[title]]($songInfo[url] "$advancedTextSplit[$songInfo[title]; ;1] | $replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;$replaceText[$replaceText[$checkContains[$songInfo[url];open.spotify.com];true;Spotify];false;Audio]]]");yes]
$color[1;$getserverVar[color]]
$addTimestamp[2;$dateStamp]
$onlyIf[$filterMessage[$message[1];-]!=0;]
$onlyIf[$filterMessage[$message[1];-]<=$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]];]
$onlyIf[$findSpecialChars[$message[1]]==;]
$endif
$onlyIf[$hasPlayer!=false;]
$onlyIf[$voiceID!=;]
`
},
 {
 name: "previousqueue",
 type: "interaction",
 prototype: "button",
 code: `$interactionUpdate[;{newEmbed:
{field:Musique:[$songInfo[title]]($songInfo[url] "$advancedTextSplit[$songInfo[title]; ;1] | $replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;$replaceText[$replaceText[$checkContains[$songInfo[url];open.spotify.com];true;Spotify];false;Audio]]]"):yes}
{field:Durée:\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`:yes}
{color:$getserverVar[color]}
{thumbnail:$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]}}
{newEmbed:{description:**($numberSeparator[$queueLength]) Queue | Page $get[page] / $replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]]**
$queue[$get[page];5;\`{position}\` \`|\` [\`{title}\`]({url} "{url}")]}
{color:$getserverVar[color]}
{timestamp}};{actionRow:{button:Back:2:previousqueue:$replaceText[$replaceText[$checkCondition[$get[page]==1];true;yes];false;$replaceText[$replaceText[$checkCondition[$get[page]>$truncate[$sum[$divide[$queueLength;5];0.9]]];true;yes];false;no]]:⏪} {button:Close:1:closequeue:no:⏹} {button:Next:2:nextqueue:$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==1];true;yes];false;$replaceText[$replaceText[$checkCondition[$get[page]==$truncate[$sum[$divide[$queueLength;5];0.9]]];true;yes];false;no]]:⏩} }]
$let[page;$replaceText[$replaceText[$checkCondition[$get[firstpage]<=$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]]];true;$get[firstpage]];false;$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]]]]
$let[firstpage;$sub[$advancedTextSplit[$getEmbed[$channelID;$interactionData[message.id];2;description];Queue | Page ;2;/;1];1]]
$onlyIf[$checkContains[$usersInChannel[$replaceText[$replaceText[$checkCondition[$voiceID[$interactionData[author.id]]==];true;$voiceID[$clientID]];false;$voiceID[$interactionData[author.id]]]];$clientID]==true;]
$onlyIf[$hasPlayer!=false;]
$suppressErrors`
},
 {
 name: "closequeue",
 type: "interaction",
 prototype: "button",
 code: `$deleteMessage[$interactionData[message.id]]
$onlyIf[$checkContains[$usersInChannel[$replaceText[$replaceText[$checkCondition[$voiceID[$interactionData[author.id]]==];true;$voiceID[$clientID]];false;$voiceID[$interactionData[author.id]]]];$clientID]==true;]
$onlyIf[$hasPlayer!=false;]
$suppressErrors`
},
 {
 name: "nextqueue",
 type: "interaction",
 prototype: "button",
 code: `$interactionUpdate[;{newEmbed:
{field:Musique:[$songInfo[title]]($songInfo[url] "$advancedTextSplit[$songInfo[title]; ;1] | $replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com];true;YouTube];false;$replaceText[$replaceText[$checkContains[$songInfo[url];soundcloud.com];true;SoundCloud];false;$replaceText[$replaceText[$checkContains[$songInfo[url];open.spotify.com];true;Spotify];false;Audio]]]"):yes}
{field:Durée:\`$replaceText[$replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;$humanizeMS[$songInfo[duration];4]];true;$djsEval[new Date($replaceText[$replaceText[$checkContains[$songInfo[url];youtube.com;soundcloud.com;open.spotify.com];false;0];true;$findNumbers[$songInfo[duration]]]).toISOString().substr(11, 8);yes]];00:00:00;LIVE]\`:yes}
{color:$getserverVar[color]}
{thumbnail:$replaceText[$songInfo[thumbnail];undefined;$userAvatar[$clientID;2048]]}}
{newEmbed:{description:**($numberSeparator[$queueLength]) Queue | Page $get[page] / $replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]]**
$queue[$get[page];5;\`{position}\` \`|\` [\`{title}\`]({url} "{url}")]}
{color:$getserverVar[color]}
{timestamp}};{actionRow:{button:Back:2:previousqueue:$replaceText[$replaceText[$checkCondition[$get[page]==1];true;yes];false;$replaceText[$replaceText[$checkCondition[$get[page]>$truncate[$sum[$divide[$queueLength;5];0.9]]];true;yes];false;no]]:⏪} {button:Close:1:closequeue:no:⏹} {button:Next:2:nextqueue:$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==1];true;yes];false;$replaceText[$replaceText[$checkCondition[$get[page]==$truncate[$sum[$divide[$queueLength;5];0.9]]];true;yes];false;no]]:⏩} }]
$let[page;$replaceText[$replaceText[$checkCondition[$get[firstpage]<=$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]]];true;$get[firstpage]];false;$replaceText[$replaceText[$checkCondition[$truncate[$sum[$divide[$queueLength;5];0.9]]==0];true;1];false;$truncate[$sum[$divide[$queueLength;5];0.9]]]]]
$let[firstpage;$sum[$advancedTextSplit[$getEmbed[$channelID;$interactionData[message.id];2;description];Queue | Page ;2;/;1];1]]
$onlyIf[$checkContains[$usersInChannel[$replaceText[$replaceText[$checkCondition[$voiceID[$interactionData[author.id]]==];true;$voiceID[$clientID]];false;$voiceID[$interactionData[author.id]]]];$clientID]==true;]
$onlyIf[$hasPlayer!=false;]
$suppressErrors`
}]
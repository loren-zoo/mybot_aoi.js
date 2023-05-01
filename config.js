module.exports = {
    Bot: {
    token: "",
    prefix: ["$getServerVar[prefix]","<@!$clientID>","<@$clientID>"],
    intents: "all",
    database: {
         type:'default',
        db:require('dbdjs.db'),
        path:"./db/",
        tables:["main"],
        promisify:false
    },

    respondOnEdit: {
        commands: true
    },
    suppressAllErrors: false,

}}
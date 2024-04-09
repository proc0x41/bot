const {} = require("discord.js");


module.exports = {
    name:"ready",
    run:async(client) => {

        console.log(`🔥 Estou online em ${client.user.username}!`);
        console.log(`🔥 ${client.users.cache.size} membros`);
        console.log(`🔥 Estou em ${client.guilds.cache.size}, Servidores`);

    }
}
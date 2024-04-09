const { ApplicationCommandType, EmbedBuilder } = require("discord.js");
const { ownerid } = require("../../config.json");
const { perm } = require("../../database/index");

module.exports = {
    name: "permlist",
    description: "Veja a lista de quem tem permissão",
    type: ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        if (interaction.user.id !== ownerid) 
            return interaction.reply({ content: "Apenas o Dono pode usar esta função", ephemeral: true });

        try {
            const permissions = await perm.all();

            let msg = "";
            permissions.forEach((p, index) => {
                msg += `- ${index + 1}° - <@${p.ID}> (\`${p.ID}\`)\n`; // Accessing ID property
            });

            interaction.reply({
                embeds: [
                    new EmbedBuilder()
                        .setTitle(`${interaction.guild.name} | Perm List`)
                        .setDescription(`Abaixo está a lista de permissões:\n\n${msg}`)
                ],
                ephemeral: true
            });
        } catch (error) {
            console.error("Error fetching permissions:", error);
            interaction.reply({ content: "Ocorreu um erro ao buscar as permissões.", ephemeral: true });
        }
    }
};
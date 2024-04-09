const { ApplicationCommandType, ApplicationCommandOptionType, User, PermissionFlagsBits, PermissionsBitField, Attachment } = require("discord.js");
const { Permissions, EmbedBuilder } = require("discord.js");
const { ownerid } = require("../../config.json")


module.exports = {
    name: "deletar",
    description: "Deleta mensagens de um canal",
    type: ApplicationCommandType.CHAT_INPUT,
    options: [
        {
            name: "amount",
            description: "Number of messages to delete (1-100)",
            type: 4, // Type 4 represents an integer
            required: true
        }
    ],
    // default_member_permissions: PermissionFlagsBits.Administrator,
    // defaultPermission: true,
    // permissions: [
    //     {
    //         id: PermissionsBitField.Flags.Administrator,
    //         type: "ROLE",
    //         permission: true
    //     }
    // ],
            

    
        run: async(client, interaction) => {
            // Check if the user has permission to manage messages
        if (interaction.user.id !== ownerid) {
            return interaction.reply({
                content: "Você não tem permissão para utilizar o comando.",
                ephemeral: true
            });
        }

        // Retrieve the amount of messages to delete from the command options
        const amount = interaction.options.getInteger("amount");

        // Check if the amount is within the valid range (1-100)
        if (amount < 2 || amount > 100) {
            return interaction.reply({
                content: "You can only delete between 2 and 100 messages at a time.",
                ephemeral: true
            });
        }
        // Delete the specified number of messages
        const gif = "https://media.tenor.com/7uQu2X9PbawAAAAM/thanos-endgame.gif";
        try {


                const embed1 = new EmbedBuilder()
                    .setTitle(`${amount} mensagens deletadas`)
                    .setColor(0xFF0000)
                    .setAuthor({name: `${interaction.guild.name}`})
                    .setImage(`${gif}`)
                    .setDescription(`Mensagens deletadas por <@${interaction.user.id}>`)

                const messages = await interaction.channel.messages.fetch({ limit: amount });
                interaction.channel.bulkDelete(messages);
                interaction.reply({ embeds: [embed1]});


        } catch (error) {
            console.error("Error deleting messages:", error);
            interaction.reply({
                content: "An error occurred while deleting messages.",
                ephemeral: true
            });
        }
    }
    }
    
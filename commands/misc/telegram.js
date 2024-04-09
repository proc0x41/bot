const { ApplicationCommandType, ApplicationCommandOptionType, User, PermissionFlagsBits, PermissionsBitField, Attachment, ButtonStyle, Component, ActionRowBuilder } = require("discord.js");
const { Permissions, EmbedBuilder, ButtonBuilder } = require("discord.js");
const { ownerid } = require("../../config.json")
const emoji = require("../../emoji.json");

module.exports = {
    name: "telegram",
    description: "Envia o telegram OFICIAL da Tech Linux!",
    type: ApplicationCommandType.CHAT_INPUT,

    run: async (client, interaction) => {

        const tgbutton = new ButtonBuilder()
            .setLabel('Telegram')
            .setEmoji(emoji.mao)
            .setURL('https://t.me/+ho1jD3fAqcFlZTIx')
            .setStyle(ButtonStyle.Link)
        const row = new ActionRowBuilder()
            .addComponents(tgbutton)

        const embed1 = new EmbedBuilder()
           .setTitle("Telegram OFICIAL da Tech Linux")
           .setDescription(`Entre em nossa comunidade do telegram, lá você encontra diversos PDF's e serviços exclusivos!`)
           .setTimestamp()
           .setColor(0x00FFFF) 
           .setThumbnail('https://media.tenor.com/9ZsRZ-PXPlwAAAAi/telegram-gif.gif')
           .setFooter({ text: interaction.user.tag, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
        interaction.reply({ embeds: [embed1], ephemeral: false , components: [row] })
    }


}
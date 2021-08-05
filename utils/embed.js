const {MessageEmbed} = require('discord.js');
const {colors} = require('../config.json');

module.exports = {
    error(message) {
        return new MessageEmbed().setTitle('⛔ Error').setColor(colors.error).setDescription(message);
    },
    info(message) {
        if (message) {
            return new MessageEmbed().setTitle('ℹ Info').setColor(colors.info).setDescription(message)
                .setURL('https://github.com/Maiky1304/guild-logs')
                .setFooter('GuildLogs by Maiky Perlee © 2021');
        } else {
            return new MessageEmbed().setTitle('ℹ Info').setColor(colors.info)
                .setURL('https://github.com/Maiky1304/guild-logs')
                .setFooter('GuildLogs by Maiky Perlee © 2021');
        }
    },
    warning(message) {
        return new MessageEmbed().setTitle('⚠ Warning').setColor(colors.warning).setDescription(message);
    },
}
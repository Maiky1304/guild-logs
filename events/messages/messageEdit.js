const Embed = require('../../utils/embed');
const Channels = require('../../utils/channels');

module.exports = {
    name: 'messageUpdate',
    type: 'on',
    async: true,
    async event(client, oldMessage, newMessage) {
        await Channels.sendMemberLog(client, Embed.info()
            .setTitle('Message Edited').addField('Original message', oldMessage.content, true)
            .addField('New message', newMessage.content, true)
            .addField("Edited by", `<@${newMessage.author.id}>`, true)
            .addField('ID', "``" + newMessage.id + "``", true).setTimestamp());
    }
}
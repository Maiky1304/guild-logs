const Embed = require('../../utils/embed');
const Channels = require('../../utils/channels');

module.exports = {
    name: 'messageDelete',
    type: 'on',
    async: true,
    async event(client, message) {
        const fetchedLogs = await message.guild.fetchAuditLogs({
            limit: 1,
            type: 'MESSAGE_DELETE',
        });
        // Since there's only 1 audit log entry in this collection, grab the first one
        const deleteLog = fetchedLogs.entries.first();

        if (!deleteLog) return;

        await Channels.sendMemberLog(client, Embed.info()
            .setTitle('Message Deleted').addField('ID', "``" + message.id + "``", true)
            .addField('Original message', message.content, true)
            .addField("Deleted by", `<@${deleteLog.executor.id}>`, true).setTimestamp());
    }
}
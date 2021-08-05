const Embed = require('../../utils/embed');
const Channels = require('../../utils/channels');

module.exports = {
    name: 'guildMemberRemove',
    type: 'on',
    async: true,
    async event(client, member) {
        const fetchedLogs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_KICK',
        });
        // Since there's only 1 audit log entry in this collection, grab the first one
        const kickLog = fetchedLogs.entries.first();

        await Channels.sendMemberLog(client, Embed.info(`${member.user.tag} - <@${member.id}>`)
            .setTitle('Member Left').addField('ID', "``" + member.id + "``", true)
            .addField("Kicked", kickLog ? `✅ (By: <@${kickLog.executor.id}>)` : '❌', true).setTimestamp());
    }
}
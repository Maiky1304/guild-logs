const Embed = require('../../utils/embed');
const Channels = require('../../utils/channels');

module.exports = {
    name: 'guildBanRemove',
    type: 'on',
    async: true,
    async event(client, member) {
        const fetchedLogs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_REMOVE',
        });
        // Since there's only 1 audit log entry in this collection, grab the first one
        const unbanLog = fetchedLogs.entries.first();

        if (!unbanLog) return;

        await Channels.sendMemberLog(client, Embed.info(`${member.user.tag} - <@${member.id}>`)
            .setTitle('Member Unbanned').addField('ID', "``" + member.id + "``")
            .addField("Ban lifted by", `<@${unbanLog.executor.id}>`).setTimestamp());
    }
}
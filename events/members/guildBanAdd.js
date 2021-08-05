const Embed = require('../../utils/embed');
const Channels = require('../../utils/channels');

module.exports = {
    name: 'guildBanAdd',
    type: 'on',
    async: true,
    async event(client, member) {
        const fetchedLogs = await member.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_ADD',
        });
        // Since there's only 1 audit log entry in this collection, grab the first one
        const banLog = fetchedLogs.entries.first();

        if (!banLog) return;

        await Channels.sendMemberLog(client, Embed.info(`${member.user.tag} - <@${member.id}>`)
            .setTitle('Member Banned').addField('ID', "``" + member.id + "``")
            .addField("Banned by", `<@${banLog.executor.id}>`).setTimestamp());
    }
}
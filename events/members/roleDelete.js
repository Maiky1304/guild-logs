const Embed = require('../../utils/embed');
const Channels = require('../../utils/channels');

module.exports = {
    name: 'roleDelete',
    type: 'on',
    async: true,
    async event(client, role) {
        const fetchedLogs = await role.guild.fetchAuditLogs({
            limit: 1,
            type: 'ROLE_DELETE',
        });
        // Since there's only 1 audit log entry in this collection, grab the first one
        const roleLog = fetchedLogs.entries.first();

        await Channels.sendMemberLog(client, Embed.info(`${role.name}`)
            .setTitle('Role Deleted').addField('ID', "``" + role.id + "``", true)
            .addField("Deleted by", `<@${roleLog.executor.id}>`, true).setTimestamp());
    }
}
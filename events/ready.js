module.exports = {
    name: 'ready',
    type: 'on',
    event(client) {
        console.log(`Logged in to ${client.user.tag}`);
    }
}
const picsOnlyChannels = ['733239970562703411', '669514986548232193', '669520318615912466', '735401124135174185'];
module.exports = {
	run: message => {
		const isBot = message.author.bot;
		// Removes text messages in media-only channels
		if (picsOnlyChannels.includes(message.channel.id) && !isBot) {
			
			const isAdmin = message.member.hasPermission('ADMINISTRATOR');
			if (!isAdmin) {
				if (!(message.attachments.size > 0 || message.embeds.length > 0)) {
					message.delete()
						.then(message.say(`Don't chat here.`)
							.then(message => message.delete({ timeout: 5000 }))
							.catch(console.error)
							);
				}
			}
		}

		// Auto reacts to images posted in #memes in BBC Discord
		if (message.guild.id == '669190303353143306') {
			if (message.channel.id == '669355693140213780') {
				if (message.attachments.size > 0 || message.embeds.length > 0) {
					message.react(message.guild.emojis.cache.find(emoji => emoji.name == 'DrakeYes'));
					message.react(message.guild.emojis.cache.find(emoji => emoji.name == 'DrakeNo'));
				}
			}
		}
	}
}
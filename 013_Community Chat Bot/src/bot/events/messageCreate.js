import { config } from '../../../config/config.js';
import { containsBannedWords, isSpam } from '../utils/filters.js';

export async function messageCreate(message) {
  // Ignore bot messages
  if (message.author.bot) return;
  
  // Auto-moderation checks
  if (config.autoMod.enabled) {
    await handleAutoModeration(message);
  }
  
  // Handle prefix commands
  if (message.content.startsWith(config.prefix)) {
    await handlePrefixCommand(message);
  }
}

async function handleAutoModeration(message) {
  // Check for banned words
  if (containsBannedWords(message.content)) {
    await message.delete();
    
    const warning = await message.channel.send({
      embeds: [{
        color: config.colors.warning,
        description: `⚠️ ${message.author}, your message contained inappropriate content and was removed.`
      }]
    });
    
    // Delete warning after 5 seconds
    setTimeout(() => warning.delete(), 5000);
    return;
  }
  
  // Check for spam
  if (await isSpam(message)) {
    await message.delete();
    
    const warning = await message.channel.send({
      embeds: [{
        color: config.colors.error,
        description: `🚫 ${message.author}, please avoid spamming.`
      }]
    });
    
    setTimeout(() => warning.delete(), 5000);
  }
}

async function handlePrefixCommand(message) {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  
  switch (command) {
    case 'ping':
      const pingMessage = await message.reply('Pinging...');
      const latency = pingMessage.createdTimestamp - message.createdTimestamp;
      const apiLatency = Math.round(message.client.ws.ping);
      
      await pingMessage.edit({
        embeds: [{
          color: config.colors.primary,
          title: '🏓 Pong!',
          fields: [
            { name: 'Message Latency', value: `${latency}ms`, inline: true },
            { name: 'API Latency', value: `${apiLatency}ms`, inline: true }
          ]
        }]
      });
      break;
      
    case 'serverinfo':
      const { guild } = message;
      const embed = {
        color: config.colors.primary,
        title: `📊 ${guild.name} Info`,
        thumbnail: { url: guild.iconURL() },
        fields: [
          { name: 'Members', value: `${guild.memberCount}`, inline: true },
          { name: 'Channels', value: `${guild.channels.cache.size}`, inline: true },
          { name: 'Created', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>`, inline: true },
          { name: 'Roles', value: `${guild.roles.cache.size}`, inline: true },
          { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true }
        ],
        timestamp: new Date().toISOString()
      };
      
      await message.reply({ embeds: [embed] });
      break;
  }
}
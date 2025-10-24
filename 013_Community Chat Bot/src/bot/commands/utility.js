export const help = {
  data: {
    name: 'help',
    description: 'Show all available commands'
  },
  
  async execute(interaction) {
    const embed = {
      color: 0x5865F2,
      title: '🤖 Community Bot Help',
      description: 'Here are all the available commands:',
      fields: [
        {
          name: '🛡️ Moderation',
          value: '`/warn` - Warn a user\n`/clear` - Clear messages'
        },
        {
          name: '🔧 Utility',
          value: '`/help` - Show this message\n`/userinfo` - Get user information'
        }
      ],
      timestamp: new Date().toISOString()
    };
    
    await interaction.reply({ embeds: [embed] });
  }
};

export const userinfo = {
  data: {
    name: 'userinfo',
    description: 'Get information about a user'
  },
  
  async execute(interaction) {
    const user = interaction.options.getUser('user') || interaction.user;
    const member = interaction.guild.members.cache.get(user.id);
    
    const embed = {
      color: 0x5865F2,
      title: `👤 User Info - ${user.tag}`,
      thumbnail: { url: user.displayAvatarURL() },
      fields: [
        { name: 'ID', value: user.id, inline: true },
        { name: 'Account Created', value: `<t:${Math.floor(user.createdTimestamp / 1000)}:R>`, inline: true },
        { name: 'Joined Server', value: `<t:${Math.floor(member.joinedTimestamp / 1000)}:R>`, inline: true },
        { name: 'Roles', value: member.roles.cache.map(role => role.name).join(', ').slice(0, 1024) || 'None' }
      ],
      timestamp: new Date().toISOString()
    };
    
    await interaction.reply({ embeds: [embed] });
  }
};
export const warn = {
  data: {
    name: 'warn',
    description: 'Warn a user for inappropriate behavior'
  },
  
  async execute(interaction) {
    const user = interaction.options.getUser('user');
    const reason = interaction.options.getString('reason') || 'No reason provided';
    
    const embed = {
      color: 0xFEE75C,
      title: '⚠️ User Warned',
      fields: [
        { name: 'User', value: `${user.tag}`, inline: true },
        { name: 'Moderator', value: `${interaction.user.tag}`, inline: true },
        { name: 'Reason', value: reason }
      ],
      timestamp: new Date().toISOString()
    };
    
    await interaction.reply({ embeds: [embed] });
  }
};

export const clear = {
  data: {
    name: 'clear',
    description: 'Clear a specified number of messages'
  },
  
  async execute(interaction) {
    const amount = interaction.options.getInteger('amount');
    
    if (amount < 1 || amount > 100) {
      return await interaction.reply({
        content: 'Please provide a number between 1 and 100.',
        ephemeral: true
      });
    }
    
    await interaction.channel.bulkDelete(amount, true);
    
    const embed = {
      color: 0x57F287,
      description: `✅ Cleared ${amount} messages`,
      timestamp: new Date().toISOString()
    };
    
    await interaction.reply({ embeds: [embed], ephemeral: true });
  }
};
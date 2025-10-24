import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { config } from '../../config/config.js';
import { loadCommands } from './commands/index.js';
import { loadEvents } from './events/index.js';

class DiscordBot {
  constructor() {
    this.client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
      ]
    });
    
    this.client.commands = new Collection();
    this.config = config;
  }

  async start() {
    try {
      // Load commands and events
      await loadCommands(this.client);
      await loadEvents(this.client);
      
      // Login to Discord
      await this.client.login(process.env.DISCORD_TOKEN);
      console.log('🤖 Discord bot is starting...');
    } catch (error) {
      console.error('Failed to start bot:', error);
      process.exit(1);
    }
  }
}

// Start the bot
const bot = new DiscordBot();
bot.start();
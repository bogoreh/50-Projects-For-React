import { ready } from './ready.js';
import { messageCreate } from './messageCreate.js';

export async function loadEvents(client) {
  client.once('ready', ready);
  client.on('messageCreate', messageCreate);
  
  console.log('✅ Events loaded');
}
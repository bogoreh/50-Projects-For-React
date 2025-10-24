import * as moderation from './moderation.js';
import * as utility from './utility.js';

export async function loadCommands(client) {
  const commands = [
    ...Object.values(moderation),
    ...Object.values(utility)
  ];

  commands.forEach(command => {
    if (command.data && command.execute) {
      client.commands.set(command.data.name, command);
    }
  });

  console.log(`✅ Loaded ${commands.length} commands`);
}
export function ready(client) {
  console.log(`✅ Logged in as ${client.user.tag}!`);
  console.log(`🌐 Serving ${client.guilds.cache.size} servers`);
  console.log(`👥 Watching ${client.users.cache.size} users`);
  
  // Set bot activity
  client.user.setActivity({
    name: 'your community 👋',
    type: 'WATCHING'
  });
}
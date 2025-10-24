import { config } from '../../../config/config.js';

// Track user messages for spam detection
const userMessageTimestamps = new Map();

export function containsBannedWords(content) {
  const lowerContent = content.toLowerCase();
  return config.autoMod.bannedWords.some(word => 
    lowerContent.includes(word.toLowerCase())
  );
}

export async function isSpam(message) {
  const userId = message.author.id;
  const now = Date.now();
  
  if (!userMessageTimestamps.has(userId)) {
    userMessageTimestamps.set(userId, []);
  }
  
  const timestamps = userMessageTimestamps.get(userId);
  timestamps.push(now);
  
  // Keep only messages from last 10 seconds
  const recentTimestamps = timestamps.filter(time => now - time < 10000);
  userMessageTimestamps.set(userId, recentTimestamps);
  
  // If more than 5 messages in 10 seconds, consider it spam
  return recentTimestamps.length > 5;
}
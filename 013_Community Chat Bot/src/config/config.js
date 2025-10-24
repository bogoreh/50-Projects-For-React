export const config = {
  prefix: '!',
  allowedChannels: ['general', 'bot-commands'],
  autoMod: {
    enabled: true,
    bannedWords: ['spam', 'scam', 'malicious-link'],
    maxWarnings: 3
  },
  colors: {
    primary: 0x5865F2,
    success: 0x57F287,
    warning: 0xFEE75C,
    error: 0xED4245
  }
}
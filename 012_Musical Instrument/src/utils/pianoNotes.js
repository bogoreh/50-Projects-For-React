export const pianoNotes = [
  // White keys with their keyboard mappings
  { note: 'C4', key: 'A', type: 'white', frequency: 261.63 },
  { note: 'D4', key: 'S', type: 'white', frequency: 293.66 },
  { note: 'E4', key: 'D', type: 'white', frequency: 329.63 },
  { note: 'F4', key: 'F', type: 'white', frequency: 349.23 },
  { note: 'G4', key: 'G', type: 'white', frequency: 392.00 },
  { note: 'A4', key: 'H', type: 'white', frequency: 440.00 },
  { note: 'B4', key: 'J', type: 'white', frequency: 493.88 },
  { note: 'C5', key: 'K', type: 'white', frequency: 523.25 },
  
  // Black keys
  { note: 'C#4', key: 'W', type: 'black', frequency: 277.18 },
  { note: 'D#4', key: 'E', type: 'black', frequency: 311.13 },
  { note: 'F#4', key: 'T', type: 'black', frequency: 369.99 },
  { note: 'G#4', key: 'Y', type: 'black', frequency: 415.30 },
  { note: 'A#4', key: 'U', type: 'black', frequency: 466.16 }
]

export const getNoteByKey = (key) => {
  return pianoNotes.find(note => note.key.toLowerCase() === key.toLowerCase())
}
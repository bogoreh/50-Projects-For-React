import React, { useEffect, useState } from 'react'
import PianoKey from './PianoKey'
import { pianoNotes, getNoteByKey } from '../../utils/pianoNotes'
import useAudio from '../../hooks/useAudio'
import './styles.css'

const Piano = () => {
  const [activeKeys, setActiveKeys] = useState(new Set())
  const { playNote, stopNote } = useAudio()

  const handleKeyDown = (note) => {
    setActiveKeys(prev => new Set(prev).add(note.key))
    playNote(note.frequency)
  }

  const handleKeyUp = (note) => {
    setActiveKeys(prev => {
      const newSet = new Set(prev)
      newSet.delete(note.key)
      return newSet
    })
    stopNote(note.frequency)
  }

  useEffect(() => {
    const handleKeyboardKeyDown = (event) => {
      const note = getNoteByKey(event.key)
      if (note && !activeKeys.has(note.key)) {
        handleKeyDown(note)
      }
    }

    const handleKeyboardKeyUp = (event) => {
      const note = getNoteByKey(event.key)
      if (note) {
        handleKeyUp(note)
      }
    }

    window.addEventListener('keydown', handleKeyboardKeyDown)
    window.addEventListener('keyup', handleKeyboardKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyboardKeyDown)
      window.removeEventListener('keyup', handleKeyboardKeyUp)
    }
  }, [activeKeys])

  // Group notes for proper piano layout
  const whiteKeys = pianoNotes.filter(note => note.type === 'white')
  const blackKeys = pianoNotes.filter(note => note.type === 'black')

  return (
    <div className="piano-container">
      <div className="piano">
        <div className="white-keys">
          {whiteKeys.map((note) => (
            <PianoKey
              key={note.note}
              note={note}
              isActive={activeKeys.has(note.key)}
              onMouseDown={() => handleKeyDown(note)}
              onMouseUp={() => handleKeyUp(note)}
              onMouseLeave={() => handleKeyUp(note)}
            />
          ))}
        </div>
        <div className="black-keys">
          {blackKeys.map((note) => (
            <PianoKey
              key={note.note}
              note={note}
              isActive={activeKeys.has(note.key)}
              onMouseDown={() => handleKeyDown(note)}
              onMouseUp={() => handleKeyUp(note)}
              onMouseLeave={() => handleKeyUp(note)}
            />
          ))}
        </div>
      </div>
      
      <div className="keyboard-help">
        <p>Keyboard keys: A S D F G H J K (white) • W E T Y U (black)</p>
      </div>
    </div>
  )
}

export default Piano
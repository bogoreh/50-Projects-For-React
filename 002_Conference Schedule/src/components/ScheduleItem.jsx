import React from 'react';

const ScheduleItem = ({ item, speakers }) => {
  const getTypeColor = (type) => {
    const colors = {
      keynote: '#ff6b6b',
      talk: '#4ecdc4',
      workshop: '#45b7d1',
      break: '#96ceb4'
    };
    return colors[type] || '#ccc';
  };

  const speaker = item.speaker ? speakers.find(s => s.id === item.speaker) : null;

  return (
    <div className="schedule-item" style={{ borderLeft: `4px solid ${getTypeColor(item.type)}` }}>
      <div className="schedule-time">{item.time}</div>
      <div className="schedule-content">
        <h4>{item.title}</h4>
        {speaker && (
          <div className="schedule-speaker">
            <img src={speaker.avatar} alt={speaker.name} className="speaker-avatar" />
            <span>{speaker.name}</span>
          </div>
        )}
        <span className="schedule-type">{item.type}</span>
      </div>
    </div>
  );
};

export default ScheduleItem;
import React, { useState } from 'react';
import ScheduleItem from '../components/ScheduleItem';
import { conferenceData } from '../data/conferenceData';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState('day1');

  return (
    <div className="page schedule">
      <div className="container">
        <h1>Conference Schedule</h1>
        
        <div className="day-selector">
          <button 
            className={`day-btn ${activeDay === 'day1' ? 'active' : ''}`}
            onClick={() => setActiveDay('day1')}
          >
            Day 1 - October 15
          </button>
          <button 
            className={`day-btn ${activeDay === 'day2' ? 'active' : ''}`}
            onClick={() => setActiveDay('day2')}
          >
            Day 2 - October 16
          </button>
        </div>

        <div className="schedule-list">
          {conferenceData.schedule[activeDay].map((item, index) => (
            <ScheduleItem 
              key={index} 
              item={item} 
              speakers={conferenceData.speakers}
            />
          ))}
        </div>

        <div className="schedule-legend">
          <h4>Legend:</h4>
          <div className="legend-items">
            <span className="legend-keynote">Keynote</span>
            <span className="legend-talk">Talk</span>
            <span className="legend-workshop">Workshop</span>
            <span className="legend-break">Break</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
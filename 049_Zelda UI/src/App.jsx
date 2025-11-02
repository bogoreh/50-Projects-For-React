import { useState } from 'react';
import './App.css';
import HealthBar from './components/HealthBar/HealthBar';
import ItemWheel from './components/ItemWheel/ItemWheel';
import { items } from './data/items';

function App() {
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [health, setHealth] = useState(15);

  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleHeal = () => {
    if (health < 15) {
      setHealth(prev => Math.min(prev + 1, 15));
    }
  };

  const handleDamage = () => {
    if (health > 0) {
      setHealth(prev => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="app">
      <div className="background">
        <div className="sky"></div>
        <div className="hills"></div>
        <div className="grass"></div>
      </div>
      
      <HealthBar currentHealth={health} maxHealth={15} />
      
      <div className="controls">
        <button onClick={handleDamage} className="control-btn damage">
          Take Damage
        </button>
        <button onClick={handleHeal} className="control-btn heal">
          Heal
        </button>
      </div>
      
      <ItemWheel 
        items={items} 
        selectedItem={selectedItem}
        onItemSelect={handleItemSelect}
      />
      
      <div className="current-item">
        <h3>Currently Selected:</h3>
        {selectedItem && (
          <div className="current-item-display">
            <span className="current-icon">{selectedItem.icon}</span>
            <span className="current-name">{selectedItem.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
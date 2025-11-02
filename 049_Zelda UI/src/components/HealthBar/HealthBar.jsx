import './HealthBar.css';

function HealthBar({ currentHealth = 15, maxHealth = 15 }) {
  const hearts = [];
  const fullHearts = Math.floor(currentHealth);
  const hasHalfHeart = currentHealth % 1 !== 0;

  for (let i = 0; i < maxHealth; i++) {
    if (i < fullHearts) {
      hearts.push('full');
    } else if (i === fullHearts && hasHalfHeart) {
      hearts.push('half');
    } else {
      hearts.push('empty');
    }
  }

  return (
    <div className="health-bar">
      <div className="hearts-container">
        {hearts.map((type, index) => (
          <div key={index} className={`heart ${type}`}>
            {type === 'full' ? '❤️' : type === 'half' ? '💔' : '🖤'}
          </div>
        ))}
      </div>
      <div className="stamina-wheel">
        <div className="stamina-circle">
          <div className="stamina-fill"></div>
        </div>
      </div>
    </div>
  );
}

export default HealthBar;
import './ItemSlot.css';

function ItemSlot({ item, isSelected, onClick }) {
  return (
    <div 
      className={`item-slot ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
      style={{ borderColor: item?.color || '#333' }}
    >
      {item ? (
        <div className="item-content">
          <div className="item-icon">{item.icon}</div>
          <div className="item-name">{item.name}</div>
        </div>
      ) : (
        <div className="empty-slot">+</div>
      )}
    </div>
  );
}

export default ItemSlot;
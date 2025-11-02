import './ItemWheel.css';
import ItemSlot from '../ItemSlot/ItemSlot';

function ItemWheel({ items, selectedItem, onItemSelect }) {
  return (
    <div className="item-wheel">
      <div className="wheel-background">
        <div className="wheel-center"></div>
        <div className="wheel-ring"></div>
      </div>
      
      <div className="items-grid">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className={`item-position pos-${index + 1}`}
          >
            <ItemSlot
              item={item}
              isSelected={selectedItem?.id === item.id}
              onClick={() => onItemSelect(item)}
            />
          </div>
        ))}
      </div>
      
      {selectedItem && (
        <div className="selected-item-info">
          <div className="item-description">
            {selectedItem.description}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemWheel;
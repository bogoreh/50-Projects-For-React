import './MediaCard.css';
import Button from '../../common/Button/Button';
import PriceTag from '../PriceTag/PriceTag';

const MediaCard = ({ item, onAddToCart }) => {
  const getCategoryColor = (category) => {
    const colors = {
      music: '#ec4899',
      games: '#f59e0b',
      movies: '#6366f1'
    };
    return colors[category] || '#6b7280';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      music: '🎵',
      games: '🎮',
      movies: '🎬'
    };
    return icons[category] || '📦';
  };

  return (
    <div className="media-card card card--hover">
      <div 
        className="media-card__category"
        style={{ backgroundColor: getCategoryColor(item.category) }}
      >
        {getCategoryIcon(item.category)} {item.category}
      </div>
      
      <div className="media-card__image">
        <img src={item.image} alt={item.title} />
      </div>
      
      <div className="media-card__content">
        <h3 className="media-card__title">{item.title}</h3>
        <p className="media-card__description">{item.description}</p>
        
        <div className="media-card__details">
          <div className="media-card__rating">
            {'⭐'.repeat(Math.floor(item.rating))}
            <span>({item.rating})</span>
          </div>
          <PriceTag price={item.price} discount={item.discount} />
        </div>
        
        <Button 
          variant="primary" 
          size="small" 
          fullWidth 
          onClick={() => onAddToCart(item)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default MediaCard;
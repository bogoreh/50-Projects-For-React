import './PriceTag.css';

const PriceTag = ({ price, discount }) => {
  const finalPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <div className="price-tag">
      {discount && (
        <span className="price-tag__original">${price.toFixed(2)}</span>
      )}
      <span className="price-tag__final">${finalPrice.toFixed(2)}</span>
      {discount && (
        <span className="price-tag__discount">-{discount}%</span>
      )}
    </div>
  );
};

export default PriceTag;
import './styles/globals.css';
import Layout from './components/layout/Layout/Layout';
import MediaGrid from './components/media/MediaGrid/MediaGrid';
import MediaCard from './components/media/MediaCard/MediaCard';

// Mock data
const mockProducts = [
  {
    id: 1,
    title: "The Dark Side of the Moon",
    description: "Classic Pink Floyd album",
    price: 19.99,
    discount: 10,
    category: "music",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400"
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    description: "Open-world RPG game",
    price: 59.99,
    discount: 20,
    category: "games",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400"
  },
  {
    id: 3,
    title: "Inception",
    description: "Mind-bending thriller movie",
    price: 14.99,
    category: "movies",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1489599809505-f2d4c3f17743?w=400"
  },
  {
    id: 4,
    title: "Thriller - Michael Jackson",
    description: "Best-selling album of all time",
    price: 24.99,
    discount: 15,
    category: "music",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400"
  }
];

function App() {
  const handleAddToCart = (item) => {
    console.log('Added to cart:', item);
    // Add your cart logic here
  };

  return (
    <Layout>
      <div className="container">
        <section style={{ padding: '4rem 0 2rem' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            Welcome to MediaStore
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'white', 
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            Discover the best in music, video games, and movies. All in one place.
          </p>
        </section>

        <MediaGrid>
          {mockProducts.map(product => (
            <MediaCard 
              key={product.id} 
              item={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </MediaGrid>
      </div>
    </Layout>
  );
}

export default App;
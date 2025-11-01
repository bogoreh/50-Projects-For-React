import { useWebmentions } from '../hooks/useWebmentions';
import WebmentionList from './WebmentionList';

function Webmentions({ url }) {
  const { webmentions, loading, error } = useWebmentions(url);

  return (
    <section className="webmentions-section">
      <h2>Webmentions</h2>
      
      {loading && <p>Loading webmentions...</p>}
      
      {error && (
        <div className="error">
          Error loading webmentions: {error}
        </div>
      )}
      
      {!loading && !error && (
        <WebmentionList webmentions={webmentions} />
      )}
    </section>
  );
}

export default Webmentions;
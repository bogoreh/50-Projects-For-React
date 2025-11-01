import { useState, useEffect } from 'react';

export function useWebmentions(url) {
  const [webmentions, setWebmentions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchWebmentions = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Using webmention.io API
        const response = await fetch(
          `https://webmention.io/api/mentions.jf2?target=${encodeURIComponent(url)}`
        );
        
        if (!response.ok) throw new Error('Failed to fetch webmentions');
        
        const data = await response.json();
        setWebmentions(data.children || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWebmentions();
  }, [url]);

  return { webmentions, loading, error };
}
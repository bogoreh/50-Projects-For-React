import { useState, useEffect } from 'react';

const BASE_URL = 'https://the-one-api.dev/v2';
const API_KEY = '0MH4lSbB21F3raudL2IP'; // You'll need to get this from https://the-one-api.dev/

export const useLotrMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`${BASE_URL}/movie`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch movies: ${response.status}`);
        }

        const data = await response.json();
        setMovies(data.docs || []);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching movies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};
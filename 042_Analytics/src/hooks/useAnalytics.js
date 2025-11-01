import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

export const useAnalytics = () => {
  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.pathname);
    
    // Track subsequent page views
    const handleRouteChange = () => {
      trackPageView(window.location.pathname);
    };

    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
};
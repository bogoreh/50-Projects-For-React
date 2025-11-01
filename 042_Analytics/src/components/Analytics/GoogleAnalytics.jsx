import { useEffect } from 'react';
import { initGA } from '../../utils/analytics';

const GoogleAnalytics = () => {
  useEffect(() => {
    initGA();
  }, []);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;
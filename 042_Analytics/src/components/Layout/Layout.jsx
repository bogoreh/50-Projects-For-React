import React from 'react';
import { useAnalytics } from '../../hooks/useAnalytics';
import GoogleAnalytics from '../Analytics';

const Layout = ({ children }) => {
  useAnalytics();

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <div className="layout">
      <GoogleAnalytics />
      <header>
        <h1>Analytics App</h1>
        <nav>
          <button onClick={() => navigateTo('/')}>Home</button>
          <button onClick={() => navigateTo('/about')}>About</button>
          <button onClick={() => navigateTo('/contact')}>Contact</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
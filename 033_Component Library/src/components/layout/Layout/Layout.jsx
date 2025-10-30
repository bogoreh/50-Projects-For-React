import './Layout.css';
import Header from '../../common/Header/Header';
import Footer from '../../common/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
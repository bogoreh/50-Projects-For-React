import Webmentions from './components/Webmentions';
import './App.css';

function App() {
  // Replace with your actual URL
  const currentPageUrl = 'https://yourdomain.com/your-page';

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App with Webmentions</h1>
      </header>
      
      <main>
        <p>This is a simple React app with Webmentions integration.</p>
        
        {/* Webmentions component */}
        <Webmentions url={currentPageUrl} />
      </main>
    </div>
  );
}

export default App;
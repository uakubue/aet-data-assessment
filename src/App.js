import './App.css';
import Albums from './components/albums/Albums';
import Artists from './components/artists/Artists';
import Tweets from './components/tweets/Tweets';

function App() {
  return (
    <div className="app">
      <Tweets />
      <Artists />
      <Albums />
      
    </div>
  );
}

export default App;
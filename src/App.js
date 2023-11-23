import './App.css';
import Albums from './components/albums/Albums';
import Artists from './components/artists/Artists';

function App() {
  return (
    <div className="app">
      <Artists />
      <Albums />
    </div>
  );
}

export default App;

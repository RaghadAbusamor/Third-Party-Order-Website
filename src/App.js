  import './App.css';
import HomePage from './pages/home/home';
import Header from './component/core/header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='home'>
      <HomePage />
      </div>
    </div>
  );
}

export default App;

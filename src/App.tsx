// import logo from './logo.svg';
import './App.css';
import { SearchMentor } from './components/SearchMentor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Meet your mentor
        </p>
        <SearchMentor/>
      </header>
    </div>
  );
}

export default App;

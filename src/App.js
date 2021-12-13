import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header></Header>
        <Profile></Profile>
      </div>
    </Router>
  );
}

export default App;

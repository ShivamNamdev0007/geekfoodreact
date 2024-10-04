import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import HomePage from './Home/Home';
import Quote from './Quote/Quote';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
     
    </Router>
  );
}

export default App;
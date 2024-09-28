import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Home from './pages/Home';
import TechStack from './pages/TechStack';

const App = () => {
  return (
    <Router>
      <div className="content">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/technologies" element={<TechStack />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

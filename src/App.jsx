import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AlphabetGrid from './pages/AlphabetGrid';
import LetterDetails from './pages/LetterDetails';
// We will create AlphabetGrid next, reusing it for both English and Hindi

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/english" element={<AlphabetGrid type="english" />} />
          <Route path="/hindi" element={<AlphabetGrid type="hindi" />} />
          <Route path="/:type/:id" element={<LetterDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

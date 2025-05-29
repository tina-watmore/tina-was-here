import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';

function App() {

  return (
    <div className="page-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

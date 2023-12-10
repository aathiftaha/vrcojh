import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import BmiPage from './pages/BmiPage';
import Navbar from './components/Navbar';
import './App.css';

export default function AppRouter() {
  return (
    <div className='app-container'>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi-calculator" element={<BmiPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}
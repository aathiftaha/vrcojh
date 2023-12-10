import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import BmiPage from './pages/BmiPage';
import Navbar from './components/Navbar';

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi-calculator" element={<BmiPage />} />
      </Routes>
    </BrowserRouter>
  )
}
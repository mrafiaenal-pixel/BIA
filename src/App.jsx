import './app.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Login from './pages/auth/login';
import Home from './pages/Home';
import Register from './pages/auth/Register';
import Dashboard from './pages/users/dashboard.jsx';
import FindPhisik from './pages/users/findPhisik.jsx';

function AppContent() {
  const location = useLocation();

  // route yang TIDAK pakai navbar
  const hideNavbar = ['/login', '/dashboard' , '/find-physic'];

  return (
    <>
      {!hideNavbar.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/find-physic" element={<FindPhisik />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
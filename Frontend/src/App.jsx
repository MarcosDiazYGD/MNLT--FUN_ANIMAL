import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import Signin from './pages/Signin';
import Pets from './pages/Pets';
import Vaccines from './pages/Vaccines';
import InvalidRoute from './pages/InvalidRoute';
import Layout from './components/Layout';
import ProtectedRoutes from './components/ProtectedRoutes';
import './App.css'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signin />} />
        <Route element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/vaccines" element={<Vaccines />} />
            <Route path="*" element={<InvalidRoute />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
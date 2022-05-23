import { Login } from '@mui/icons-material';
import './App.css';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      { user ? <LoginPage /> : <h1>hi</h1> }
    </div>
  );
}

export default App;

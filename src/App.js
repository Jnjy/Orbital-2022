import './App.css';
import { useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      { user ? <LoginPage /> : <LoginPage /> }
    </div>
  );
}

export default App;

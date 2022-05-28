import "./App.css";
import { useAuth } from "./hooks/useAuth";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPasswordPage from "./pages/resetPassword/ResetPasswordPage";
import CommunityPage from "./pages/community/CommunityPage";

function App() {
  const { user } = useAuth();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={false ? <LoginPage /> : <SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

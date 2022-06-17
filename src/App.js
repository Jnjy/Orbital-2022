import "./App.css";
import { useAuth } from "./hooks/useAuth";

import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signup";
import { Route, Routes } from "react-router-dom";
import ResetPasswordPage from "./pages/resetPassword/ResetPasswordPage";
import CommunityPage from "./pages/community/CommunityPage";
import UserProfile from "./pages/profile/UserProfile";
import StorePage from "./pages/store/StorePage";

function App() {
  const { user } = useAuth();

  // rabak way need to change
  return (
    <div className="App">
      <Routes>
        <Route index element={user ? <CommunityPage /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </div>
  );
}

export default App;

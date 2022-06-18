import "./App.css";
import RoutePaths from "./components/Router/Routes";

function App() {
  
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
        <RoutePaths />
    </div>
  );
}

export default App;

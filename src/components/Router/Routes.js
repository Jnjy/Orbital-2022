import React from 'react'
import LoginPage from "../../pages/login/LoginPage";
import SignUpPage from "../../pages/signup";
import { Route, Routes } from "react-router-dom";
import ResetPasswordPage from "../../pages/resetPassword/ResetPasswordPage";
import CommunityPage from "../../pages/community/CommunityPage";
import UserProfile from "../../pages/profile/UserProfile";
import StorePage from "../../pages/store/StorePage";
import LandingPage from "../../pages/landing/LandingPage";
import { useAuth } from "../../hooks/useAuth";

function RoutePaths() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route index element={<LandingPage/>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/store" element={<StorePage />} />
        </Routes> 
    )
}

export default RoutePaths
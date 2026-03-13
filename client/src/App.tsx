import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Generate from "./pages/Generate";
import MyGeneration from "./pages/MyGeneration";
import YtPreview from "./pages/YtPreview";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Toaster />
      <LenisScroll />
      <Navbar />
      <Routes>
        {/* ✅ Public route */}
        <Route path="/login" element={<Login />} />

        {/* ✅ All protected routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } />
        <Route path="/generate" element={
          <ProtectedRoute>
            <Generate />
          </ProtectedRoute>
        } />
        <Route path="/generate/:id" element={
          <ProtectedRoute>
            <Generate />
          </ProtectedRoute>
        } />
        <Route path="/my-generation" element={
          <ProtectedRoute>
            <MyGeneration />
          </ProtectedRoute>
        } />
        <Route path="/preview" element={
          <ProtectedRoute>
            <YtPreview />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </>
  );
}
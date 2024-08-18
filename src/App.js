import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import AboutUs from "./AboutUs";
import RequireAuth from "./RequireAuth";
import useAuth from "./useAuth";
import AuthProvider from "./AuthProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route element={<RequireAuth />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

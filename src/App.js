import "./App.css";
import React, { useState } from "react";
import UseState from "./UseState";
import UseRef from "./UseRef";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const UseEffect = React.lazy(() => import("./UseEffect"));
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UseState />} />
          <Route path="/useeffect" element={<UseEffect />} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/useref" element={<UseRef />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

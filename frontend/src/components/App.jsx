import "../css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";

import About from "./About/About";
import Contact from "./Contact/Contact";
import HomePage from "./HomePage/HomePage";
import Login from "./Login_/Login";
import Register from "./Register/Register";
import { Box } from "./createSet/createSet";
import HomeLoggedIn from "./homeLoggedIn/HomeLoggedIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Box />} />
            <Route path="/home" element={<HomeLoggedIn />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

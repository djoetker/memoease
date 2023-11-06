import "../css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";
import Container from "./HomePage/Container";
import { Register } from "./RegisterPage/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

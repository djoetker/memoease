import "../css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layout/Navigation";
import Container from "./HomePage/Container";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

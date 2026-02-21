import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";


// https://joydip007x.github.io/
const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-[#FFFCF7]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

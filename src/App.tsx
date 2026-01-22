import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;

import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer";
import Navigation from "./components/Shared/Navigation";
import Slider from "./components/Shared/Slider";

function App() {
  return (
    <div>
      <Navigation />;
      <Slider />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

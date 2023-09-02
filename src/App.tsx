import "./App.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Properties } from "./components/Properties";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Reviews />
        <Properties />
        <Footer />
      </div>
    </>
  );
}

export default App;

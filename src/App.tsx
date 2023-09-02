import "./App.css";
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
      </div>
    </>
  );
}

export default App;

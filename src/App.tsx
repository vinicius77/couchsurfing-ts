import "./App.css";
import { Navbar } from "./components/Navbar";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Reviews />
      </div>
    </>
  );
}

export default App;

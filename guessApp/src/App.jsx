import "./App.css";
// Import custom components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Game from './components/Game';

function App() {
  return (
    <main>
      <Header branding={"My App"} />
      <Game />
      <Footer />
    </main>
  );
}

export default App

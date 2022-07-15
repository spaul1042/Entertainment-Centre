import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  //Link,
} from "react-router-dom";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import LightsOut from './LightsGame/LightApp';
import DiceRoll from './DiceRoll/DiceApp';
import PokeApp from './PokeGame/PokeApp';
import ColorApp from './colorGenerator/colorApp';
import BoxApp from './boxApp/BoxApp';
import TodoApp from './todoApp/TodoApp';

function App() {
  return (
    <BrowserRouter>
      <Navbar title="ALL-IN-ONE FUNCENTRE" />
      
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="lightsOutGame" element={<LightsOut />} />
        <Route path="diceRoll" element={<DiceRoll />} />
        <Route path="pokeDox" element={<PokeApp />} />
        <Route path="colorGenerator" element={<ColorApp />} />
        <Route path="todoApp" element={<TodoApp />} />
        <Route path="yourBox" element={<BoxApp />} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

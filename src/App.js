import './App.css'
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Carrousel } from './components/Carrousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    < NavBar />
    < Banner />
    < Carrousel />
    </div>
  );
}

export default App;

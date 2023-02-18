import './App.css'
import { NavBar } from "./components/NavBar";
import { Banner } from './components/Banner';
import { Carrousel } from './components/Carrousel';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    < NavBar />
    < Banner />
    < Carrousel />
    < Products/>
    <Footer/>
    </div>
  );
}

export default App;

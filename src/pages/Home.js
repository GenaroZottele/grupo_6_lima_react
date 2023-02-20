import { NavBar } from "../components/NavBar";
import { Banner } from '../components/Banner';
import { Carrousel } from '../components/Carrousel';
import { Products } from '../components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <>
        < NavBar />
        < Banner />
        < Carrousel />
        < Products/>
    </>


  );
}

export default Home;
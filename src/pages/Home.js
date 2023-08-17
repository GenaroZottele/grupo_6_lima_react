import { NavBar } from "../components/NavBar";
import { Banner } from '../components/Banner';
import { Carrousel } from '../components/Carrousel';
import { Products } from '../components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect , useState } from 'react';

function Home() {
  	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

	const [productsAll, setProductsAll] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3007/products')
        .then((response) => response.json())
        .then((data) => setProductsAll(data));
    }, []);

  return (
    <>
        < NavBar allProducts={allProducts}
				productsAll={productsAll}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts} />
        < Banner />
        < Carrousel />
        < Products allProducts={allProducts}
				productsAll={productsAll}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}/>
				
    </>


  );
}

export default Home;
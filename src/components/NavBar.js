import { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../assets/img/logo-lima.png';
import { Routes, Route, Link } from 'react-router-dom';
import { Login } from '../pages/Login';
import navIcon1 from '../assets/img/shopping-cart.png';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import './NavBar.css';

export const NavBar = ({
	allProducts,
	setAllProducts,
	total,
	countProducts,
	setCountProducts,
	setTotal,
}, Login) => {
   const [activeLink, setActiveLink] = useState('home');
   const [scrolled, seScrolled] = useState(false);
   useEffect(() => {
      const onScroll = () => {
         if (window.scrollY > 50) {
            seScrolled(true);
         } else {
            seScrolled(false);
         }
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   };

   const [active, setActive] = useState(false);

	const onDeleteProduct = product => {
		const results = allProducts.filter(
			item => item.id !== product.id
		);

		setTotal(total - product.price * product.amount);
		setCountProducts(countProducts - product.amount);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCountProducts(0);
	};

   return (
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
         <Container>
            <Navbar.Brand href="/">
               <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon" />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link
                     href="#home"
                     className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('home')}
                  >
                     Ensaladas
                  </Nav.Link>
                  <Nav.Link
                     href="#skills"
                     className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('skills')}
                  >
                     Nosotros
                  </Nav.Link>
                  <Nav.Link
                     href="../pages/Login.js"
                     className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                     onClick={() => onUpdateActiveLink('projects')}
                  >
                     Contacto
                  </Nav.Link>
               </Nav>
               <span className="navbar-text">
                  <Link to="/Login">
                     <button className="vvd">
                        <span>Iniciar Sesion</span>
                     </button>
                  </Link>
                  <div className="social-icon">
                  <div className='container-icon'>
				<div
					className='container-cart-icon'
					onClick={() => setActive(!active)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='social-icon-svg'
						width='30px'
						
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
						/>
					</svg>
					<div className='count-products'>
						<span id='contador-productos'>{countProducts}</span>
					</div>
				</div>

				<div
					className={`container-cart-products ${
						active ? '' : 'hidden-cart'
					}`}
				>
					{allProducts.length ? (
						<>
							<div className='row-product'>
								{allProducts.map(product => (
									<div className='cart-product' key={product.id}>
										<div className='info-cart-product'>
											<span className='cantidad-producto-carrito'>
												{product.amount}
											</span>
											<p className='titulo-producto-carrito'>
												{product.name}
											</p>
											<span className='precio-producto-carrito'>
												${product.price}
											</span>
										</div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											strokeWidth='1.5'
											stroke='currentColor'
											className='icon-close'
											onClick={() => onDeleteProduct(product)}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
								))}
							</div>

							<div className='cart-total'>
								<h3>Total:</h3>
								<span className='total-pagar'>${total}</span>
							</div>

							<button className='btn-clear-all' onClick={onCleanCart}>
								Vaciar Carrito
							</button>
						</>
					) : (
						<p className='cart-empty'>El carrito está vacío</p>
					)}
				</div>
			</div>
                     <a>
                        <img src={navIcon2} alt="" />
                     </a>
                     <a href="#">
                        <img src={navIcon3} alt="" />
                     </a>
                  </div>
               </span>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

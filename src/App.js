import React from 'react';
import Slideshow from './componentes/Slideshow';

import './css/estilos.css';
import Menu from './componentes/menu/Menu';


const App = () => {
	return (
		<>
		<div className= 'grid_container'>
		<header>
			<Menu/>
		</header>
		<nav>
			<h1>
		 Sidebar
				
			</h1>
		</nav>
		<main>
			<h1>Productos Destacados</h1>
			<Slideshow />
			
		</main>
		<div className= 'nav_der'>
			Nav derecha
		</div>
		<footer>
			footer
		</footer>
		</div>
		</>
	);
};

export default App;

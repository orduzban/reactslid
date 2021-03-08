import React from 'react';
import { Fragment } from 'react';
import img1 from './../img/1.jpg';
import img2 from './../img/2.jpg';
import img3 from './../img/3.jpg';
import img4 from './../img/4.jpg';
import { ReactComponent as Flderecha } from './../img/flechaDerecha.svg';
import { ReactComponent as FlIzq } from './../img/iconmonstr-angel-left-thin.svg';

const Slideshow = () => {
	return (
		<Fragment>
			<div>
				<a href="/">
					<img src={img1} alt="" />
				</a>
			</div>
			<div>
				<button>
					<FlIzq />
				</button>
				<button>
					<Flderecha />
				</button>
			</div>
		</Fragment>
	);
};

export default Slideshow;

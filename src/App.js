import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';
import {Banner} from './Banner/Banner';

const GlobalStyle = createGlobalStyle`
  body {
	  margin: 0;
	font-family: 'Open Sans', sans-serif;
  }

  h1, h2, h3 {
	font-family: 'Righteous', cursive;
  }
`

function App() {
	return (
		<>
		<GlobalStyle  />
		<Navbar />
		<Banner />
		<div>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.	</div> 
		</>
	);
}

export default App;

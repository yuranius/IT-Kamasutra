import React from 'react';
// import './App.css';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.scss';




function App() {
	return (
		<div className='wrapper'>
			<div className='wrapper-container'>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;

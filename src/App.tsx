import React from 'react';
import Header from './components/header/Header';
import ShelvingKits from './components/ShelvingKits/ShelvingKits';
import './css/App.css';

function App() {
	return (
		<div className="App">

			<div className="container">

				<header className="header">
					<Header/>
				</header>
				<main className="main-content">
					<ShelvingKits/>
				</main>

			</div>

		</div>
	);
}

export default App;

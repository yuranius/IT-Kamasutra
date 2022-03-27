
import "./App.css";
import Footer from "./components/Footer";

import Header from "./components/Header";
import Main from "./components/Main";




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

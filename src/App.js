import React, { useState } from "react";
import './App.css';
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/AboutMe"
import Portfolio from "./components/pages/Portfolio"
import Contact from "./components/pages/Contact"
import CV from "./components/pages/CV"

function App() {
	const [currentPage, setCurrentPage] = useState('AboutMe');

	const renderPage = () => {

		switch (currentPage) {
			case 'Portfolio':
				return <Portfolio />;
				break;
			case 'Contact':
				return <Contact />;
				break;
			case 'CV':
				return <CV />;
				break;
			default:
				return <AboutMe />;
				break;
		};
	};
  
	const handlePageChange = (page) => setCurrentPage(page);


	return (
		<Container>
			<Header currentPage={currentPage} handlePageChange={handlePageChange}/>
			{renderPage()}
			<Footer />
		</Container>
	);
}

export default App;

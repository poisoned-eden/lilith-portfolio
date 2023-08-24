import React, { useState } from "react";
import './App.css';
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import CV from "./pages/CV"

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
			<main>
				{renderPage()}
			</main>
			<Footer />
		</Container>
	);
}

export default App;

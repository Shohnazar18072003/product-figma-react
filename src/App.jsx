import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Feedback from "./components/feedback/Feedback";
import Client_strategy from "./components/content_strategy/Content";
import Price_table from "./components/price_table/Price_table";
import Footer from "./components/footer/Footer"



function App() {
	return (
		<div>
			<Header/>
			<Hero/>
			<About/>
			<Client_strategy/>
			<Price_table/>
			<Feedback/>
			<Footer/>
		</div>
	);
}

export default App;





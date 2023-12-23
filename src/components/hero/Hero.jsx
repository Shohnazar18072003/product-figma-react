import React from "react";
import "./Hero.css";

function Hero() {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero-content">
					<div className="hero-left">
						<h1>Work at the speed of thought</h1>
						<p>
							Tools, tutorials, design and innovation experts, all in one place!
							The most intuitive way to imagine your next user experience.
						</p>
						<div className="watch">
							<button className="btn-3">Get started</button>
							<a  href="">
								<img src="player.svg" alt="" />
								<span>Watch the Video</span>
							</a>
						</div>
					</div>
					<div className="hero-right">
						<img src="hero-pic.png" alt="" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;

import React from "react";
import "./About.css";

function About() {
	return (

    // About section

		<section className="about">
			<div className="container">
				<div className="about-content">
					<h1>Product was Built Specifically for You</h1>
          <div className="icons">
            <div className="i-card">
              <img src="icon-1.png" alt="This is icon image" />
              <h6>First click tests</h6>
              <p>While most people enjoy casino gambling,</p>
            </div>

            <div className="i-card">
              <img src="icon-2.png" alt="This is icon image" />
              <h6>Design surveys</h6>
              <p>Sports betting, lottery and bingo playing for the fun</p>
            </div>

            <div className="i-card">
              <img src="icon-3.png" alt="This is icon image" />
              <h6>Preference tests</h6>
              <p>The Myspace page defines the individual.</p>
            </div>

            <div className="i-card">
              <img src="icon-4.png" alt="This is icon image" />
              <h6>Five second tests</h6>
              <p>Personal choices and the overall personality of the person. </p>
            </div>
          </div>

          <button className="btn-4">SIGN UP NOW</button>
				</div>
			</div>
		</section>
	);
}

export default About;

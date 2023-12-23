import React from "react";
import "./Content.css";
 
function Content() {
	return (
		<section className="content_strategy">
			<div className="container">
				<div className="content_strategy_content">
					<h1>Contents Strategies</h1>
					<p className="content-text">
						We focus on ergonomics and meeting you where you work. It's only a
						keystroke away.
					</p>
					<div className="s-cards">
						<a href="" className="card-hover" >
							<div className="s-card">
								<img src="content-1.png" alt="" />
								<div className="s-card-paragraph">
									<p>
										By <span>Wahid Ari</span> | 03 March 2019
									</p>
									<h6>Increasing Prosperity With Positive Thinking</h6>
								</div>
							</div>
						</a>

						<a href="" className="card-hover">
							<div className="s-card">
								<img src="content-2.png" alt="" />
								<div className="s-card-paragraph">
									<p>
										By <span>Wahid Ari</span> | 03 March 2019
									</p>
									<h6>Motivation Is The First Step To Success</h6>
								</div>
							</div>
						</a>

						<a href="" className="card-hover">
							<div className="s-card">
								<img src="content-3.png" alt="" />
								<div className="s-card-paragraph">
									<p>
										By <span>Wahid Ari</span> | 03 March 2019
									</p>
									<h6>Success Steps For Your Personal Or Business</h6>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Content;

import React from "react";
import "./Feedback.css";

function Feedback() {
	return ( 

   // Feedback section

		<section className="clients">
			<div className="container">
				<div className="clients-content">
					<h1>What Clients Say</h1>
					<p className="clients_paragraph">
						Problems trying to resolve the conflict between the two major realms
						of Classical physics: Newtonian mechanics{" "}
					</p>
					<div className="feedback_cards">
						<div className="f-card">
							<img src="five-stars.svg" alt="This is five stars image" />
							<p>
								Product helps you see how many more days you need to work to
								reach your financial goal.
							</p>
							<div className="profile">
								<img src="client-1.png" width={50} height={50} alt="This is client image" />
								<div>
									<span>Wahid Ari</span>
									<p>Designer</p>
								</div>
							</div>
						</div>

            <div className="f-card">
							<img src="five-stars.svg" alt="This is five stars image" />
							<p>
								Product helps you see how many more days you need to work to
								reach your financial goal.
							</p>
							<div className="profile">
								<img src="client-2.png" width={50} height={50} alt="This is client image" />
								<div>
									<span>Wahid Ari</span>
									<p>Designer</p>
								</div>
							</div>
						</div>

            <div className="f-card">
							<img src="five-stars.svg" alt="This is five stars image" />
							<p>
								Product helps you see how many more days you need to work to
								reach your financial goal.
							</p>
							<div className="profile">
								<img src="client-3.png" width={50} height={50} alt="This is five stars image" />
								<div>
									<span>Wahid Ari</span>
									<p>Designer</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Feedback;

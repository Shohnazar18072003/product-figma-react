import React from "react";
import "./Price_table.css";

function Price_table() {
  return (
    <section className="price">
      <div className="container">
        <div className="price-content">
          <h2>Price Table</h2>
          <p className="price-paragpraph">We offer competitive price</p>

          <div className="status">
            <div className="status-card">
              <h4>Free</h4>
              <p>Brief price description</p>
              <div className="number">
                <h1>0</h1>
                <div>
                  <h6>$</h6>
                  <p>Per / month</p>
                </div>
              </div>
              <p>Only 2 Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>

              <button>Order Now</button>
            </div>

            <div className="status-card">
              <h4>Standard</h4>
              <p>Brief price description</p>
              <div className="number">
                <h1>5</h1>
                <div>
                  <h6>$</h6>
                  <p>Per / month</p>
                </div>
              </div>
              <p>5+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>

              <button>Order Now</button>
            </div>

            <div className="status-card">
              <h4>Premium</h4>
              <p>Brief price description</p>
              <div className="number">
                <h1>10</h1>
                <div>
                  <h6>$</h6>
                  <p>Per / month</p>
                </div>
              </div>
              <p>10+ Operators</p>
              <p>Notifications</p>
              <p>Landing Pages</p>

              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Price_table;

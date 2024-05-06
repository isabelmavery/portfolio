import { useState } from "react";
import "./CoffeeShop.css";
import Americano from "./americano";
import Star from "./star";
export default function CoffeeShop() {
  const [orders, setOrders] = useState([]);

  return (
    <div className="coffee-shop-container">
      <div className="coffee-shop-walls">
        <div className="upcoming-orders">
          <div className="orders-container">
            <Americano />
            <Americano />
            <Americano />
            <Americano />
          </div>
          <div className="counter"></div>
        </div>
        <div className="bottom">
          <div className="coffee-shop-board">
            <div className="current-balance">
              <span>Your </span>
              <span>Balance</span>
              <Star>{20}</Star>
            </div>
            <button>What would you like?</button>
          </div>
          <div className="current-order">
            <Americano />
          </div>
        </div>
      </div>
    </div>
  );
}

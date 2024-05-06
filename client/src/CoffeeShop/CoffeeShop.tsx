import { useState } from "react";
import "./CoffeeShop.css";
import Americano from "./americano";
import Star from "./star";

/**
Notion Planning doc and Figma here if you are curious! Side project since I spend so much time in coffee shops :) 
https://quiet-fireman-c5b.notion.site/Practice-Design-Virtual-Coffee-Shop-b8a55929ef89459895d32a5004ca5ff2?pvs=4
 */
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

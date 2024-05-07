import { useState } from "react";
import "./CoffeeShop.css";
import Americano from "./americano";
import Star from "./star";

/**
Notion Planning doc and Figma here if you are curious! Side project since I spend so much time in coffee shops :) 
https://quiet-fireman-c5b.notion.site/Practice-Design-Virtual-Coffee-Shop-b8a55929ef89459895d32a5004ca5ff2?pvs=4
 */

enum OrderType {
  Americano = "Americano",
  Tea = "Tea",
  Cortado = "Cortado",
}

const OrderPrice = {
  [OrderType.Americano]: 3,
  [OrderType.Tea]: 3,
  [OrderType.Cortado]: 4,
};

enum OrderStatus {
  BeingMade = "BeingMade",
  Delivered = "Delivered",
  Finished = "Finished",
}

type Order = {
  id: string;
  type: OrderType;
  createdAt: Date;
  userId: string;
  status: OrderStatus;
  payment: number;
};
export default function CoffeeShop() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  async function createOrder(orderType: OrderType) {
    // Add Order to History
    try {
      const orderId = crypto.randomUUID();
      const newOrder = {
        id: orderId,
        type: orderType,
        createdAt: new Date(),
        userId: "userId_TO_DO",
        status: OrderStatus.BeingMade,
        payment: OrderPrice[orderType],
      };

      setOrders((prevOrders) => [...prevOrders, newOrder]);
      alert(`Woo, one ${orderType} added to the queue!`);
      toggleMenu();
      // reduce balance
    } catch (error) {
      toggleMenu();
    }
  }

  return (
    <>
      <div
        className="primary-content justify-center"
        style={{ padding: 10, fontStyle: "italic" }}
      >
        Work in progress...
      </div>
      <div className="coffee-shop-container">
        <div className="coffee-shop-walls">
          <div className="counter-container">
            <div className="upcoming-orders">
              {/* only ever show the upcoming 5 */}
              {orders
                .slice(0, 5)
                .reverse()
                .map((order, i) => (
                  <Americano />
                ))}
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

              <button onClick={toggleMenu}>What would you like?</button>
              {menuOpen && (
                <div className="menu">
                  <button onClick={() => createOrder(OrderType.Cortado)}>
                    <span>{OrderType.Cortado}</span>{" "}
                    <span>{OrderPrice[OrderType.Cortado]}</span>
                  </button>
                  <button onClick={() => createOrder(OrderType.Americano)}>
                    <span>{OrderType.Americano}</span>{" "}
                    <span>{OrderPrice[OrderType.Americano]}</span>
                  </button>
                  <button onClick={() => createOrder(OrderType.Tea)}>
                    <span>{OrderType.Tea}</span>{" "}
                    <span>{OrderPrice[OrderType.Tea]}</span>
                  </button>
                </div>
              )}
            </div>
            <div className="current-order">
              <Americano />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

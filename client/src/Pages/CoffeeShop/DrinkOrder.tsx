import { OrderType } from "./CoffeeShop";
import Cortado from "./Drinks/Cortado";
import Tea from "./Drinks/Tea";
import Americano from "./Drinks/Americano";
import EmptyDrink from "./Drinks/EmptyDrink";
import EmptyPlate from "./Drinks/EmptyPlate";
import "./DrinkOrder.css";

export default function DrinkOrder(props: {
  orderType: OrderType;
  onClick: () => void;
}) {
  const { orderType, onClick } = props;

  function renderDrink() {
    switch (orderType) {
      case OrderType.Tea:
        return <Tea />;
      case OrderType.Cortado:
        return <Cortado />;
      case OrderType.Americano:
        return <Americano />;
      case OrderType.EmptyDrink:
        return <EmptyDrink />;
      case OrderType.EmptyPlate:
      default:
        return <EmptyPlate />;
    }
  }

  return (
    <div className="drink-order" onClick={onClick}>
      {renderDrink()}
    </div>
  );
}

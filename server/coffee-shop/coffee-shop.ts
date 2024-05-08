// Note, not used yet, going to create a coffee shop UI

// notion https://quiet-fireman-c5b.notion.site/Practice-Design-Virtual-Coffee-Shop-b8a55929ef89459895d32a5004ca5ff2

enum OrderType {
  Latte = "Latte",
  Tea = "Tea",
  Cortado = "Cortado",
}

const OrderPrice = {
  [OrderType.Latte]: 5,
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

type User = {
  id: string;
  name?: string;
  bankBalance: number;
};

type CoffeeShop = {
  users: User[];
  orders: Order[];
  createNewUser: (this: CoffeeShop, name?: string) => string;
  createNewOrder: (
    this: CoffeeShop,
    userId: string,
    orderType: OrderType
  ) => string;
  addToUserBalance: (this: CoffeeShop, userId: string, total: number) => void;
  updateOrderStatus: (
    this: CoffeeShop,
    orderId: string,
    newStatus: OrderStatus
  ) => void;
};

function createNewUser(this: CoffeeShop, name?: string) {
  const uid = crypto.randomUUID();
  this.users.push({
    id: uid,
    bankBalance: 20,
    name,
  });
  return uid;
}

function createNewOrder(
  this: CoffeeShop,
  userId: string,
  orderType: OrderType
) {
  // Check if user exists
  const user = this.users.find((user: User) => user.id === userId);
  if (!user) {
    throw new Error("User not found");
  }
  if (user.bankBalance < OrderPrice[orderType]) {
    throw new Error(
      `${
        user.name ? `${user.name}` : `User`
      } does not have enough in their balance for this order :(`
    );
  }
  // Charge User
  this.users = this.users.map((user: User) => {
    if (user.id === userId) {
      return {
        ...user,
        bankBalance: user.bankBalance - OrderPrice[orderType],
      };
    }
    return user;
  });
  // Add Order to History
  const orderId = crypto.randomUUID();
  this.orders.push({
    id: orderId,
    type: orderType,
    createdAt: new Date(),
    userId: userId,
    status: OrderStatus.BeingMade,
    payment: OrderPrice[orderType],
  });
  return orderId;
}

function addToUserBalance(this: CoffeeShop, userId: string, total: number) {
  this.users = this.users.map((user) => {
    if (user.id === userId) {
      return {
        ...user,
        bankBalance: user.bankBalance + total,
      };
    }
    return user;
  });
}

function updateOrderStatus(
  this: CoffeeShop,
  orderId: string,
  newStatus: OrderStatus
) {
  this.orders = this.orders.map((order) => {
    if (order.id === orderId) {
      if (order.status === OrderStatus.Finished) {
        throw new Error("Order is already complete, cannot change");
      }
      return {
        ...order,
        status: newStatus,
      };
    }
    return order;
  });
}

function initCoffeeShop(): CoffeeShop {
  return {
    users: [],
    orders: [],
    createNewUser,
    createNewOrder,
    updateOrderStatus,
    addToUserBalance,
  };
}

// const coffeeShop = initCoffeeShop();
// console.log("coffeeShop.users", coffeeShop.users);
// console.log("coffeeShop.orders", coffeeShop.orders);

// const uid1 = coffeeShop.createNewUser("Isabel");
// console.log("uid", uid1);
// const uid2 = coffeeShop.createNewUser();
// console.log("coffeeShop.users after create", coffeeShop.users);

// const order1 = coffeeShop.createNewOrder(uid1, OrderType.Cortado);

// console.log("coffeeShop.users after first order", coffeeShop.users);
// console.log("coffeeShop.orders after first order", coffeeShop.orders);

// coffeeShop.updateOrderStatus(order1, OrderStatus.Delivered);
// coffeeShop.addToUserBalance(uid2, 2);

// console.log("coffeeShop.users post updates-", coffeeShop.users);
// console.log("coffeeShop.orders post updates-", coffeeShop.orders);

// const order2 = coffeeShop.createNewOrder(uid1, OrderType.Latte);
// const order3 = coffeeShop.createNewOrder(uid1, OrderType.Tea);
// const order4 = coffeeShop.createNewOrder(uid2, OrderType.Tea);
// const order5 = coffeeShop.createNewOrder(uid1, OrderType.Latte);

// console.log("coffeeShop.users after next orders", coffeeShop.users);
// console.log("coffeeShop.orders after next orders", coffeeShop.orders);

// const order6 = coffeeShop.createNewOrder(uid1, OrderType.Latte);
// console.log("coffeeShop.orders after overcharge", coffeeShop.orders);

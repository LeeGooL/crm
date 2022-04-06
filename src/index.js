import Store from "./core/Store.js";
import OrdersTable from "./core/OrdersTable.js";
import Paginator from "./core/Paginator.js";

const store = new Store();
store.download();

const ot = new OrdersTable(
  document.querySelector('[data-mount="ordersTable"]'),
  store.orders.slice(0, 5)
);

ot.on("edit", (orderId) => console.log({ orderId }));

const paginator = new Paginator(
  document.querySelector('[data-mount="pagination"]'),
  10,
  3
);

console.log(paginator);

paginator.on("page", (data) => console.log({ data }));

import EventEmitter from "./EventEmitter.js";

const ordersTableTemplate = document.querySelector('[data-template="table"]');

const orderRowTemplate = document.querySelector('[data-template="row"]');

const priceFormater = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

const dateFormater = new Intl.DateTimeFormat("ru-Ru", {
  hour12: false,
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

class OrdersTable extends EventEmitter {
  $orders = [];
  $root = null;

  constructor(root, orders) {
    super();

    this.$root = root;
    this.$orders = orders;

    this.update();
  }

  update() {
    this.$root.textContent = "";
    const ordersTable = ordersTableTemplate.content.cloneNode(true);
    const tbody = ordersTable.querySelector("tbody");

    for (const order of this.$orders) {
      const { id, user, orderType, price, status, createdAt } = order;
      const { name, surname } = user;

      const orderRow = orderRowTemplate.content.cloneNode(true);

      orderRow.querySelector('[data-field="id"]').textContent = id;

      orderRow.querySelector(
        '[data-field="name"]'
      ).textContent = `${name} ${surname}`;

      orderRow.querySelector('[data-field="order"]').textContent = orderType;

      orderRow.querySelector('[data-field="price"]').textContent =
        priceFormater.format(price);

      orderRow
        .querySelector(`[data-badge="${status}"]`)
        .classList.remove("hidden");

      orderRow.querySelector('[data-field="date"]').textContent =
        dateFormater.format(new Date(createdAt));

      orderRow
        .querySelector("button")
        .addEventListener("click", () => this.emit("edit", id));

      tbody.append(orderRow);
    }

    this.$root.append(ordersTable);
  }
}

export default OrdersTable;

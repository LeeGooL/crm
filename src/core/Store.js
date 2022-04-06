const APPLICATION_KEY = "__crm_app__";

class Store {
  $orders = [];

  constructor() {}

  get orders() {
    return JSON.parse(JSON.stringify(this.$orders));
  }

  upload() {
    localStorage.setItem(APPLICATION_KEY, JSON.stringify(this.$orders));
  }

  download() {
    this.$orders.splice(0);

    const json = localStorage.getItem(APPLICATION_KEY);

    if (json) {
      const result = JSON.parse(json);

      this.$orders.push(...results);
    } else {
      this.reinit();
    }
  }

  reinit() {
    this.$orders.push(
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Тетрадка",
        status: "process",
        time: "2022-03-27T19:17:41.751Z",
        price: 1932,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Сковородка",
        status: "process",
        time: "2022-03-31T17:26:59.920Z",
        price: 4129,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Веревка",
        status: "new",
        time: "2022-03-30T02:16:10.557Z",
        price: 2423,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Шина",
        status: "archived",
        time: "2022-04-02T21:51:33.885Z",
        price: 5957,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Веревка",
        status: "back",
        time: "2022-04-02T01:55:26.895Z",
        price: 719,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Веревка",
        status: "archived",
        time: "2022-04-01T09:33:54.794Z",
        price: 7961,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Сковородка",
        status: "new",
        time: "2022-03-31T11:43:33.244Z",
        price: 5759,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Сковородка",
        status: "new",
        time: "2022-04-03T03:43:16.667Z",
        price: 9774,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Нож",
        status: "new",
        time: "2022-03-30T01:38:13.806Z",
        price: 1391,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Кресло",
        status: "back",
        time: "2022-03-28T04:51:28.545Z",
        price: 8510,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Кресло",
        status: "process",
        time: "2022-03-28T19:38:50.687Z",
        price: 568,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Ручка",
        status: "new",
        time: "2022-03-27T11:16:45.885Z",
        price: 4170,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Мыло",
        status: "process",
        time: "2022-04-03T06:28:58.855Z",
        price: 8397,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Веревка",
        status: "back",
        time: "2022-04-02T20:30:26.987Z",
        price: 3564,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Веревка",
        status: "process",
        time: "2022-03-29T22:02:18.646Z",
        price: 5663,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Мыло",
        status: "back",
        time: "2022-04-01T00:27:25.567Z",
        price: 9590,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Мыло",
        status: "back",
        time: "2022-03-27T20:12:16.750Z",
        price: 8503,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Тетрадка",
        status: "process",
        time: "2022-04-01T11:30:24.566Z",
        price: 5841,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Кресло",
        status: "process",
        time: "2022-03-27T11:49:05.693Z",
        price: 672,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Сковородка",
        status: "process",
        time: "2022-03-30T05:07:55.305Z",
        price: 5980,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Кресло",
        status: "process",
        time: "2022-03-27T12:13:59.765Z",
        price: 7415,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Ноутбук",
        status: "process",
        time: "2022-03-28T08:56:08.877Z",
        price: 3348,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Тетрадка",
        status: "new",
        time: "2022-04-01T09:15:25.513Z",
        price: 3004,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Мыло",
        status: "new",
        time: "2022-04-03T06:48:23.221Z",
        price: 5466,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Нож",
        status: "back",
        time: "2022-04-02T00:50:23.771Z",
        price: 8805,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Шина",
        status: "archived",
        time: "2022-04-01T04:24:25.348Z",
        price: 7797,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Мыло",
        status: "archived",
        time: "2022-03-27T20:38:46.738Z",
        price: 9281,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Нож",
        status: "new",
        time: "2022-03-31T18:46:14.131Z",
        price: 9539,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Сковородка",
        status: "archived",
        time: "2022-04-01T08:56:21.250Z",
        price: 9842,
      },
      {
        user: { name: "Петр", surname: "Соколов" },
        good: "Веревка",
        status: "back",
        time: "2022-03-28T10:50:37.558Z",
        price: 2704,
      }
    );
  }
}

export default Store;

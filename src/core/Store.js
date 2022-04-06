const APPLICATION_KEY = "__crm_app__";

class Store {
  $orders = [];

  get orders() {
    return JSON.parse(JSON.stringify(this.$orders));
  }

  upload() {
    const json = JSON.stringify(this.$orders);

    localStorage.setItem(APPLICATION_KEY, json);
  }

  download() {
    this.$orders.splice(0);

    const json = localStorage.getItem(APPLICATION_KEY);

    if (json) {
      const result = JSON.parse(json);

      this.$orders.push(...result);
    } else {
      this.reinit();
    }
  }

  reinit() {
    this.$orders.splice(0);
    this.$orders.push(
      {
        id: 1,
        user: { name: "Константин", surname: "Лепко" },
        good: "Тетрадка",
        status: "back",
        createdAt: "2022-03-31T21:48:53.791Z",
        price: 8877,
      },
      {
        id: 2,
        user: { name: "Олег", surname: "Вихта" },
        good: "Тетрадка",
        status: "new",
        createdAt: "2022-04-01T23:24:08.670Z",
        price: 5817,
      },
      {
        id: 3,
        user: { name: "Константин", surname: "Мельнев" },
        good: "Сковородка",
        status: "new",
        createdAt: "2022-04-05T19:32:25.652Z",
        price: 6593,
      },
      {
        id: 4,
        user: { name: "Сергей", surname: "Мельнев" },
        good: "Ручка",
        status: "new",
        createdAt: "2022-04-01T18:37:33.081Z",
        price: 4267,
      },
      {
        id: 5,
        user: { name: "Константин", surname: "Мельнев" },
        good: "Ручка",
        status: "new",
        createdAt: "2022-04-01T09:59:46.578Z",
        price: 1531,
      },
      {
        id: 6,
        user: { name: "Виктор", surname: "Раков" },
        good: "Нож",
        status: "back",
        createdAt: "2022-04-02T15:23:32.610Z",
        price: 1162,
      },
      {
        id: 7,
        user: { name: "Константин", surname: "Раков" },
        good: "Веревка",
        status: "process",
        createdAt: "2022-04-02T12:55:51.493Z",
        price: 2180,
      },
      {
        id: 8,
        user: { name: "Василий", surname: "Соколов" },
        good: "Веревка",
        status: "back",
        createdAt: "2022-04-04T02:00:53.542Z",
        price: 5316,
      },
      {
        id: 9,
        user: { name: "Константин", surname: "Лепко" },
        good: "Мыло",
        status: "new",
        createdAt: "2022-04-06T06:59:15.357Z",
        price: 1296,
      },
      {
        id: 10,
        user: { name: "Виктор", surname: "Соколов" },
        good: "Нож",
        status: "new",
        createdAt: "2022-04-01T02:23:19.836Z",
        price: 2558,
      },
      {
        id: 11,
        user: { name: "Константин", surname: "Саван" },
        good: "Кресло",
        status: "archived",
        createdAt: "2022-04-02T08:48:05.064Z",
        price: 4534,
      },
      {
        id: 12,
        user: { name: "Виктор", surname: "Соловьев" },
        good: "Ноутбук",
        status: "back",
        createdAt: "2022-03-31T04:58:03.516Z",
        price: 3981,
      },
      {
        id: 13,
        user: { name: "Виктор", surname: "Мельнев" },
        good: "Тетрадка",
        status: "new",
        createdAt: "2022-04-01T03:08:08.118Z",
        price: 9047,
      },
      {
        id: 14,
        user: { name: "Олег", surname: "Раков" },
        good: "Веревка",
        status: "process",
        createdAt: "2022-04-05T13:09:34.972Z",
        price: 7468,
      },
      {
        id: 15,
        user: { name: "Василий", surname: "Соколов" },
        good: "Нож",
        status: "new",
        createdAt: "2022-04-04T04:56:12.039Z",
        price: 8010,
      },
      {
        id: 16,
        user: { name: "Алексей", surname: "Раков" },
        good: "Ноутбук",
        status: "new",
        createdAt: "2022-04-03T21:05:38.895Z",
        price: 2848,
      },
      {
        id: 17,
        user: { name: "Петр", surname: "Соколов" },
        good: "Мыло",
        status: "archived",
        createdAt: "2022-04-04T10:26:55.671Z",
        price: 1753,
      },
      {
        id: 18,
        user: { name: "Сергей", surname: "Лепко" },
        good: "Мыло",
        status: "new",
        createdAt: "2022-03-30T17:45:51.032Z",
        price: 5558,
      },
      {
        id: 19,
        user: { name: "Петр", surname: "Соловьев" },
        good: "Шина",
        status: "archived",
        createdAt: "2022-04-03T03:29:36.057Z",
        price: 3632,
      },
      {
        id: 20,
        user: { name: "Виктор", surname: "Лепко" },
        good: "Ноутбук",
        status: "archived",
        createdAt: "2022-04-01T22:07:15.987Z",
        price: 7277,
      },
      {
        id: 21,
        user: { name: "Василий", surname: "Соловьев" },
        good: "Ручка",
        status: "new",
        createdAt: "2022-04-02T06:35:14.128Z",
        price: 6547,
      },
      {
        id: 22,
        user: { name: "Сергей", surname: "Раков" },
        good: "Тетрадка",
        status: "process",
        createdAt: "2022-04-05T06:01:01.296Z",
        price: 4039,
      },
      {
        id: 23,
        user: { name: "Сергей", surname: "Вихта" },
        good: "Ручка",
        status: "back",
        createdAt: "2022-04-02T05:03:16.588Z",
        price: 1054,
      },
      {
        id: 24,
        user: { name: "Константин", surname: "Раков" },
        good: "Шина",
        status: "archived",
        createdAt: "2022-03-30T19:54:06.258Z",
        price: 8068,
      },
      {
        id: 25,
        user: { name: "Сергей", surname: "Вихта" },
        good: "Веревка",
        status: "process",
        createdAt: "2022-04-04T23:56:53.440Z",
        price: 571,
      },
      {
        id: 26,
        user: { name: "Петр", surname: "Мельнев" },
        good: "Ноутбук",
        status: "archived",
        createdAt: "2022-04-02T03:48:31.324Z",
        price: 8756,
      },
      {
        id: 27,
        user: { name: "Сергей", surname: "Раков" },
        good: "Тетрадка",
        status: "new",
        createdAt: "2022-04-04T22:16:17.942Z",
        price: 380,
      },
      {
        id: 28,
        user: { name: "Алексей", surname: "Мельнев" },
        good: "Мыло",
        status: "archived",
        createdAt: "2022-04-02T02:26:01.344Z",
        price: 3140,
      },
      {
        id: 29,
        user: { name: "Виктор", surname: "Раков" },
        good: "Ручка",
        status: "back",
        createdAt: "2022-03-31T05:48:47.151Z",
        price: 985,
      },
      {
        id: 30,
        user: { name: "Константин", surname: "Саван" },
        good: "Нож",
        status: "back",
        createdAt: "2022-04-01T00:45:54.042Z",
        price: 9760,
      }
    );
  }
}

export default Store;

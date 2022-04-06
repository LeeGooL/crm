// id, name, surname, price, date, status, goods

const names = "Алексей Сергей Олег Петр Виктор Константин Василий".split(" ");
const surnames = "Соколов Соловьев Вихта Мельнев Раков Лепко Саван".split(" ");
const goods =
  "Сковородка Ручка Тетрадка Веревка Мыло Кресло Шина Ноутбук Нож".split(" ");
const statuses = "new archived back process".split(" ");

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function getRandomDate(from, to) {
  const timestampFrom = from.getTime();
  const timestampTo = to.getTime();
  const result = getRandom(timestampFrom, timestampTo);

  return new Date(result);
}

const createUser = () => ({
  name: names[getRandom(0, names.length)],
  surname: surnames[getRandom(0, surnames.length)],
});

const now = new Date();
const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

const ordersInfo = new Array(30).fill().map((elem, index) => {
  elem = {
    id: index + 1,
    user: createUser(),
    good: goods[getRandom(0, goods.length)],
    status: statuses[getRandom(0, statuses.length)],
    time: getRandomDate(weekAgo, now),
    price: getRandom(100, 10_000),
  };

  return elem;
});

console.log(JSON.stringify(ordersInfo));

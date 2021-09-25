//Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345. Ці змінні зберігають ціни на товари. Придумайте їм назви (товар можна придумати будь-який)
let clockPrice = 15.678;
let phonePrice = 123.965;
let kettlePrice = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log(`Максимальна ціна: ${Math.max(clockPrice, phonePrice, kettlePrice)}`);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(`Мінімальна ціна: ${Math.min(clockPrice, phonePrice, kettlePrice)}`);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let totalСost = clockPrice + phonePrice + kettlePrice;
console.log(`Вартість всіх товарів: ${totalСost}`);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
clockPriceRoundDown = Math.floor(15.678);
phonePriceRoundDown = Math.floor(123.965);
kettlePriceRoundDown = Math.floor(90.2345);
let totalСostRoundDown = clockPriceRoundDown + phonePriceRoundDown + kettlePriceRoundDown;

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log(`Cума товарів округлена до сотень: ${Math.round(totalСostRoundDown / 100) * 100}`);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
console.log(`Число парне?: ${totalСostRoundDown % 2 == 0}`);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
console.log(`Сума решти (без округлення): ${500 - totalСost}`);

//Виведіть середнє значення цін, округлене до другого знаку після коми
console.log(`Cереднє значення цін: ${(totalСost / 3).toFixed(2)}`);

/* (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни ?
(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. Чистий прибуток = 130 - 26 -> 104) (Приклад 2: ціна була 100,
знижка склала 90 %, клієнт заплатив на 90 меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40) */

let price = 260.66;
let discount = 90;
//let discount = Math.round(Math.random() * 100);
console.log(`Випадкова знижка: ${discount}%`);

let amountToPay = Math.ceil(price * (100 - discount) / 100).toFixed(2);
console.log(`Сума до оплати: ${amountToPay}`);

let difference = price - amountToPay;
let costPrice = price / 2;
let netProfit = Math.floor(costPrice - difference).toFixed(2);
console.log(netProfit);



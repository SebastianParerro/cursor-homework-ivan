//Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345. Ці змінні зберігають ціни на товари. Придумайте їм назви (товар можна придумати будь-який)
const clockPrice = 15.678;
const phonePrice = 123.965;
const kettlePrice = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log(`Максимальна ціна: ${Math.max(clockPrice, phonePrice, kettlePrice)}`);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(`Мінімальна ціна: ${Math.min(clockPrice, phonePrice, kettlePrice)}`);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const totalСost = clockPrice + phonePrice + kettlePrice;
console.log(`Вартість всіх товарів: ${totalСost}`);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const clockPriceRoundDown = Math.floor(clockPrice);
const phonePriceRoundDown = Math.floor(phonePrice);
const kettlePriceRoundDown = Math.floor(kettlePrice);
const totalСostRoundDown = clockPriceRoundDown + phonePriceRoundDown + kettlePriceRoundDown;

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log(`Cума товарів округлена до сотень: ${Math.round(totalСostRoundDown / 100) * 100}`);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
console.log(`Число парне?: ${totalСostRoundDown % 2 == 0}`);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const totalOfMoney = 500;
console.log(`Сума решти (без округлення): ${totalOfMoney - totalСost}`);

//Виведіть середнє значення цін, округлене до другого знаку після коми
console.log(`Cереднє значення цін: ${(totalСost / 3).toFixed(2)}`);

/* (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни ?
(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26 меньше, собівартість = 260 / 2 -> 130. Чистий прибуток = 130 - 26 -> 104)
(Приклад 2: ціна була 100, знижка склала 90 %, клієнт заплатив на 90 меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40) */

let discount = Math.floor(Math.random() * 101);
console.log(`Випадкова знижка: ${discount}%`);

let amountToPay = Math.ceil((totalСost * (100 - discount) / 100) * 100) / 100;
console.log(`Сума до оплати: ${amountToPay.toFixed(2)}`);

const difference = totalСost - amountToPay;
const costPrice = totalСost / 2;
let netProfit = Math.floor((costPrice - difference) * 100) / 100;
console.log(`Чистий прибуток ${netProfit.toFixed(2)}`);
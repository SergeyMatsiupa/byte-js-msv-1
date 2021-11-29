// DATE AND TIME

const now = new Date();
console.log(`now`, now);



// TIMESTAMP and UNIX Time

const timestamp = Date.now();
console.log(`timestamp`, timestamp);



// Создание даты

// Указание мс прошедших с начала UNIX времени
const unixStart = new Date(0);

// Используя стандартную строку времени
// datestring format YYYY-MM-DDTHH:mm:ss
// YYYY - полный год
// MM - месяц
// DD - день месяца
// T
// HH - часы
// mm - минуты секунды
// ss - seconds
const birthday = new Date("1996-09-24T12:22");


// Используя раздельные аргументы в следуещем порядке:
// * год
// * месяц (начинается с 0 !)
// * день месяца
// * часы
// * минуты
// * секунды
// * милисекунды

const firstSpaceFlight = new Date(1961, 3, 12, 6, 7);
// 12 апреля 1961 года
// 06:07


console.log(`unixStart`, unixStart);
console.log(`birthday`, birthday);
console.log(`firstSpaceFlight`, firstSpaceFlight)





// Получение отдельных сущностей (компонентов) даты
// getFullYear() - полный год
// getMonth() - месяц (0 - 11)
// getDate() - день месяца (1 - 31)
// getDay() - день недели (0 - 6)
// getHours(), getMinutes(), getSeconds(), getMilliseconds()

// У каждого метода есть UTC аналог

// getHours -> getUTCHours

const date = new Date();

console.log(`Год:`, date.getFullYear());
console.log(`Месяц:`, date.getMonth());
console.log(`Дата:`, date.getDate());
console.log(`День:`, date.getDay());

console.log(`date.getHours()`, date.getHours());
console.log(`date.getUTCHours()`, date.getUTCHours());




// Установка компонентов даты

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms) // 0 - 999
// setTime(milliseconds) // timestamp

// Методы установки компонентов даты возвращают timestamp

const today = new Date();

let tomorrow; 

tomorrow = new Date(new Date(today).setDate(10));
console.log(`tomorrow`, tomorrow);
console.log(`today`, today);



const getTomorrowDate = () => {
    const today = new Date();
    
    const tomorrowDate = today.getDate() + 1;
    
    const tomorrow = new Date(new Date().setDate(tomorrowDate));
    return tomorrow;
  }
  
  tomorrow = getTomorrowDate();
  
  console.log(`tomorrow`, tomorrow)
  console.log(`today`, today);
  
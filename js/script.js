const drink = prompt('виберіть напій чай, сік або кава')
const drinkLower = drink.toLocaleLowerCase()
switch (drinkLower) {
    case "кава" :
        console.log('ви обрали каву');
        break;
    case "сік":
        console.log('ви обрали сік');
        break;
    case "чай":
        console.log('ви обрали чай');
        break;
    default:
        console.log('виберіть один з запропонованих напоїв')
}

// завдання 2
const days = prompt('введтіь день тиждня')
const daysLower = days.toLocaleLowerCase()
switch (daysLower) {
    case "понеділок":
        console.log('це робочий день');
        break;
    case "вівторок":
        console.log('це робочий день');
        break;
    case "середа":
        console.log('це робочий день');
        break;
    case "четвер":
        console.log('це робочий день');
        break;
    case "п\'ятниця":
        console.log('це робочий день');
        break;
    case "субота":
        console.log('це вихідний день');
        break;
    case "неділя":
        console.log('це вихідний день');
        break;
    default:
        console.log('введіть будь-ласка день тиждня')
}
// 3
const month = prompt('введіть номер місяця')
const monthLower = month.toLocaleLowerCase()
switch (monthLower) {
    case "1":
        console.log('січень, зима');
        break;
    case "2":
        console.log('лютий, зима');
        break;
    case "3":
        console.log('березень, весна');
        break;
    case "4":
        console.log('квітень, весна');
        break;
    case "5":
        console.log('травень, весна');
        break;
    case "6":
        console.log('червень, літо');
        break;
    case "7":
        console.log('липень, літо');
        break;
    case "8":
        console.log('серпень, літо');
        break;
    case "9":
        console.log('вересень, осінь');
        break;
    case "10":
        console.log('жовтень, осінь');
        break;
    case "11":
        console.log('листопад, осінь');
        break;
    case "12":
        console.log('грудень, зима');
        break;
    default:
        console.log('введіть коректний номер місяця')
}

// 4

const color = prompt('введіть колір світофора')
const colorLower = color.toLocaleLowerCase()
switch (colorLower) {
    case "червоний":
        console.log('стій');
        break;
    case "жовтий":
        console.log('готуйся');
        break;
    case "зелений":
        console.log('біжи');
        break;
    default:
        console.log('введіть коректний колір світофора')
}

// 5

let number1 = prompt("Введіть перше число:");
let number2 = prompt("Введіть друге число:");
let operator = prompt("Введіть оператор (+, -, *, /):");

let result;

switch (operator) {
  case "+":
    result = number1 + number2;
    console.log(`Результат: ${result}`);
    break;
  case "-":
    result = number1 - number2;
    console.log(`Результат: ${result}`);
    break;
  case "*":
    result = number1 * number2;
    console.log(`Результат: ${result}`);
    break;
  case "/":
    if (number2 === 0) {
      console.log("Попередження: Ділення на нуль не може бути виконано!");
    } else {
      result = number1 / number2;
      console.log(`Результат: ${result}`);
    }
    break;
  default:
    console.log(
      "Невірний оператор. Будь ласка, введіть один з операторів: +, -, *, /."
    );
}  
'use strict';

let budget = +prompt ("Ваш бюджет на месяц?", ""),
    date = prompt ("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    salary: budget,
    timeData: date,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false
};

let obligateExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMuch = prompt("Во сколько обойдется?", "");

let expenses = {};
expenses.obligateExpenses = howMuch;

alert (budget/30);
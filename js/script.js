'use strict';

let btn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    countBudgetBtn = document.getElementsByTagName('button')[1],
    optionalExpensesItem = document.querySelectorAll('.data .optionalexpenses-item'),
    ncomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let budget, date;

function start() {
    budget = +prompt ("Ваш бюджет на месяц?", "");
    date = prompt ("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(budget) || budget == "" || budget == null) {
        budget = +prompt ("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    salary: budget,
    timeData: date,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i =0; i < 2; i++) {
            let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt ("Во сколько обойдется?", "");
            
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != "" && b != "" && a.length < 50) {
                    console.log ('done');
                    appData.expenses[a] = b;
            } else {
                alert ('Проверьте правильность ввода данных');
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.salary/30).toFixed();
        alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert ('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt('', '');
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {

        for (let i = 0 ; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (перечислить через запятую', '');
            if ( (typeof(items)) != null && (typeof(items)) === 'string' && items != "") {
                appData.income = items.split(', '); 
            } else {
                alert ('Проверьте правильность ввода данных');
                i--;
            }
        }
        
        appData.income.push(prompt('Может, что-то еще?', ''));
        appData.income.sort();

        appData.income.forEach(function (item, i) {
            alert ('Способы доп. заработка: ' + (i+1) + '-' + item);
        });

    }
};

for (let smth in appData) {
        console.log('Наша программа включает в себя данные: '+ smth);
}

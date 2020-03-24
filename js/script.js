'use strict';

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
    savings: true
};

function chooseExpenses() {
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
}

chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.salary/30).toFixed();
    alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}


function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert ('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    let optItem1 = prompt("Статья необязательных расходов?"),
        optItem2 = prompt("Статья необязательных расходов?"),
        optItem3 = prompt("Статья необязательных расходов?");
    
    appData.optionalExpenses['1'] = optItem1;
    appData.optionalExpenses['2'] = optItem2;
    appData.optionalExpenses['3'] = optItem3;
}
chooseOptExpenses();
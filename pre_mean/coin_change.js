function coinChange(num){

    var change = {
        dollars: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }

    change.dollars = Math.trunc(num / 100)

    num -= (change.dollars * 100)

    change.quarters = Math.trunc(num / 25)

    num -= (change.quarters * 25)

    change.dimes = Math.trunc(num / 10)

    num -= (change.dimes * 10)

    change.nickels = Math.trunc(num / 5)

    num -= (change.nickels * 5)

    change.pennies = Math.trunc(num / 1)

    num -= (change.pennies * 1)
    

    console.log(change)
    return change
}

coinChange(412)
coinChange(12234)
coinChange(77)
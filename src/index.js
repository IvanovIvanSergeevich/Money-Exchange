// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if(currency<=10000) {
        var cash = [];
        cash[0] = {
            name: "H",
            value: 50,
            count: 0
        }
        cash[1] = {
            name: "Q",
            value: 25,
            count: 0
        }
        cash[2] = {
            name: "D",
            value: 10,
            count: 0
        }
        cash[3] = {
            name: "N",
            value: 5,
            count: 0
        }
        cash[4] = {
            name: "P",
            value: 1,
            count: 0
        }
        var i;
        for (i = 0; i < cash.length; i++) {
            if (currency >= cash[i].value) {
                cash[i].count = Math.floor(currency / cash[i].value);
                currency %= cash[i].value;
            }
            else cash[i].count = undefined;

        }
        var name, result = {};
        for (i = 0; i < cash.length; i++) {
            if (cash[i].count != undefined) {
                result[cash[i].name] = cash[i].count;
            }
        }
        return result;
    }
    else return {error: "You are rich, my friend! We don't have so much coins for exchange"};

}
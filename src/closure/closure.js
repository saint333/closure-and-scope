const moneyBox = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(`Money $${saveCoins}`);
    }
    return countCoins
}
/* myMoneyCoins referencia a moneyBox con lo cual ya le podemos pasar el parametro para countCoins y este lo recuerda sisque hay otra llamada a la funcion */
let myMoneyCoins = moneyBox();
myMoneyCoins(4);
myMoneyCoins(6)
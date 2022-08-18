//caso en el que mi moneyBox no logra ahorrar realmente ya que cada vez que se accede se inicializa en 0 mi variable de ahorro

//function moneyBox(coins){
//    let  saveCoins = 0;
//    saveCoins += coins;
//    console.log(`MoneyBox: $${saveCoins}`);
//};

//moneyBox(5);
//moneyBox(5);

//EJEMPLO DONDE SI FUNCIONA EL AHORRO
function MoneyBox(){
    let saveCoins = 0;
    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    };
    return countCoins;
};


const myMoneyBox = MoneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyboxAna = MoneyBox();
moneyboxAna(10);
moneyboxAna(20);
moneyboxAna(5);


let userMileage = Number(prompt ("Indica quanti chilometri vuoi percorrere"));
let userAge = Number(prompt ("Specifica la tua età"));

console.log(userMileage);
console.log(userAge);

/*
(function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num / 100);
}
 */

const mileagePrice = 0.21;
const underAgeDiscount = 0.168;
const overDiscount = 0.126;


  

if (userAge < 18){
    console.log(userMileage * underAgeDiscount)
} else if (userAge >= 65){
    console.log(userMileage * overDiscount);
} else {
    console.log(userMileage * mileagePrice);
}


let userMileage = Number(prompt ("Indica quanti chilometri vuoi percorrere"));
let userAge = Number(prompt ("Specifica la tua età"));

console.log(userMileage);
console.log(userAge);


let euro = Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
});

const mileagePrice = 0.21;
const underAgeDiscount = 0.16;
const overDiscount = 0.12;


if (userAge < 18){
    console.log(euro.format(userMileage * underAgeDiscount));
} else if (userAge >= 65){
    console.log(euro.format(userMileage * overDiscount));
} else {
    console.log(euro.format(userMileage * mileagePrice));
}


//let userMileage = Number(prompt ("Indica quanti chilometri vuoi percorrere"));
//let userAge = Number(prompt ("Specifica la tua età"));

console.log(userMileage);
console.log(userAge);

const mileagePrice = 0.21;
const underAgeDiscount = 0.20;
const overDiscount = 0.40;

if (userAge < 18){
    console.log(userMileage * mileagePrice)
} else if (userAge >= 65){
    console.log(userMileage * mileagePrice);
} else {
    console.log(userMileage * mileagePrice);
}


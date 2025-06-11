function calculateWater(cups) {
  let waterAmount = cups * 200;
  console.log("Water: " + waterAmount + " ml");
  return waterAmount;
}

function calculateMilk(cups) {
  let milkAmount = cups * 50;
  console.log("Milk: " + milkAmount + " ml");
  return milkAmount;
}

function calculateTeaLeaves(cups) {
  let teaAmount = cups * 1;
  console.log("Tea Leaves (Majani): " + teaAmount + " tablespoons");
  return teaAmount;
}

function calculateSugar(cups) {
  let sugarAmount = cups * 2;
  console.log("Sugar (Sukari): " + sugarAmount + " teaspoons");
  return sugarAmount;
}

function chaiCalculator() {
  let cupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
  let cups = Number(cupsInput);

  console.log("chaiCalculator");
  console.log("To make " + cups + " cups of Kenyan Chai, you will need:");

  calculateWater(cups);
  calculateMilk(cups);
  calculateTeaLeaves(cups);
  calculateSugar(cups);

  console.log("");
  console.log("Enjoy your Chai Bora!");
}

chaiCalculator();
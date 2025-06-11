function baseFare() {
  let base = 50;
  console.log("Ukikalia Pikipiki (Base Fare): KES " + base);
  return base;
}

function distanceFare(kilometers) {
  let perKmRate = 15;
  let fare = kilometers * perKmRate;
  console.log("Mpaka Uko (Distance Fare): KES " + fare);
  return fare;
}

function bodaFareCalculator() {
  let kmInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");
  let kilometers = Number(kmInput);

  console.log("");
  console.log("Uko kwote? Io ni " + kilometers + " km:");

  let fixed = baseFare();
  let moving = distanceFare(kilometers);
  let total = fixed + moving;

  console.log("Total: KES " + total);
  console.log("");
  console.log("Panda Pikipiki!");
}

bodaFareCalculator();
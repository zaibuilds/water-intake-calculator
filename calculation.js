let dailyWaterIntake = 3000;
let occasionalWaterIntake = 4500;
let weeklyWaterIntake = 3000 * 6 + 4500;
let monthlyWaterIntake = weeklyWaterIntake * 4;
let averageWaterIntake = monthlyWaterIntake/28;
console.log(averageWaterIntake)

let waterBottles = 500 * 48;
let waterDuration = waterBottles/averageWaterIntake;
console.log(waterDuration);

let howManyPacks = monthlyWaterIntake / waterBottles

console.log(howManyPacks)
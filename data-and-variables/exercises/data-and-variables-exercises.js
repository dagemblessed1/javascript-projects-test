// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKm);

// Calculate a space mission below

let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesPerKm / shuttleSpeedMph;
let daysToMars = distanceToMarsKm / 24;

// Print the results of the space mission calculations below

console.log(milesToMars);
console.log(hoursToMars);
console.log(daysToMars);

"it will take 9375000 days to reach Mars"

// Calculate a trip to the moon below

let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesPerKm / shuttleSpeedMph;
let daysToMoon = distanceToMoonKm /24;

console.log(milesToMoon);
console.log(hoursToMoon);
console.log(daysToMoon);

// Print the results of the trip to the moon below
"it will take 1600 days to reach the moon"
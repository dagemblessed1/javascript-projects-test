// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7) {
    preparedForLiftOff = true
    //console.log ("cleared for liftoff");
}

// add logic below to verify all astronauts are ready

if (astronautStatus = "ready") {
    preparedForLiftOff = true
    //console.log ("cleared for liftoff");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg < maximumMassLimit) {
    preparedForLiftOff = true
    //console.log ("cleared for liftoff");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius >= -300 || fuelTempCelsius <= -150) {
    preparedForLiftOff = true
    //console.log ("cleared for liftoff");
} else {
    preparedForLiftOff = false
    //console.log ("abort launch");
}
// add logic below to verify the fuel level is at 100%

if (fuelLevel = "100%") {
    preparedForLiftOff = true
    //console.log ("cleared for liftoff" );
}
// add logic below to verify the weather status is clear

if (weatherStatus = "clear") {
    preparedForLiftOff = true
    //console.log ("cleared for liftoff" );
}
// Verify shuttle launch can proceed based on above conditions

if(preparedForLiftOff === true) {
console.log ("All systems are a go! Initiating space shuttle lanch sequence.");
console.log ("------------------------------------------------------------------------------");
console.log("Date: " + date);
console.log("Time: " + time); 
console.log("Astronaut Count: " + astronautCount);
console.log("crew Mass: " + crewMassKg + "kg");
console.log("Fuel Mass: " + fuelMassKg + "kg");
console.log("shuttle Mass: " + shuttleMassKg + "kg");
console.log("total Mass " + totalMassKg + "kg");
console.log("fuel Tempreature: " + fuelTempCelsius + "°C");
console.log("weather status: " + weatherStatus);
console.log ("------------------------------------------------------------------------------");
console.log ("Wish your astronauts a safe flight!");
} else { 
    console.log("Launch Scrubbed")
}

//"Monday 2019-03-18"
//time = "10:05:34 AM";
//astronautCount = 7
//crewMassKg = astronautCount * averageAstronautMassKg;
//fuelMassKg = 760000;
//shuttleMassKg = 74842.31;
//totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
//fuelTempCelsius = -225;
//weatherStatus = "clear";

//All systems are a go! Initiating space shuttle lanch sequence."
//Wish your astronauts a safe flight!"

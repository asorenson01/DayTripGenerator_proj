"use strict"
//list of Arrays
let destinationArray = ["Pet Store", "Safco Field", "Hawaii", "Doctors Office", "Grocery Store", "Car Lot"];
let restaurantArray = ["McDonalds", "I'm Really Not Hungry", "Applebee's", "Ruth Chris Steak House", "Burger King", "Taco Bell"];
let transportationArray = ["Car", " Airplane", "Helicopter", "Moped", "These Feet are made for walking","Rickshaw"];
let entertainmentArray = ["Baseball Game", "Movie Theater", "Who am I kidding, I'm just gonna be looking at my phone", "Concert", "Comedy Show", "Long Hike"];

//list of declared varriables



//functions

function randomNumber(option1){
    let x;
    x = prompt("Press Enter to Randomly Select a " + option1);
    let result = Math.floor(Math.random() * 6);  
    return result;
}








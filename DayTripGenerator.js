"use strict"
//list of Arrays
let destinationArray = ["Pet Store", "Safco Field", "Hawaii", "Doctors Office", "Grocery Store", "Car Lot"];
let restaurantArray = ["McDonalds", "I'm Really Not Hungry", "Applebee's", "Ruth Chris Steak House", "Burger King", "Taco Bell"];
let transportationArray = ["Car", " Airplane", "Helicopter", "Moped", "These Feet are made for walking","Rickshaw"];
let entertainmentArray = ["Baseball Game", "Movie Theater", "Who am I kidding, I'm just gonna be looking at my phone", "Concert", "Comedy Show", "Long Hike"];

//list of declared varriables

let destination;
destination = "where we are going"
let restaurant;
restaurant = "where we can get somthing to eat";
let transportation;
transportation = "let figure out how to get there"
let entertainment
entertainment = "What should we do before we head back home?"



//functions

//Option should equal Destination, Restaurant, Transportation, or Entertainment
function randomNumber(string1){
    let x;
    x = prompt("Press Enter to Randomly Select a " + string1);
    let result = Math.floor(Math.random() * 6);  
    return result;
}


function selectAnOption(anArray,string1){
    let result;
    let ranNum;
    ranNum = randomNumber(string1)
    result = anArray[ranNum]
    return result;    
}

//
function pickDestination(anArray,string1){
   let userInput = "No"
    console.log("Lets get ready to plan the best trip ever, I hope you are ready!")
    console.log(`Lets figure out ${destination}` )    
    while (userInput === "No"){
        destination=selectAnOption(anArray,string1)
        userInput = prompt(`Are you happy with ${destination} as your destination? Please type "Yes", or "No"`)
    }
    console.log(`So you are headed to ${destination}`)
    
}

function pickRestaurant(anArray,string1){
    let userInput = "No"
     console.log(`I'm sure when we get to ${destination} we will be hungry!`)
     console.log(`Lets figure out ${restaurant}` )    
     while (userInput === "No"){
         restaurant=selectAnOption(anArray,string1)
         userInput = prompt(`Are you happy eatting at ${restaurant}? Please type "Yes", or "No"`)
     }
     console.log(`You will be eating at ${restaurant}`)
 }

 //
function pickTransportation(anArray,string1){
    let userInput = "No"
     console.log(`${destination} is pretty far!`)
     console.log(`Lets figure out ${transportation}` )    
     while (userInput === "No"){
         transportation=selectAnOption(anArray,string1)
         userInput = prompt(`Are you happy with ${transportation} as your means of transportion? Please type "Yes", or "No"`)
     }
     console.log(`So you are headed to ${destination} via ${transportation}`)
     
 }

 function pickEntertainment(anArray,string1){
    let userInput = "No"
     // console.log(``)
     console.log(`${entertainment}`)    
     while (userInput === "No"){
         entertainment=selectAnOption(anArray,string1)
         userInput = prompt(`Do you think you will be happy with ${entertainment}? Please type "Yes", or "No"`)
     }
     console.log(`Hope you enjoy ${entertainment} before heading home!`)
     
 }

 




pickDestination(destinationArray,"Destination");
pickRestaurant(restaurantArray, "Restaurant");
pickTransportation(transportationArray,"Transportation")
pickEntertainment(entertainmentArray,"Entertainment")









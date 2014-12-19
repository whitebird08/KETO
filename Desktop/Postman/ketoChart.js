
//equations/relativity//
//rx = user/prescribed input//

var dailyCal = rxCal
var RATIO = rxRatio
var mealsPerDay = rxMPD
var dietaryUnit = (rxRatio * 9)+4
var kCalPerUnit = rxCal / dietaryUnit
var calPerMeal = rxCal / rxMPD
var unitsPerDay = rxCal / DietaryUnit
var unitsPerMeal = unitsPerDay / rxMPD
var proteinPerDay = rxPRO

var goalPRO = rxPRO / rxMPD
var goalFAT = unitsPerDay * rxRatio
var goalCHO = unitsPerMeal - goalPRO

var amount = rxGrams


var percentPRO =      //?? come back to this part
var percentFAT =      //?? come back to this part
var percentCHO =      //?? come back to this part

var PRO = percentPRO * 0.01 * rxGrams  //?? come back to this part
var FAT = percentFAT * 0.01 * rxGrams  //?? come back to this part
var CHO = percentCHO * 0.01 * rxGrams  //?? come back to this part

PRO = ing[0];  //first element in each array...correct syntax?
FAT = ing[1];  //second element in each array
CHO = ing[2];  //third element in each array

var totalRATIO = totalFAT / (totalPRO + totalCHO)
var totalCAL = (4 * totalPRO) + (9 * totalFAT) + (4 * totalCHO)

var ing1 = [10,20,30];
var ing2 = [10,20,30];
var ing3 = [10,20,30];
var ing4 = [10,20,30];
var ing5 = [10,20,30];

var totalPRO = [ing1[0] + ing2[0] + ing3[0] + ing4[0] + ing5[0]];
var totalFAT = [ing1[1] + ing2[1] + ing3[1] + ing4[1] + ing5[1]];
var totalCHO = [ing1[2] + ing2[2] + ing3[2] + ing4[2] + ing5[2]];



var increaseAmount
var decreaseAmount

if RATIO = rxRatio {
    color: green;
}




$('td').on('increaseAmount', click);
$('td').on('decreaseAmount', click);

//"var amount = rxGrams" is listed after goals
function click(increaseAmount) {
    (amount + 1)
};

function click(decreaseAmount) {
    (amount - 1)
};



enter amount into box
calculate
click to adjust



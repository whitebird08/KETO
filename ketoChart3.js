
//equations/relativity//
//rx = user/prescribed input//
/*
var dailyCal = rxCal;
var RATIO = rxRatio;
var mealsPerDay = rxMPD;
var dietaryUnit = (rxRatio * 9)+4;
var kCalPerUnit = rxCal / dietaryUnit;
var calPerMeal = rxCal / rxMPD;
var unitsPerDay = rxCal / DietaryUnit;
var unitsPerMeal = unitsPerDay / rxMPD;
var proteinPerDay = rxPRO;

var goalPRO = rxPRO / rxMPD;
var goalFAT = unitsPerDay * rxRatio;
var goalCHO = unitsPerMeal - goalPRO;
*/
var ingName

var percentPRO = $('#PRO') / $('#servingSizeA') * (100);
var percentFAT = (FAT / servingSizeA) * (100);
var percentCHO =  (CHO / servingSizeA) * (100);


var PRO = percentPRO * 0.01 * servingSizeA;
var FAT = percentFAT * 0.01 * servingSizeA;
var CHO = percentCHO * 0.01 * servingSizeA;

//PRO = ing1[6];
//FAT = ing1[7];
//CHO = ing1[8];
/*
var totalRATIO = totalFAT / (totalPRO + totalCHO)
var totalCAL = (4 * totalPRO) + (9 * totalFAT) + (4 * totalCHO)


var ing1 = [servingSizeA, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
var ing2 = [servingSizeB, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
var ing3 = [servingSizeC, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
var ing4 = [servingSizeD, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];
var ing5 = [servingSizeE, ingName, percentPRO, percentFAT, percentCHO, PRO, FAT, CHO];

var totalPRO = [ing1[6] + ing2[6] + ing3[6] + ing4[6] + ing5[6]];
var totalFAT = [ing1[7] + ing2[7] + ing3[7] + ing4[7] + ing5[7]];
var totalCHO = [ing1[8] + ing2[8] + ing3[8] + ing4[8] + ing5[8]];

*/

//var increaseAmount
//var decreaseAmount

$(function(){
    $('#plusA').on('click', increaseAmount, calcPro);

    $('#minusA').on('click', decreaseAmount);


    $("#enter").on("click", function(){
        console.log($("#servingSizeA").val());
        var value = $("#servingSizeA").val()
        console.log(value);

        return false;
    })


function increaseAmount(){
    // grab current value from the input box
    var currentValue = $('#servingSizeA').val()
    console.log((currentValue))
    // increment value by 1
    var newVal = parseInt (currentValue) + 1;
    console.log(newVal);
    // append new value to DOM

    $('#servingSizeA').val(newVal)
}
});

function decreaseAmount() {
    // grab current value from the input box
    var currentValue = $('#servingSizeA').val()
    console.log((currentValue));
    // increment value by 1
    var newVal = parseInt(currentValue) - 1;
    console.log(newVal);
    // append new value to DOM
    $('#servingSizeA').val(newVal)

};


function calcPro () {
    // grab current value from the input box
    var currentPro = $('#PRO').val()
    console.log((currentPro));
    //calculate new value
    var newPro = parseInt((percentPRO) * (.01) * $('servingSizeA'))
    console.log(newPro);
    //append new value to DOM
    $('#PRO').val(newPro)
}



function calcPercentPro(){
    (PRO / servingSizeA) * (100)

}

 function calcPercentFat(){
 (FAT / servingSizeA) * (100)
 return percentFat
 }

 function calcPercentCho(){
 (CHO / servingSizeA) * (100)
 return percentCho
 }


 function calcFat () {
 percentFat * .01 * servingSizeA
 return newFat
 }

 function calcCho () {
 percentCho * .01 * servingSizeA
 return newCho
 }



/*

 PSEUDOCODE:
 enter serving size (servingSizeA) in grams
 enter nutrients (PRO, FAT, CHO) per serving in grams

 ????
 click submit button to link all boxes together/create an array
 ????
 or click

 adjust  = nutrient / serving size * 100 +/- 1
 return percentNutrient, return newSize
 calculatedNutrient = percentNutrient * .01 * serving size
 return new NutrientQuantity
 (later)click save to directory which sends to directory and can then be recalled
 repeat process for second ingredient
 add like nutrients from each ingredient
 return total nutrients
 calculate total nutrient ratio (indicate when match to target)
 calculate total calories    (indicate when match to target)


 */






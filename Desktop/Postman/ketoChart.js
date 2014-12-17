var dailyCal = rxCal
var RATIO = rxRatio
var mealsPerDay = rxMPD
var dietaryUnit = (rxRatio * 9)+4
var kCalPerUnit = rxCal / dietaryUnit
var calPerMeal = rxCal / rxMPD
var unitsPerDay = rxCal / DietaryUnit
var unitsPerMeal = unitsPerDay / rxMPD
var protienPerDay = rxPRO

var goalPRO = rxPRO / rxMPD
var goalFAT = unitsPerDay * rxRatio
var goalCHO = unitsPerMeal - goalPRO

var amount = rxGrams
var food = indexFOOD
var percentPRO =
var percentFAT =
var percentCHO =

var PRO = percentPRO * 0.01 * rxGrams
var FAT = percentFAT * 0.01 * rxGrams
var CHO = percentCHO * 0.01 * rxGrams

var totalRATIO = totalFAT / (totalPRO + totalCHO)
var totalCAL = (4*totalPRO) + (9 * totalFAT) + (4 * totalCHO)
var totalPRO = //add PRO from each input line...still need to add more input lines
var totalFAT = //add FAT from each input line...still need to add more input lines
var totalCHO = //add CHO from each input line...still need to add more input lines




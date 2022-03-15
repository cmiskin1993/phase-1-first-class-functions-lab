// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']; 

// function returnFirstTwoDrivers() {
//     return firstTwo;
// }

// function returnLastTwoDrivers() {

//     return lastTwo;
// }

// let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(x) {
//     return function (){
//         return x * x 
//     }
// }

// let fareDoubler = x => x * 2
// let fareTripler = x => x * 3

// function selectDifferentDrivers(selectDifferentDrivers, driver) {
//     if (selectDifferentDrivers = driver, returnFirstTwoDrivers)
//     return firstTwo;
//     if (selectDifferentDrivers = driver, returnLastTwoDrivers)
//     return lastTwo;
// }

// solution

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  
  const fareDoubler = createFareMultiplier(2);
  
  const fareTripler = createFareMultiplier(3);
  
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };
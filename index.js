// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}


function fuzzyMatch(drivers, beginningLetters) {
    return drivers.filter(function (driver) {
        return driver.slice(0, 2) === beginningLetters;
    })
}

function matchName(drivers, string) {
    return drivers.filter(function (driver) {
        return (driver.name === string)
    })
}
"use strict";
function averageValue(value) {
    const _seven = 7; //declarate it like const because need 7 days period.
    let priceStorage = [];
    let sum = 0;
    if (priceStorage.length < _seven) {
        priceStorage.push(value);
    }
    else if (priceStorage.length === _seven) {
        priceStorage.shift();
        priceStorage.push(value);
    }
    for (let el of priceStorage) {
        sum += el;
    }
    let averageValue = sum / priceStorage.length;
    return averageValue;
}
function containerAverage(averageValue) {
    let weekAverageStorage = [];
    let mounthAverageStorage = [];
    if (weekAverageStorage.length < 7) {
        weekAverageStorage.push(averageValue);
    }
    else {
        weekAverageStorage.shift();
        weekAverageStorage.push(averageValue);
    }
    if (mounthAverageStorage.length < 30) {
        mounthAverageStorage.push(averageValue);
    }
    else {
        mounthAverageStorage.shift();
        mounthAverageStorage.push(averageValue);
    }
}
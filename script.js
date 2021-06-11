"use strict";

function getAreaOfCircle(radius){

        return (Math.PI*radius)**2;
}

function getCircumferenceOfCircle (radius){

    return (2*Math.PI*radius);
}

function getAreaOfSquare(side){

    return (side*side);
}

function getAreaOfTriangle(base, height){

    return ((base*height)/2);
}

console.log(getAreaOfCircle(10));
console.log(getCircumferenceOfCircle(20));
console.log(getAreaOfSquare(4));
console.log(getAreaOfTriangle(5,10));


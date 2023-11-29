var markMass = 59;
var johnMass = 78;
var markHeight = 1.78;
var johnHeight = 1.75;

var markBMI = markMass /( markHeight * markHeight);
var johnBMI = johnMass /( johnHeight * johnHeight);
console.log(markBMI);
console.log(johnBMI);
var identifyHeigherBMI = johnBMI > markBMI;
console.log(identifyHeigherBMI);


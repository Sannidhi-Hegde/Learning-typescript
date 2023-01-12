// function sum(num1,num2){
//     return num1+num2
// }
// console.log(sum(5,2))
function sum(num) {
    return num + 2;
}
console.log(sum("5"));
function addTwo(num1, num2) {
    //num1.toUpperCase()
    return num1 + num2;
}
console.log(addTwo(3, 6));
function getUpper(val) {
    return val.toUpperCase();
}
//console.log(getUpper(4))
function greet(fn) {
    fn("hello world");
}
function printconsole(s) {
    console.log(s);
}
greet(printconsole);
function printnum(num) {
    return "hello";
    //return num
}
console.log(printnum(5));
var getVal = function (s) {
    return "hi";
};
console.log(getVal("ab"));
var fruits = ["apple", "orange", "grapes", 3];
fruits.map(function (fruit) {
    console.log(fruit);
    console.log(typeof (fruit));
});

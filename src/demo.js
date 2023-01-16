//types
//number and string
var x = 1234.87;
console.log(x);
//console.log(x.toExponential())
//x="hello"
var user = "abcd";
console.log(user);
console.log(user.replace("abcd", "xyz"));
//boolean
var isEligible = true;
isEligible = false;
//isEligible=12
if (isEligible) {
    console.log("yes");
}
else {
    console.log("no");
}
//any
var item;
function getItems() {
    //return "pen"
    //return 1234
    return true;
}
item = getItems();
console.log(item);
//array
var nums = [1, 2, 3];
var strs = ["a", "b", "c"];
var items = [12, "a"];
//let prod:[number,string]=[12,"a","b"]

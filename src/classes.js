var details = /** @class */ (function () {
    function details(first, last) {
        this.city = "bangalore"; //needs to be initialised if it is not in constructor
        this.first = first;
        this.last = last;
        this.city = "chennai";
    }
    return details;
}());
var ab = new details("abcd", "xyz");
//ab.city

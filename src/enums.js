var seatchoice;
(function (seatchoice) {
    seatchoice[seatchoice["first"] = 10] = "first";
    seatchoice[seatchoice["second"] = 11] = "second";
    seatchoice["third"] = "third";
    seatchoice[seatchoice["fourth"] = 4] = "fourth";
})(seatchoice || (seatchoice = {}));
var seat = seatchoice.first;

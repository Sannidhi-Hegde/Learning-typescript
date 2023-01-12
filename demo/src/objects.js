//?=optional
function printname(n) {
    console.log(n.firstname + " " + n.lastname); //lastname possibly be undefined
    console.log(n.firstname);
    if (n.lastname != undefined) {
        console.log(n.firstname + " " + n.lastname);
    }
    else {
        console.log(n.firstname);
    }
}
printname({ firstname: "sannidhi" });

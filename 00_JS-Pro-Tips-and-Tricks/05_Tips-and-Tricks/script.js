/*********************
* Short Conditionals *
*********************/

// value declare
let captain = "Dhoni";

// Instead of doing this
if (captain === "Dhoni"){
    console.log("❤️")
}

// we can use &&
captain === "Dhoni" && console.log("❤️");

// And instead of doing this
if (captain !== "Dhoni"){
    console.log("👿")
}

// we can use ||
captain === "Dhoni" || console.log("👿");
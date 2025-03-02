/*
Calculate the slope of a line. Slope is calculated as
rise / run, where rise is distance between y coordinates,
and run is distance between x coordinates.
Use: slp = slope(x1, y1, x2, y2) */
//slp = (y2 - y1) / (x2 - x1);
let x1= 1;
let x2 = 2;

let y1 = 1;
let y2 = 3;

function slopecal( x1, y1, x2, y2){

    let slp = (y2 - y1) / (x2 - x1);
    console.log(`${slp}`);
    return slp;
}

export { slopecal}
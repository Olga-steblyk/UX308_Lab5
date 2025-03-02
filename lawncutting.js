//Given the  width of a lawn in metres, length of a lawn in metres 
// and the square metres cut per minute calculate the minutes it 
// would take to mow that lawn. 
// Test at least 3 lawn sizes

var width = 7;
var length = 8;
var sqm = 10; // squre meters cut per minutine

function lawncutting( width, length, sqm){
    let area = width * length;
    let min = area / sqm;
    return min;
}
export {lawncutting}
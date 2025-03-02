//4. yee_ha takes an integer parameter and returns one of the following strings:
/*
"Yee" if number is evenly divisible by 3
"Ha" if number is evenly divisible by 7
"Yee Ha" if number is evenly divisible by both 3 and 7
"Nada" if number is none of the above*/

var num = 21;
var response = " ";
function yeeha (num){
 if (num % 7 == 0  && num % 3 == 0 ){
    console.log("Yee Ha");
    return response = `Yee Ha`;
 }else if (num % 3 == 0) {
 	console.log("Yee");
 	return response = `Yee`;
 }else if ( num % 7 ==0){
 	console.log("Ha");
 	return response = `Ha`;
 }else {
 	console.log("Nada");
 	return response = `Nada`;

 }
}

export { yeeha}
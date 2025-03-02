var airqual = 34;
var results;

function airqualityindex(airqual){

if (airqual <50){
    console.log(`Your input of ${airqual} is Good`);
    return results= `Your input of ${airqual} is Good`;
}else if (airqual >=50 && airqual <= 100){
    console.log(`Your input of ${airqual} is Moderate`);
    return results= `Your input of ${airqual} is Moderate`;
}else if (airqual >=101 && airqual <=150){
    console.log(`Your input of ${airqual} is Unhealthy for Sensitive Groups`);
    return results= `Your input of ${airqual} is Unhealthy for Sensitive Groups`;
}else if (airqual >=151 && airqual <=200){
    console.log(`Your input of ${airqual} is Unhealthy`);
    return results= `Your input of ${airqual} is Unhealthy`;
}else if (airqual >= 201 && airqual <=300){
    console.log(`Your input of ${airqual} is Very Unhealthy`);
    return results= `Your input of ${airqual} is Unhealthy`;
}else if (airqual >300){
    console.log(`Your input of ${airqual} is Hazardous`);
    return results= `Your input of ${airqual} is Hazardous`;
}else {
    return results= "Your input is invalid please try again";
}
return; 
// end of function
}

export {airqualityindex}
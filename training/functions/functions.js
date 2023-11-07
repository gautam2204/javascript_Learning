
function calculations(a,b)
{
    console.log(a,b)
}
calculations(2,3)
calculations(4,5)

function calculationsReturn(a,b)
{
    return a+b;
}

let val = calculationsReturn(1,2)
console.log("val is = "+val)

//lambda function
let myVal = function (a,b){
    console.log("Print mVal"+myVal)
}
console.log(myVal(2,3))

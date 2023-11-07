try {
    let a = "simple";
    var myLen = a.length
    console.log("check on the value ="+myLen)
    let c = 2/0;
    console.log(c);
    let b = 3;
    console.log("calculation is done")
} catch (error) {
    console.log("Error is ->"+error)
}
finally
{
    console.log("in finally")
}
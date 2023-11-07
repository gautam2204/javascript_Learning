function check()
{
    var a = 10;
    let b = 20;
    const c = 30;
    if(a!=b)
    {
        var a = 100;
        let b = 200;
        const c = 300;
        console.log("inside"+a)
        console.log("inside"+b)
        console.log("inside"+c)
    }
    console.log("inside"+a)
    console.log("inside"+b)
    console.log("inside"+c) 
}
check()

function check_1()
{
    var a = 10;
    let b = 20;
    const c = 30;
    if(a!=b)
    {
         a = 100;
         b = 200;
         c = 300;
        console.log("inside"+a)
        console.log("inside"+b)
        console.log("inside"+c)
    }
    console.log("inside"+a)
    console.log("inside"+b)
    console.log("inside"+c) 
}
check_1()
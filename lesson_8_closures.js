console.log('function along with lexical scope is called closure')

function x()
{
    var a = 7;
    function y()
    {
        console.log(a);
    }
    y();
}
x();
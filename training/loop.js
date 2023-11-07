let loopArr = [91,23,4,5]

let i =0;
while(i<loopArr.length)
{
    console.log(loopArr[i])
    i++
}

let j =0
do {
    console.log(loopArr[j])
    j++
} while (j<loopArr.length);

for (let x=0;x<loopArr.length;x++)
{
    console.log(loopArr[x])
}

for (const key in loopArr) {
        console.log("IN")
        console.log(key)
}

for (const iterator of loopArr) {
    console.log("OF")
    console.log(iterator)
}
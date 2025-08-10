let num = 100;
console.log(`->${num}`)
while(num!=1)
{
    if(num%2==0)
    {
        num=num/2;
        console.log(`->${num}`)
    }
    else
    {
        num=3*num+1;
        console.log(`->${num}`)
    }
}
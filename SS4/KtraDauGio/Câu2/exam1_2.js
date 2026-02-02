let sum=0;
for(let i=1;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log(`${i}: FizzBuzz`);
    } else if(i%3==0 && i%5!==0){
        console.log(`${i}: Fizz`);
        sum+=i;
    } else if(i%5===0){
        console.log(`${i}: Buzz`);
    } else {
        console.log(i);
    }
}
console.log(sum);
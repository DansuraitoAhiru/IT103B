let price= [100, 200, 300, 400];
console.log(`--- Giá trị ---`)
for(let value of price){
    console.log(value);
}

console.log(`--- Vị trí (index) ---`)
for(let index in price){
    console.log(index);
}

let sum=0;
for(i=0;i<price.length;i++){
    if(i%2===0){
        sum+=price[i];
    }
}
console.log(`=> Tổng các phần tử trong mảng có vị trí index chẵn (0, 2, ...) = ${sum}`);
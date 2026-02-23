// Cú pháp cơ bản nhất của tạo hàm
// Hàm trả về giá trị
function handleSum(koyo=36, shino=63){
    console.log(arguments);
    let sum = koyo+shino;
    return sum;
}

// hàm ko trả về giá trị
function  displayMenu(){
    console.log(`List đồ ăn`)
}

let a,b;
// Dùng hàm
let sum1=handleSum(18, 598);
console.log(sum1);
let sum2=handleSum();
console.log(sum2);

console.log(displayMenu());

// Arrow Function
const handleName = (koyo, shino) => koyo+shino;
handleName();
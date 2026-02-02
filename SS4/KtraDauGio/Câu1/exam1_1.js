let n=prompt("Nhập 1 số nguyên bất kì:");
if(n%2===0){
    console.log(`Số ${n} là số chẵn`);
    alert(`Số ${n} là số chẵn`);
} else {
    console.log(`Số ${n} là số lẻ`);
    alert(`Số ${n} là số lẻ`);
}

if(n>0){
    console.log(`${n} là số dương`);
} else if(n<0){
    console.log(`${n} là số âm`);
} else {
    console.log(`${n} là 0`);
}

if(n>0){
    for(let i=0;i<=n;i++){
        console.log(i);
    }
} else {
    console.log(`Giá trị ${n} không hợp lệ để tạo dãy số`);
    alert(`Giá trị ${n} không hợp lệ để tạo dãy số`);
}
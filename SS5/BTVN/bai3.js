let booksId=[];
let booksName=[];
let inventoryQuantity=[];
let books;
let id;
let name;
let quantity;
let count=0;
let result="";
do{
    books=Number(prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay? (số nguyên dương)"));
} while(!Number.isInteger(books) || books<=0);

for(let i=1;i<=books;i++){
    do{
        id=prompt("Nhập mã sách (ko được để trống):").trim();
    } while(id==="");
    booksId.push(id);

    do {
        name=prompt("Nhập tên sách (ko được để trống):").trim();
    } while(name==="");
    booksName.push(name);
    do {
        quantity=Number(prompt("Nhập số lượng tồn kho hiện tại (số nguyên ≥ 0)"));

        if(quantity<=5){
            count++;
        }
    } while(quantity<=0 || !Number.isInteger(quantity));
    inventoryQuantity.push(quantity);
}

console.log(`Danh sách sách cần xem xét bổ sung (${booksId.length} loại)`);
for(let i=1;i<=books;i++){
    console.log(`${i}. Mã: ${booksId[i-1]} - Tên: ${booksName[i-1]} - Còn: ${inventoryQuantity[i-1]} bản`);
}

console.log(`\nSố sách có tồn kho ≤ 5 bản: ${count} loại`);

for(let i=1;i<=books;i++){
    if(inventoryQuantity[i-1]===0){
        result+=booksId[i-1]+" ";
    }
}
console.log(`Các mã sách đã hết hàng (0 bản): ${result}`);
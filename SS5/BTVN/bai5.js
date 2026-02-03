let booksId=[];
let booksName=[];
let booksCategory=[];
let inventoryQuantity=[];
let books;
let id;
let name;
let category;
let quantity;
let result="";
let programCount=0;
let min=0;

do {
    books=Number(prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?(số nguyên dương)"));
} while(!Number.isInteger(books) || books<=0);

for(let i=0;i<books;i++){
    do{
        id=prompt(`Nhập mã sách thứ ${i+1} (ko được để trống):`).trim().toUpperCase();
        if (booksId.includes(id)) {
            alert("Mã đã tồn tại! Nhập lại.");
        }
    } while(id==="" || booksId.includes(id));
    booksId.push(id);

    do {
        name=prompt("Nhập tên sách (ko được để trống):").trim();
    } while(name==="");
    booksName.push(name);

    category=prompt(`Nhập các thể loại (nhập một chuỗi, các thể loại cách nhau bởi dấu phẩy, ví dụ: "Lập trình,JavaScript,Web")`);
    booksCategory.push(category);

    do {
        quantity=Number(prompt("Nhập số lượng tồn kho hiện tại (số nguyên ≥ 0)"));
    } while(quantity<=0 || !Number.isInteger(quantity));
    inventoryQuantity.push(quantity);
}

for(let i=0;i<booksCategory.length;i++){
    if(booksCategory[i].includes("Lập trình")){
        programCount++;
    }
    if(booksCategory[i].includes("JavaScript") && booksCategory[i].includes("Web")){
        result+=booksId[i]+" ";
    }
}

for(let i=0;i<inventoryQuantity.length;i++){
    if(inventoryQuantity[i]<inventoryQuantity[min]){
        min=i;
    }
}

console.log(`Tổng sách thuộc thể loại "Lập trình": ${programCount}`);
console.log(`Các mã sách thuộc cả JavaScript và Web: ${result}`);
console.log("Sách tồn kho thấp nhất:");
console.log(`Mã sách: ${booksId[min]}, Tên sách: ${booksName[min]}, Tồn kho: ${inventoryQuantity[min]}`);
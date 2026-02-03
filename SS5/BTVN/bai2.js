let lateBooks=[];
let books;
let count=0;
do {
    books=Number(prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn? (số nguyên dương)"));
} while(!Number.isInteger(books) || books<=0);

for(let i=1;i<=books;i++){
    let bookName=prompt(`Nhập tên sách bị trả muộn thứ ${i}:`);
    lateBooks.push(bookName);

    if(bookName.length>20){
        count++;
    }
}
console.log(`Tổng số sách đã được trả: ${books}`);

console.log(`Danh sách sách đã trả:`);
for(let i=1;i<=books;i++){
    console.log(`${i}. ${lateBooks[i-1]}\n`);
}
console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${count}`);
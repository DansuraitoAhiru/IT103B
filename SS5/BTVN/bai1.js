let bookList=[];
let books;
do {
    books=Number(prompt("Bạn muốn trả bao nhiêu cuốn sách? (số nguyên dương)"));
} while(!Number.isInteger(books) || books<=0);

for(let i=1;i<=books;i++){
    let bookName=prompt(`Nhập tên cuốn sách thứ ${i}:`);
    bookList.push(bookName);
}

console.log(`Tổng số sách đã được trả: ${books}`);

console.log(`Danh sách sách đã trả:`);
for(let i=1;i<=books;i++){
    console.log(`${i}. ${bookList[i-1]}\n`);
}
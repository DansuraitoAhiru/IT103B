let bookName=prompt("Nhập tên sách: ");
let authorName=prompt("Nhập tên tác giả: ");
let year=Number(prompt("Nhập năm xuất bản: "));
const now = new Date().getFullYear();
let price=prompt("Nhập giá sách: ");
let totalBooks=Number(prompt("Nhập số lượng: "));
let authorCode=authorName.trim().toUpperCase().slice(0, 3);

console.log(`--- PHIẾU NHẬP KHO ---`);
console.log(`Mã sách: ${authorCode}${year}-${(Math.floor(Math.random()*1000+1))}`);
console.log(`Tên sách: ${bookName.toUpperCase()}`);
console.log(`Tác giả: ${authorName.toUpperCase()}`);
console.log(`Năm xuất bản: ${year}`);
console.log(`Tuổi sách: ${now-year}`);
console.log(`Tổng giá trị: ${price*totalBooks}`);
console.log(`Ngăn kệ gợi ý: Kệ số ${Math.floor(Math.random()*10+1)}`);
let bookName=prompt("Nhập tên sách: ");
let borrower=prompt("Nhập tên người mượn: ");
let favLevel=Number(prompt("Nhập mức độ yêu thích (1-5): "));

if(favLevel<=0){
    console.log(`Mức độ ko hợp lệ!`);
} else if(favLevel===1 || favLevel===2){
    console.log(`Sách này bạn có thể cân nhắc mượn lại sau`);
} else if(favLevel===3){
    console.log(`Sách này khá ổn, có thể mượn`);
} else if(favLevel===4 || favLevel===5){
    console.log(`Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!`);
} else {
    console.log(`Mức độ ứ có hợp lệ, giừi ưi!`);
}
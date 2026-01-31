let totalBorrow=Number(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));

for(let i=1;i<=totalBorrow;i++){
    console.log(`Lượt mượn thứ ${i}`);
    let borrower=prompt("Nhập tên người mượn:");
    let bookName=prompt("Tên sách:");
    let borrowDay=Number(prompt("Nhập số ngày mượn:"));
    if(borrowDay>14){
        console.log(`Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)`)
    } else if(borrowDay<=0){
        console.log(`Số ngày mượn ko jp lệ!`);
    } else {
        console.log("Mượn thành công");
    }
}

console.log(`Tổng số lượt mượn: ${totalBorrow}`);
let totalReturn=Number(prompt("Hôm nay có bao nhiêu lượt trả sách?"));
let count=0;

for(let i=1;i<=totalReturn;i++){
    console.log(`Lượt trả thứ ${i}`);
    let borrower=prompt("Nhập tên người mượn:");
    let bookName=prompt("Tên sách:");
    let returnDay;
    
    do{
        returnDay=Number(prompt("Nhập số ngày mượn (>=1):"));
    } while(!Number.isInteger(returnDay) || returnDay<1);

    if(returnDay<=14){
        console.log(`Trả đúng hạn! Gúd boi!`);
    } else if(returnDay<=21){
        console.log(`Trả muộn nhẹ! Phạt nhắc nhở nha`);
        count++;
    } else {
        console.log(`Quá hạn nghiêm trọng! Cần ghi biên bản phạt`);
        count++;
    }
}
console.log(`Tổng số lượt trả sách: ${totalReturn}`);
console.log(`Số lượt trả muộn: ${count}`)
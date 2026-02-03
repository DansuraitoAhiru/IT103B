let cardId=[];
let borrower=[];
let borrowId=[];
let overDate=[];
let books;
let id;
let name;
let ids;
let days;
let number;
let count=0;
let warn=0;
let result="";
let max=0;

do{
    number=Number(prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?(số nguyên dương)"));
} while(number<=0 || !Number.isInteger(number));

for(let i=0;i<number;i++){
    do{
        id=prompt(`Nhập mã thẻ bạn đọc thứ ${i+1}:`).trim().toUpperCase();
        if(cardId.includes(id)){
            alert(`Mã ${id} đã bị trùng`);
        }
    } while(id==="" || cardId.includes(id));
    cardId.push(id);

    do {
        name=prompt(`Nhập tên bạn đọc thứ ${i+1} (không để trống):`).trim();
    } while(name==="");
    borrower.push(name);

    ids=prompt("Nhập chuỗi các mã sách đang mượn (cách nhau bởi dấu phẩy):").trim().toUpperCase();
    borrowId.push(ids);

    do{
        days=Number(prompt("Nhập số ngày quá hạn (số nguyên ≥ 0):"))
    } while(!Number.isInteger(days) || days<0);
    overDate.push(days);
}

console.log(`Danh sách bạn đọc quá hạn (${number}) người:`);
for(let i=0;i<cardId.length;i++){
    console.log(`${i+1}. Mã thẻ: ${cardId[i]} | Tên: ${borrower[i]} | Sách đang mượn: ${borrowId[i]} | Quá hạn: ${overDate[i]} ngày`);
}

for(let i=0;i<overDate.length;i++){
    if(overDate[i]>=10){
        count++;
    } else if(overDate[i]>=7){
        warn++;
    }

    if(overDate[i]>overDate[max]){
        max=i;
    }
}

for(let i=0;i<cardId.length;i++){
    if(borrowId[i].includes("JS") && borrowId[i].includes("PYT")){
        result+=cardId[i]+" ";
    }
}

console.log(`Các bạn đọc đang mượn cả sách JS* và PYT*: ${result}`);

console.log(`Bạn đọc có số ngày quá hạn nhiều nhất: ${borrower[max]} (${overDate[max]} ngày)`);

if(warn===0){
    console.log("Tình hình trả sách hôm nay khá tốt!");
}
else if(warn<=4){
    console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
}
else{
    console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}
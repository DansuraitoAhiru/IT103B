let check;
let bookId;
let bookName;
let number;
let status;
let checkCount=0;
let lostCount=0;
let soldCount=0;

do{
    check=prompt("Tiếp tục kiểm kê sách tiếp theo? (có/không)");
    if(check==="có"){
        do {
            bookId=prompt("Nhập mã sách:");
        } while(bookId==="" || bookId===" ");
        bookName=prompt("Nhập tên sách:");
        do {
            number=Number(prompt("Nhập số lượng thực tế đang có trong kho (số nguyên ≥ 0):"))
        } while(!Number.isInteger(number) || number<0);
        do {
            status=Number(prompt("Nhập tình trạng sách (1 hoặc 2):"));
        } while(!Number.isInteger(status) || status !== 1 && status !== 2);
        checkCount++;

        if(status===1){
            if(number===0){
                console.log(`Sách hết`);
                soldCount++;
            } else if(number>=10){
                console.log("Sách tồn kho nhiều!");
            } else {
                console.log(`Sách tồn kho bình thường!`);
            }
        } else if(status===2){
            console.log(`Sách mất!`);
            lostCount++;
        }
    } else if(check==="không"){
        console.log(`Tổng số sách đã kiểm kê: ${checkCount}`);
        console.log(`Số sách mất: ${lostCount}`);
        console.log(`Số sách hết hàng: ${soldCount}`);
    } else {
        alert(`Chúng tôi ko có lựa chọn lày!`);
    }
} while(check==="có" || check !== "không");
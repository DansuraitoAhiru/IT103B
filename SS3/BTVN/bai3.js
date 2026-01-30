let extend;
let successCount=0;
let failCount=0;
let name;
let bookName;
let borrowDay;
let extendDay;

do {
    extend=confirm("Có yêu cầu gia hạn mới không? (ok/hủy)");

    if(extend){
        name=prompt("Nhập tên bạn: ");
        bookName=prompt("Nhập tên sách");
        do {
            borrowDay=Number(prompt("Nhập số ngày mượn hiện tại (>=1): "));
        } while(!Number.isInteger(borrowDay) || borrowDay<1);
        do {
            extendDay=Number(prompt("Nhập số ngày muốn gia hạn thêm (>=1): "));
        } while(!Number.isInteger(extendDay) || extendDay<1);

        if((borrowDay+extendDay)>60){
            console.log(`Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa!\n`);
            document.write(`Không được gia hạn: Tổng thời gian vượt quá 60 ngày tối đa!<br>`);
            failCount++;
        } else if((borrowDay+extendDay)>45){
            console.log(`Không được gia hạn: Đã mượn quá lâu (>45 ngày)!\n`);
            document.write(`Không được gia hạn: Đã mượn quá lâu (>45 ngày)!<br>`);
            failCount++;
        } else if((borrowDay+extendDay)<=30){
            console.log(`Gia hạn thành công!\n`);
            document.write(`Gia hạn thành công!<br>`);
            successCount++;
        }
    } else {
        console.log(`Kết thúc chương trình! Byebye!\n`);
        document.write(`Kết thúc chương trình! Byebye!<br>`)
    }
} while(extend);
console.log(`Số lần gia hạn thành công: ${successCount}\n`);
document.write(`Số lần gia hạn thành công: ${successCount} <br>`);
console.log(`Số lần gia hạn không thành công : ${failCount}\n`);
document.write(`Số lần gia hạn không thành công : ${failCount} <br>`);
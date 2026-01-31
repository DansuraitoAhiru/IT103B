let booking;
let borrower;
let bookId;
let bookName;
let days;
let prior;
let bookingCount=0;
let successCount=0;
let failCount=0;
let waitCount=0;

do {
    booking=prompt("Có yêu cầu đặt mượn trước mới không? (có/không)");
    if(booking==="có"){
        borrower=prompt("Nhập tên bạn:");
        bookId=prompt("Nhập mã sách muốn đặt trước:");
        bookName=prompt("Nhập tên sách:");
        do {
            days=Number(prompt("Nhập số ngày dự kiến chờ (người dùng ước lượng, số nguyên ≥ 1):"));
        } while(!Number.isInteger(days) || days<1);
        do{
            prior=Number(prompt("Nhập mức độ ưu tiên (nhập số 1 = Sinh viên bình thường, 2 = Giảng viên/Nghiên cứu sinh, 3 = Nhân viên thư viện / Đặc cách):"));
        } while(!Number.isInteger(prior) || prior <1 || prior>3);
        bookingCount++;

        if(days>45){
            console.log(`Từ chối: Thời gian chờ quá lâu (>45 ngày)`);
            failCount++;
        } else if(prior===3){
            console.log(`Đặt trước thành công - Ưu tiên đặc cách cao nhất`);
            successCount++;
        } else if(prior===2 && days<=30){
            console.log(`Đặt trước thành công - Ưu tiên giảng viên/nghiên cứu`);
            successCount++;
        } else if(prior===1 && days<=21){
            console.log(`Đặt trước thành công!`);
            successCount++;
        } else {
            console.log(`Đặt trước tạm thời - Chờ xét duyệt thêm`);
            waitCount++;
        }
    } else if(booking==="không"){
        console.log(`Tổng số yêu cầu đã xử lý: ${bookingCount}`);
        console.log(`Số yêu cầu được đặt trước thành công: ${successCount}`);
        console.log(`Số yêu cầu bị từ chối: ${failCount}`);
        console.log(`Số yêu cầu chờ xét duyệt: ${waitCount}`);
    } else {
        alert(`Chúng tôi ko có lựa chọn lày!`);
    }
} while(booking==="có" || booking != "không");
let feedback;
let borrower;
let cardId;
let type;
let level;
let note;
let feedbackCount=0;
let seriousCount=0;
let midCount=0;
let lowCount=0;
let suggestCount=0;
let positiveCount=0;

do {
    feedback=prompt("Có khiếu nại/phản hồi mới từ bạn đọc không? (có/không)");
    if(feedback==="có"){
        do {
            borrower=prompt("Nhập tên bạn (không được để trống):");
        } while(borrower==="" || borrower===" ");
        cardId=prompt("Nhập mã thẻ bạn đọc (nếu có, có thể để trống):");
        do {
            type=Number(prompt("Nhập loại phản hồi (nhập số 1 = Phàn nàn / Khiếu nại, 2 = Đề xuất cải thiện, 3 = Phản hồi tích cực / Khen ngợi):"));
        } while(!Number.isInteger(type) || type<1 || type>3);
        note=prompt("Nhập nội dung ngắn gọn (chỉ để tham khảo, không dùng tính toán):");
        feedbackCount++;

        if(type===1){
            do {
                level=Number(prompt("Nhập mức độ nghiêm trọng (nhập số 1 = Nhẹ (có thể xử lý nhanh) 2 = Trung bình 3 = Nghiêm trọng (cần báo cáo lãnh đạo))"));
            } while(!Number.isInteger(level) || level<1 || level>3);

            if(level===3){
            console.log(`Chuyển ngay lãnh đạo - Khiếu nại nghiêm trọng`);
            seriousCount++;
            } else if(level===2){
            console.log(`Ghi nhận, sẽ xử lý trong ngày - Khiếu nại trung bình`);
            midCount++;
            } else if(level===1){
            console.log(`Xử lý ngay tại quầy - Khiếu nại nhẹ`);
            lowCount++;
            }
        } else if(type===2){
            console.log(`Cảm ơn! Đề xuất đã được ghi nhận`);
            suggestCount++;
        } else if(type===3){
            console.log(`Cảm ơn bạn đã phản hồi tích cực!`);
            positiveCount++;
        }
    } else if(feedback==="không"){
        console.log(`Tổng số phản hồi/khiếu nại đã xử lý: ${feedbackCount}`);
        console.log(`Số khiếu nại nghiêm trọng (mức 3): ${seriousCount}`);
        console.log(`Số khiếu nại trung bình (mức 2): ${midCount}`);
        console.log(`Số khiếu nại nhẹ (mức 1): ${lowCount}`);
        console.log(`Số đề xuất cải thiện: ${suggestCount}`);
        console.log(`Số phản hồi tích cực: ${positiveCount}`);
    } else {
        alert(`Chúng tôi ko có lựa chọn lày!`);
    }
} while(feedback==="có" || feedback != "không");
let username=prompt("Nhập tên người dùng: ");
let role=prompt("Nhập vai trò (admin,student,guest): ");
let balance=prompt("Nhập số dư tài khoản thẻ: ");
let status=prompt("Nhập trạng thái thẻ thư viện (Nhập true nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa): ");
let deadline=Number(prompt("Nhập số ngày quá hạn trả sách (0 là đúng hạn, 5 là quá hạn 5 ngày): "));

console.log(`--- HỆ THỐNG MƯỢN TRẢ ---`)
if(username==="" || username===" "){
    console.log(`Tên người dùng ko được để trống!`);
} else {
    console.log(`Người dùng: ${username}`);
}

if(role==="admin"){
    console.log(`Quyền hạn: Chào Admin, bạn có toàn quyền hệ thống`);
} else if(role==="student"){
    console.log(`Quyền hạn: Chào sinh viên, bạn có thể mượn sách`);
} else if(role==="guest"){
    console.log(`Quyền hạn: Chào khách, bạn chỉ có thể đọc tại chỗ`);
} else {
    console.log(`Quyền hạn: Lỗi. Vai trò không hợp lệ!`);
}

if(role==="student" || role==="admin") {
    if(balance>0){
        if(status==="true"){
            console.log(`Kết quả mượn: ĐƯỢC PHÉP MƯỢN SÁCH`);
        } else {
            console.log(`Kết quả mượn: YÊU CẦU BỊ TỪ CHỐI vì thẻ đã ko còn hiệu lực hoặc bị khóa!`);
        }
    } else {
        console.log(`Kết quả mượn: YÊU CẦU BỊ TỪ CHỐI vì số dư ko đủ`);
    }
} else {
    console.log(`Kết quả mượn: YÊU CẦU BỊ TỪ CHỐI  vì quyền hạn ko hợp lệ`);
}

if (deadline <= 0) {
    console.log(`Cảm ơn bạn đã trả đúng hạn`);
} else if (deadline <= 5) {
    console.log(`Tình trạng trả sách: Quá hạn ${deadline} ngày`);
    console.log(`Tiền phạt: ${5000 * deadline} VNĐ`);
} else if (deadline <= 10) {
    console.log(`Tình trạng trả sách: Quá hạn ${deadline} ngày`);
    console.log(`Tiền phạt: ${10000 * deadline} VNĐ`);
} else {
    console.log(`TÀI KHOẢN BỊ KHÓA!`);
    console.log(`Tiền phạt: ${200000 * deadline} VNĐ`);
}
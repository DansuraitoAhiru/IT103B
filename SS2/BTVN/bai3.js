let bookName=prompt("Nhập tên sách: ");
let bookType=prompt("Nhập thể loại sách: ");
let bookStatus=prompt("Nhập tình trạng sách: ");

if(bookType==="Khoa học" || bookType==="Lịch sử"){
    if(bookStatus==="Có sẵn") {
        document.write(`Sách này có sẵn trong thư viện`);
    } else if(bookStatus==="Đã mượn"){
        document.write(`Sách đã được mượn`);
    } else {
        document.write(`Chúng tôi từ chối nhận trạng thái lày`)
    }
} else if(bookType==="Văn học" || bookType==="Truyện"){
    document.write(`Sách này có thể đọc giải trí`);
} else {
    document.write(`Thể loại này độc lạ đấy`);
}
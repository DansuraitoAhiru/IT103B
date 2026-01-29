let bookName=prompt("Nhập tên sách: ");
let borrower=prompt("Nhập tên người mượn: ");
let bookStatus=prompt("Nhập trạng thái sách  (có sẵn, đã mượn, không có sẵn): ");
let borrowDay=Number(prompt("Nhập số ngày mượn: "));
let card=confirm("Bạn có thẻ ko?");

if(bookStatus==="có sẵn"){
    if(card){
        console.log(`Chúc mừng, bạn có thể mượn sách này`);
    } else {
        console.log(`Bạn không thể mượn sách nếu không có thẻ thư viện!`);
    }
} else if(bookStatus==="đã mượn"){
    if(borrowDay>0 && borrowDay<30){
        if(card){
            console.log(`Sách đang được mượn, vui lòng đợi đến khi trả lại`);
        } else {
            console.log(`Bạn không thể mượn sách nếu không có thẻ thư viện!`);
        }
    } else {
        console.log("Ngày mựn ko hựp lệ!");
    }
} else if(bookStatus==="không có sẵn"){
    console.log(`Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau`);
} else {
    console.log(`Thông tin không hợp lệ, vui lòng nhập lại!`)
}
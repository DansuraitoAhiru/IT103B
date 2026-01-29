let bookName=prompt("Nhập tên sách: ");
let bookStatus=prompt("Nhập trạng thái sách (có sẵn hay đã mượn): ");
let publicYear=Number(prompt("Nhập năm xuất bản: "));
let currentYear=new Date().getFullYear();
let bookAge=currentYear-publicYear;

if(bookAge<=0){
    console.log("Sách sắp xuất bản hoặc sắp nhập! Xin hãy chờ!");
} else if(bookStatus==="có sẵn"){
    if(bookAge<=5){
        console.log(`Sách này mới và có sẵn để mượn`);
    } else {
        console.log(`Sách này có sẵn nhưng đã lâu năm`);
    }
} else if(bookStatus==="đã mượn"){
    if(bookAge<=10){
        console.log('Sách này đã mượn nhưng khá mới, có thể mượn lại sau');
    } else {
        console.log(`Sách này đã mượn và khá cũ`);
    }
} else {
    console.log(`Chúng tôi ko có trạng thái này!`)
}
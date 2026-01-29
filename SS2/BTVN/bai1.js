let bookName=prompt("Nhập tên sách: ");
let authorName=prompt("Nhập tên tác giả: ");
let publicYear=Number(prompt("Nhập năm xuất bản: "));
let currentYear=new Date().getFullYear();

if(publicYear>currentYear){
    console.log(`Năm xuất bản ko hợp lệ!`);
}else if(publicYear===currentYear){
    console.log(`Đây là sách mứi!`);
} else if(0<(currentYear-publicYear) && (currentYear-publicYear)<=5){
    console.log(`Sách khá mứi!`)
} else {
    console.log(`Sách khá cú!`)
}
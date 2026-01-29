let totalBooks=Number(prompt("Nhập số lượng sách: "));
if(totalBooks<=0){
    console.log("Số lượng ko hợp lệ");
}else if(totalBooks<10) {
    console.log(`Thư viên có ít sách`);
} else if(totalBooks<21){
    console.log(`Thư viện có số lượng sách vừa đủ`);
} else {
    console.log(`Thư viện có nhiều sách`)
}
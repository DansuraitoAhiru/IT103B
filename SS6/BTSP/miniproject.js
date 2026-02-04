let username;
let pass;
let libraries = ["Toán", "Văn", "Anh"];
let max=3;
let count=0;
let choice;

while(count<max){
    username=prompt("Nhập tên người dùng:");
    pass=prompt("Nhập mật khẩu:");

    if(username==="admin" && pass==="12345"){
        alert(`Đăng nhập thành công!`);
        break;
    }

    count++;
    if(username !== "admin" && pass !== "12345"){
        alert(`Sai cả tài khoản và mặt khẩu! Bạn còn ${max-count} lần`)
    } else if(username !== "admin"){
        alert(`Sai tài khoản! Bạn còn ${max-count} lần`);
    } else if(pass !== "12345"){
        alert(`Sai mật khẩu! Bạn còn ${max-count} lần`);
    }

}
if(count === max){
    alert(`Tài khoản bị khóa! Hết cứu!`);
} else {
    do {
        choice=Number(prompt(`--- HỆ THỐNG QUẢN TRỊ THƯ VIỆN 4.0 ---
1. Nhập thêm lô sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách
4. Cập nhật tên sách
5. Đảo ngược thứ tự kệ sách
6. Nhập kho từ nguồn khác
7. Thoát chương trình
Vui lòng chọn (1-7):`));

        switch(choice){
            case 1:
                let newBook=prompt("Nhập danh sách tên sách (cách nhau bởi dấu phẩy):");
                let list=newBook.split(",");
                for(let i=0;i<list.length;i++){
                    libraries.push(list[i].trim());
                }
                alert(`Đã thêm ${list.length} sách vào kho`);
                break;
            case 2:
                alert(`Danh sách đã được in ra console (F12).`);
                console.log(`--- DANH SÁCH SÁCH HIỆN CÓ ---`)
                for(let i=0;i<libraries.length;i++){
                    console.log(`${i+1}. ${libraries[i]}`);
                }
                break;
            case 3:

                break;
            case 4:
                break;
            case 5:
                libraries.reverse();
                alert(`Thứ tự trên kệ đã thay đổi. Kiểm tra console.`);
                console.log(`--- Danh sách đảo ngược ---`);
                for(let i=0;i<libraries.length;i++){
                    console.log(`${i+1}. ${libraries[i]}`);
                }
                break;
            case 6:
                break;
            case 7:
                alert(`Hẹn gặp lại!`);
                break;
            default:
                alert(`Ko có lựa chọn ${choice}`);
                break;
        }
    } while(choice!==7);

}

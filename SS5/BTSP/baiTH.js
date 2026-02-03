let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
let choice;
let index;

do {
    choice = Number(prompt(`--- THƯ VIỆN KHOA HỌC --- \n1. Xem danh sách \n2. Nhập sách mới \n3. Mượn sách (Xóa) \n4. Sửa tên sách \n5. Sắp xếp kệ \n0. Thoát \nBạn chọn:`).trim());
    switch(choice){
        case 1:
            console.log(`=> Danh sách hiện tại (${books.length} cuốn):`);
            for(let i=0;i<books.length;i++){
                console.log(`${i+1}. ${books[i]}`);
            }
            break;
        case 2:
            let bookName;
            do {
                bookName=prompt("Nhập tên cuốn sách mới:").trim();
            } while(bookName==="");
            books.push(bookName);
            alert(`Đã thêm thành công!`);
            console.log(books);
            break;
        case 3:
            let borrow=prompt("Nhập tên sách muốn mượn:").trim();
            index=books.indexOf(borrow);
            if(index===-1){
                alert(`Lỗi: Không tìm thấy sách ${borrow}`);
            } else {
                books.splice(index, 1);
                alert(`Đã cho mượn cuốn ${borrow}`);
            }
            console.log(books);
            break;
        case 4:
            let change=prompt("Nhập tên sách cũ cần sửa:").trim();
            index = books.indexOf(change);
            if(index===-1){
                alert(`Lỗi: Không tìm thấy sách ${change}`);
            } else {
                let newName=prompt("Nhập tên mới:");
                books[index]=newName;
            }
            console.log(books);
            break;
        case 5:
            books.sort();
            console.log(books);
            break;
        case 0:
            alert(`Đăng xuất hệ thống! Hẹn gặp lại!`);
            break;
        default:
            alert(`Ko có lựa chọn nì!`);
            break;
    }
} while(choice !== 0);
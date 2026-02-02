let username;
let pass;
let max = 3;
let count = 0;
let accCount = 0;
let passCount = 0;
let choice;

while (username !== "admin" || pass !== "12345") {
    username = prompt("Mời bạn nhập tài khoản:");
    pass = prompt("Mời bạn nhập mật khẩu:");

    if (username === "admin" && pass === "12345") {
        alert("Đăng nhập thành công!");

        do {
            choice = Number(prompt("1. Phân loại mã số sách (Số nguyên chẵn/lẻ). \n2. Thiết kế bản đồ kho sách (Dạng lưới). \n3. Dự toán phí bảo trì sách theo năm. \n4. Tìm mã số sách may mắn. \n5. Thoát. \nMời bạn chọn chức năng:"));
            switch (choice) {
                case 1:
                    let bookId;
                    let idCount = 0;
                    let even = 0;
                    let odd = 0;
                    alert(`Nhập các mã số sách (Nhập 0 để dừng lại):`)
                    do {
                        bookId = Number(prompt("Nhập mã sách:"));

                        if (bookId === 0) {
                            break;
                        }
                        if (!Number.isInteger(bookId)) {
                            alert("Phải nhập số nguyên!");
                        }
                        if (bookId % 2 === 0) {
                            even++;
                        } else {
                            odd++;
                        }
                        idCount++;
                    } while (bookId !== 0);
                    console.log(`--- Kết quả phân loại mã sách ---`)
                    console.log(`- Tổng số lượng mã sách đã nhập: ${idCount}`);
                    console.log(`- Có ${even} mã số là số chẵn (Sách khoa học)`);
                    console.log(`- Có ${odd} mã số là số lẻ  (Sách nghệ thuật)`);
                    alert(`Đã phân loại xong! Xem kết quả tại Console (F12).`)
                    break;
                case 2:
                    let row=Number(prompt("Nhập số hàng (số nguyên dương):").trim());
                    let col=Number(prompt("Nhập số cột (số nguyên dương):").trim());
                    if(row<=0 || col<=0 || !Number.isInteger(row) || !Number.isInteger(col)){
                        alert(`Hàng và cột phải là số nguyên dương!`);
                        break;
                    }
                    console.log(`--- Bản đồ kho sách (${row}x${col}) ---`);
                    for(let hang=1;hang<=row;hang++){
                        for(let cot=1;cot<=col;cot++){
                            let note="";
                            if(hang===cot){
                                note="Kệ ưu tiên";
                            }
                            console.log(`[${hang}-${cot}](${note})`);
                        }
                    }
                    alert(`Đã in bản đồ kho ra Console (F12).`);
                    break;
                case 3:
                    let totalBooks = Number(prompt("Nhập số lượng sách hiện có:"));
                    let fee = Number(prompt("Nhập phí bảo trì cho 1 cuốn (VNĐ)::"));
                    let years = Number(prompt("Nhập số năm dự toán:"));

                    if (!Number.isInteger(totalBooks) || totalBooks <= 0 || !Number.isInteger(years) || years <= 0 || fee <= 0) {
                        alert(`Dữ liệu không hợp lệ!`);
                    } else {

                        console.log(`--- Dự toán phí bảo trì sách theo năm ---`);

                        for (let year = 1; year <= years; year++) {
                            let totalCost = fee * totalBooks;

                            console.log(`Năm ${year}: ${Math.round(totalCost)} VNĐ (Đơn giá: ${Math.round(fee)}đ/cuốn)`);
                            fee *= 1.1;
                        }

                        alert(`Đã in bảng dự toán ra Console (F12)`);
                    }
                    break;
                case 4:
                    let N = Number(prompt("Bạn muốn kiểm tra các mã sách từ 1 đến bao nhiêu? (Nhập N):"));
                    let count=0;

                    if (!Number.isInteger(N) || N <= 0) {
                        alert("N phải là số nguyên dương!");
                    } else {
                        console.log(`--- Danh sách mã sách may mắn (Bội số của 3, không chia hết cho 5) ---`);

                        let result="";
                        for (let i = 1; i <= N; i++) {
                            if (i % 3 === 0 && i % 5 !== 0) {
                                result+=i+" ";
                                count++;
                            }
                        }
                        console.log(result);
                        console.log(`=> Tổng cộng có ${count} mã may mắn.`)
                        alert(`Tìm thấy ${count} mã may mắn. Xem chi tiết tại Console.`);
                    }
                    break;
                case 5:
                    alert(` Hệ thống đăng xuất...Cảm ơn và hẹn gặp lại!`);
                    break;
                default:
                    alert(`Ko có lựa chọn lày!`);
                    break;
            }

        } while (!Number.isInteger(choice) || choice!=5);
    }

    count++;

    if (username !== "admin" && pass !== "12345") {
        alert(`Sai cả tài khoản và mật khẩu! Bạn còn ${max - count}`);
    } else if (pass !== "12345") {
        alert(`Sai mật khẩu! Bạn còn ${max - count}`);
    } else if (username !== "admin") {
        alert(`Sai tài khoản! Bạn còn ${max - count}`);
    }

    if (count === max) {
        alert(`Tài khoản bị khóa!`);
        break;
    }
}
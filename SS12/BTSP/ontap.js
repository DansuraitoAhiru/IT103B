const transactions = [
    { id: 1, description: "Lương tháng 3", amount: 15000000, type: "Thu nhập", category: "Lương", date: "2026-03-01", note: "Chuyển khoản" },
    { id: 2, description: "Mua cà phê", amount: -45000, type: "Chi tiêu", category: "Ăn uống", date: "2026-03-02", note: "" },
    { id: 3, description: "Freelance thiết kế", amount: 3000000, type: "Thu nhập", category: "Thưởng", date: "2026-03-05", note: "Thiết kế logo" },
    { id: 4, description: "Đổ xăng", amount: -120000, type: "Chi tiêu", category: "Di chuyển", date: "2026-03-04", note: "" },
    { id: 5, description: "Thanh toán tiền điện", amount: -850000, type: "Chi tiêu", category: "Sinh hoạt", date: "2026-03-03", note: "Tháng 2" },
    { id: 6, description: "Bán đồ cũ", amount: 500000, type: "Thu nhập", category: "Khác", date: "2026-03-08", note: "" },
    { id: 7, description: "Mua sách lập trình", amount: -320000, type: "Chi tiêu", category: "Giải trí", date: "2026-03-10", note: "" },
    { id: 8, description: "Thưởng KPI", amount: 2000000, type: "Thu nhập", category: "Đầu tư", date: "2026-03-09", note: "" }
];

const display = () => {
    let list = [];
    transactions.forEach((transaction) => {
        list.push(`ID: ${transaction.id} | Mô tả giao dịch: ${transaction.description} | Số tiền: ${transaction.amount.toLocaleString("vi-VN")} VNĐ | Kiểu: ${transaction.type} | Thể loại: ${transaction.category} | Ngày: ${transaction.date} | Ghi chú (có thể rỗng): ${transaction.note}`);
    });
    alert(`Danh sách giao dịch: \n${list.join("\n")}`);
};

const create = () => {
    let id, description, amount, type, category, date, note;

    while (true) {
        id = prompt("Nhập ID:").toUpperCase();
        if (id.trim() === "") {
            alert("ID ko được để trống!");
            continue;
        } else if (transactions.some(t => t.id === id)) {
            alert("ID đã tồn tại!");
            continue;
        } else {
            break;
        }
    }

    while (true) {
        description = prompt(`Nhập mô tả giao dịch:`);
        if (!description || description.trim() === "") {
            alert("Mô tả ko được để trống!");
        } else {
            break;
        }
    }

    while (true) {
        amount = +prompt("Nhập số tiền:");
        if (isNaN(amount)) {
            alert("Phải nhập số!");
            continue;
        } else if (amount === 0) {
            alert("Phải nhập số khác 0!");
            continue;
        } else {
            break;
        }
    }

    while (true) {
        type = prompt("Nhập loại (Thu nhập / Chi tiêu):");
        if (!type || type.trim() === "" || type !== "Thu nhập" && type !== "Chi tiêu") {
            alert("Chỉ được nhập 'Thu nhập' hoặc 'Chi tiêu'");
        } else {
            break;
        }
    }

    while (true) {
        category = prompt("Nhập thể loại cụ thể:");
        if (!category || category.trim() === ""
            || category !== "Lương" && category !== "Ăn uống" && category !== "Thưởng" && category !== "Di chuyển" && category !== "Giải trí" && category !== "Sinh hoạt" && category !== "Đầu tư" && category !== "Khác") {
            alert("Chỉ được nhập 1 trong 8 thể loại (Lương, Thưởng, Ăn uống, Sinh hoạt, Di chuyển, Đầu tư, Giải trí, Khác)");
        } else {
            break;
        }
    }

    while (true) {
        date = prompt("Nhập ngày (YYYY-MM-DD):");
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!regex.test(date)) {
            alert("Ngày ko hợp lệ!");  //.test() là method của RegExp (biểu thức chính quy) trong JavaScript. Nó dùng để kiểm tra một chuỗi có khớp với mẫu (pattern) hay không => trả về true/false
        } else {
            break;
        }
    }

    note = prompt("Nhập ghi chú (có thể bỏ trống):") || "";

    const newTransaction = {
        id,
        description,
        amount,
        type,
        category,
        date,
        note,
    };

    transactions.push(newTransaction);
    alert(`Đã thêm giao dịch ${newTransaction.description}!`);
};

const deleted = () => {
    let id = prompt("Nhập ID:").trim().toUpperCase();
    const index = transactions.findIndex((t) => String(t.id).toUpperCase() === id);

    if (index !== -1) {
        const removed = transactions[index];
        const confirm = prompt(`Có chắc muốn xóa giao dịch ID: ${removed.id} | Mô tả giao dịch: ${removed.description} | Số tiền: ${removed.amount.toLocaleString("vi-VN")} VNĐ | Kiểu: ${removed.type} | Thể loại: ${removed.category} | Ngày: ${removed.date} | Ghi chú (có thể rỗng): ${removed.note}`).trim().toLowerCase();
        if (confirm === "đồng ý" || confirm === "yes" || confirm === "y") {
            transactions.splice(index, 1);
            alert(`Đã xóa ${removed.description}`);
        } else {
            alert("Thất bại!");
        }
    } else {
        alert(`Ko tìm thấy ID: ${id}`);
    }
};

const update = () => {
    let id = prompt("Nhập ID:").trim().toUpperCase();
    const found = transactions.find((t) => String(t.id).toUpperCase() === id);

    if (found) {
        alert(`Tìm thấy ID: ${found.id} | Mô tả giao dịch: ${found.description} | Số tiền: ${found.amount.toLocaleString("vi-VN")} VNĐ | Kiểu: ${found.type} | Thể loại: ${found.category} | Ngày: ${found.date} | Ghi chú (có thể rỗng): ${found.note}`);
        let updateChoice = +prompt(`Chọn thuộc tính muốn sửa:
1. amount
2. description
3. category
4. date
5. note`);
        if (isNaN(updateChoice) || updateChoice < 1 || updateChoice > 5) {
            alert(`Ko có lựa chọn ${updateChoice}`);
        } else {
            switch (updateChoice) {
                case 1:
                    while (true) {
                        let newAmount = +prompt("Nhập số tiền:");
                        if (isNaN(newAmount)) {
                            alert("Phải nhập số!");
                            continue;
                        } else if (newAmount === 0) {
                            alert("Phải nhập số khác 0!");
                            continue;
                        } else {
                            found.amount = newAmount;
                            break;
                        }
                    }
                    break;
                case 2:
                    while (true) {
                        let newDescription = prompt(`Nhập mô tả giao dịch:`);
                        if (!newDescription || newDescription.trim() === "") {
                            alert("Mô tả ko được để trống!");
                        } else {
                            found.description = newDescription;
                            break;
                        }
                    }
                    break;
                case 3:
                    while (true) {
                        let newCategory = prompt("Nhập thể loại cụ thể:");
                        if (!newCategory || newCategory.trim() === ""
                            || newCategory !== "Lương" && newCategory !== "Ăn uống" && newCategory !== "Thưởng" && newCategory !== "Di chuyển" && newCategory !== "Giải trí" && newCategory !== "Sinh hoạt" && newCategory !== "Đầu tư" && newCategory !== "Khác") {
                            alert("Chỉ được nhập 1 trong 8 thể loại (Lương, Thưởng, Ăn uống, Sinh hoạt, Di chuyển, Đầu tư, Giải trí, Khác)");
                        } else {
                            found.category = newCategory;
                            break;
                        }
                    }
                    break;
                case 4:
                    while (true) {
                        let newDate = prompt("Nhập ngày (YYYY-MM-DD):");
                        const regex = /^\d{4}-\d{2}-\d{2}$/;
                        if (!regex.test(newDate)) {
                            alert("Ngày ko hợp lệ!");  //.test() là method của RegExp (biểu thức chính quy) trong JavaScript. Nó dùng để kiểm tra một chuỗi có khớp với mẫu (pattern) hay không => trả về true/false
                        } else {
                            found.date = newDate;
                            break;
                        }
                    }
                    break;
                case 5:
                    let newNote = prompt("Nhập ghi chú (có thể bỏ trống):") || "";
                    found.note = newNote;
                    break;
            }
            alert(`Đã cập nhật giao dịch ID ${id}`);
        }
    } else {
        alert(`Ko tìm thấy giao dịch ID ${id}`);
    }
};

const search = () => {
    let keyword = prompt("Nhập từ khóa (có thể để trống):").trim().toLowerCase();
    let minAmount = +prompt("Nhập số tiền tối thiểu (có thể để trống):");

    const result = transactions.filter((t) => {
        const matchKey = keyword === "" ||
            t.description.toLowerCase().includes(keyword) ||
            (t.note && t.note.toLowerCase().includes(keyword));

        const matchAmount = Math.abs(t.amount) >= minAmount;
        return matchKey && matchAmount;
    });

    if (result.length === 0) {
        alert(`Ko tìm thấy`);
        return;
    }

    let output = "Kết quả tìm kiếm:\n";
    result.forEach((t) => {
        output += `ID: ${t.id} | Mô tả: ${t.description} | Số tiền: ${t.amount.toLocaleString("vi-VN")} VNĐ | Ngày: ${t.date}\n`;
    });
    alert(output);
};

const filter = () => {
    let filterChoice = +prompt(`Lựa chọn cách lọc:
1. Theo type
2. Theo category`);
    if (isNaN(filterChoice) || filterChoice < 1 || filterChoice > 2) {
        alert(`Ko có lựa chọn ${filterChoice}`);
    } else {
        switch (filterChoice) {
            case 1:
                let keyword = prompt("Nhập từ khóa:").trim().toLowerCase();
                const list = transactions.filter((t) => {
                    const matchKey = t.type.toLowerCase().includes(keyword);
                    return matchKey;
                });
                if (list.length === 0) {
                    alert("Ko có giao dịch nào!");
                    return;
                }

                let result = "Danh sách giao dịch lọc được:\n";
                list.forEach((transaction) => {
                    result += `ID: ${transaction.id} | Mô tả giao dịch: ${transaction.description} | Số tiền: ${transaction.amount.toLocaleString("vi-VN")} VNĐ | Kiểu: ${transaction.type} | Thể loại: ${transaction.category} | Ngày: ${transaction.date} | Ghi chú (có thể rỗng): ${transaction.note}\n`;
                });

                const sum = list.reduce((prev, curr) => prev + curr.amount, 0);
                result += ` => Tổng tiền: ${sum.toLocaleString()} VNĐ\n`;
                const count = list.length;
                result += ` => Số lượng giao dịch: ${count}\n`;
                alert(result);
                break;
            case 2:
                let key = prompt("Nhập từ khóa:").trim().toLowerCase();
                const filtered = transactions.filter((t) => {
                    const matchKey = t.category.toLowerCase().includes(key);
                    return matchKey;
                });
                if (filtered.length === 0) {
                    alert("Ko có giao dịch nào!");
                    return;
                }

                let output = "Danh sách giao dịch lọc được:\n";
                filtered.forEach((transaction) => {
                    output += `ID: ${transaction.id} | Mô tả giao dịch: ${transaction.description} | Số tiền: ${transaction.amount.toLocaleString("vi-VN")} VNĐ | Kiểu: ${transaction.type} | Thể loại: ${transaction.category} | Ngày: ${transaction.date} | Ghi chú (có thể rỗng): ${transaction.note}\n`;
                });

                const sum_2 = filtered.reduce((prev, curr) => prev + curr.amount, 0);
                output += ` => Tổng tiền: ${sum_2.toLocaleString()} VNĐ\n`;
                const count_2 = filtered.length;
                output += ` => Số lượng giao dịch: ${count_2}\n`;
                alert(output);
                break;
        }
    }
};

const sort = () => {
    let sortChoice = +prompt(`Lựa chọn cách thức sắp xếp:
1. Theo ngày (mới nhất đến cũ nhất)
2. Theo giá trị tuyệt đối của số tiền giảm dần (|amount| lớn đến nhỏ)`);
    if (isNaN(sortChoice) || sortChoice < 1 || sortChoice > 2) {
        alert(`Ko có lựa chọn ${sortChoice}`);
        return;
    } else {
        switch (sortChoice) {
            case 1:
                const sorted_1 = transactions.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
                let result_1 = "Danh sách sau khi đã sắp xếp:\n"
                sorted_1.forEach((transaction) => result_1 += `ID: ${transaction.id} | Mô tả giao dịch: ${transaction.description} | Số tiền: ${transaction.amount.toLocaleString("vi-VN")} VNĐ | Kiểu: ${transaction.type} | Thể loại: ${transaction.category} | Ngày: ${transaction.date} | Ghi chú (có thể rỗng): ${transaction.note}\n`);
                alert(`${result_1}`);
                break;
            case 2:
                const sorted_2 = transactions.slice().sort((a, b) => Math.abs(b.amount) - Math.abs(a.amount));
                let result_2 = "Danh sách sau khi đã sắp xếp:\n"
                sorted_2.forEach((transaction) => result_2 += `ID: ${transaction.id} | Mô tả giao dịch: ${transaction.description} | Số tiền: ${transaction.amount.toLocaleString("vi-VN")} VNĐ | Kiểu: ${transaction.type} | Thể loại: ${transaction.category} | Ngày: ${transaction.date} | Ghi chú (có thể rỗng): ${transaction.note}\n`);
                alert(`${result_2}`);
                break;
        }
    }
};

const report = () => {
    const income = transactions.filter((t) => t.type === "Thu nhập")
        .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions.filter((t) => t.type === "Chi tiêu")
        .reduce((sum, t) => sum + t.amount, 0);
    const balance = transactions.reduce((sum, t) => sum + t.amount, 0);
    const maxEpense = transactions.filter((t) => t.type === "Chi tiêu")
        .reduce((acc, t) => {
            const cate = t.category;
            acc[cate] += Math.abs(t.amount);
            return acc;
        }, {});
    let maxCate = "";
    let maxAmount = 0;
    for (let cate in maxEpense) {
        if (maxEpense[cate] > maxAmount) {
            maxAmount = maxEpense[cate];
            maxCate = cate;
        }
    }

    const monthly = transactions.reduce((acc, t) => {
        const month = t.date.slice(0, 7);
        if (!acc[month]) {
            acc[month] = { income: 0, expense: 0 };
        }
        if (t.type === "Thu nhập") {
            acc[month].income += t.amount;
        } else {
            acc[month].expense += t.amount;
        }
        return acc;
    }, {});

    const over70 = Object.values(monthly).some((m) => m.income > 0 && m.expense > 0.7 * m.income);
    const allHaveNote = transactions.every((t) => t.note.trim() !== "");

    let result = "===== BÁO CÁO TÀI CHÍNH =====\n";
    result += `Tổng thu nhập: ${income.toLocaleString("vi-VN")} VNĐ\n`;
    result += `Tổng chi tiêu: ${expense.toLocaleString("vi-VN")} VNĐ\n`;
    result += `Số dư hiện tại: ${balance.toLocaleString("vi-VN")} VNĐ\n`;
    result += `Danh mục chi tiêu nhiều nhất: ${maxCate}\n`;
    result += `Có tháng chi vượt 70% thu nhập không: ${over70 ? "Có" : "Không"}\n`;
    result += `Tất cả giao dịch có note không: ${allHaveNote ? "Có" : "Không"}\n`;
    alert(result);
}

let choice;
while (choice != 0) {
    choice = +prompt(`1. Xem tất cả giao dịch
2. Thêm giao dịch mới
3. Xóa giao dịch
4. Sửa giao dịch
5. Tìm kiếm giao dịch
6. Lọc theo loại / danh mục
7. Sắp xếp giao dịch
8. Xem báo cáo tài chính
0. Thoát
Nhập lựa chọn (0-8):`);

    switch (choice) {
        case 0:
            alert("Cảm ơn và hẹn gặp lại!");
            break;
        case 1:
            display();
            break;
        case 2:
            create();
            break;
        case 3:
            deleted();
            break;
        case 4:
            update();
            break;
        case 5:
            search();
            break;
        case 6:
            filter();
            break;
        case 7:
            sort();
            break;
        case 8:
            report();
            break;
        default:
            alert(`Ko có lựa chọn ${choice}`);
            break;
    }
}
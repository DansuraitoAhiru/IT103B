let names = ["Bảy viên bi rồng", "Conan", "5 tô bún", "Gái nói tiếng việt", "Jojo", "Chú thuật hồi chiến", "Chú bé bán than và cô em gái dính lời nguyền"];
let prices = [750, 180, 550, 139, 650, 2000, 180];
let stocks = [1000, 5000, 0, 800, 150, 2000, 400];
let choice;

do {
    choice=+prompt(`--- HỆ THỐNG QUẢN LÝ KHO HÀNG ---
1. Lọc sản phẩm cao cấp (>500)
2. Kiểm định trạng thái dữ liệu (Hết hàng/Giá sàn)
3. Phân tích giá trị vốn hóa (Tổng tài sản)
4. Triển khai chiến dịch chiết khấu (Giảm 10%)
5. Truy vấn sản phẩm theo từ khóa
6. Báo cáo tình trạng tồn kho
7. Thoát chương trình
Vui lòng nhập lựa chọn của bạn (1 - 7):`).trim();
    switch(choice){
        case 1:
            const list=names.filter((element, index) => prices[index]>500);
            alert(`Danh sách sản phẩm cao cấp (>500):
${list.join(", ")}`);
            break;
        case 2:
            const soldOut=stocks.some((stock) => stock === 0 );
            const largerThan100=prices.every((price) => price>100)
            alert(`Kết quả kiểm định:
- Có sản phẩm hết hàng: ${soldOut ? "Có" : "Không"}
- Tất cả sản phẩm có giá > 100: ${largerThan100 ? "Đúng" : "Sai"}`);
            break;
        case 3:
            let total=prices.reduce((pre, curr, index) => pre + curr * stocks[index], 0);
            alert(`Tổng giá trị tài sản hiện có trong kho: ${total.toLocaleString()} VNĐ`);
            break;
        case 4:
            prices.forEach((price, index) => {
                prices[index]=price*0.9;
            });
            alert("Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm!");
            break;
        case 5:
            let search=prompt("Nhập tên người dùng:").trim().toLowerCase();
            let result=[];
            names.forEach((name, index) => {
                if(name.toLowerCase()===search){
                    result.push(`${name} - Giá: ${prices[index]} - Kho: ${stocks[index]}`);
                }
            });
            if(result.length>0){
                alert(`Kết quả tìm kiếm:
${result.join("\n")}`);
            } else {
                alert(`Ko tìm thấy sản phẩm này!`);
            }
            break;
        case 6:
            let inventory=stocks.map((stock) => stock > 0);
            let report=stocks.map((number, index) => {
                return `${names[index]}: ${inventory[index] ? "Còn hàng" : "Hết hàng"} (${number})`;
            });
            alert(`Báo cáo tồn kho:
${report.join("\n")}`);
            break;
        case 7:
            alert(`Đã thoát chương trình! Hẹn gặp lại!`);
            break;
        default:
            alert(`Lựa chọn ko hợp lệ. Vui lòng nhập từ 1 đến 7.`);
            break;
    }
} while(choice != 7);

let names = ["Bảy viên bi rồng", "Conan", "5 tô bún", "Gái nói tiếng việt", "Jojo", "Chú thuật hồi chiến", "Chú bé bán than và cô em gái dính lời nguyền"];
let prices = [750, 180, 550, 139, 650, 2000, 180];
let numbers = [1000, 5000, 0, 800, 150, 2000];
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
Vui lòng nhập lựa chọn của bạn (1 - 7):`);
    switch(choice){
        case 1:
            const list=names.filter((element, index) => prices[index]>500);
            alert(`Danh sách sản phẩm cao cấp (>500):
${list.join(", ")}`);
            break;
        case 2:
            const soldOut=numbers.some((number) => number === 0 );
            const largerThan100=prices.every((price) => price>100)
            alert(`Kết quả kiểm định:
- Có sản phẩm hết hàng: ${soldOut ? "Có" : "Không"}
- Tất cả sản phẩm có giá > 100: ${allPrices ? "Đúng" : "Sai"}`);
            break;
        case 4:
            let newPrices=prices.map((price) => price*0.9);
            alert("Đã cập nhật giảm giá 10% cho toàn bộ sản phẩm!");
            let priceTable=names.map((name, index) => {
                return `${name} - ${newPrices[index].toFixed(2)}`
            }).join("\n");
            alert(`Bảng giá mới: ${priceTable}`);
            break;
        case 7:
            alert(`Đã thoát chương trình! Hẹn gặp lại!`);
            break;
        default:
            alert(`Lựa chọn ko hợp lệ. Vui lòng nhập từ 1 đến 7.`);
            break;
    }
} while(choice != 7);
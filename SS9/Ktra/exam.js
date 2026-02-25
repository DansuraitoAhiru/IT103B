let orders=["Đơn hàng A", "Đơn hàng B", "Đơn hàng C", "Đơn hàng D", "Đơn hàng E"];
let revenues=[1500, 2800, 1200, -500, 3200];

const negativeNumber=revenues.some((element) => element < 0);
const largerThan500=revenues.every((revenue) => revenue > 500);
console.log(`- Có đơn hàng âm: ${negativeNumber ? true : false}
- Tất cả trên 500: ${largerThan500 ? true : false}`);

const netProfits=revenues.map((money) => money * 0.9);
console.log(`Giá các đơn hàng sau khi giảm:`);
console.log(netProfits);
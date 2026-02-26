// Khai báo đối tượng
// const user_name = {
//     key: value
// }

const user = {
  userName: `Nguyễn Văn A`,
  age: 35,
  isMarried: false,
};

// Thao tác đọc
// Truy cập thông qua ký tự "."
console.log("userName: ", user.userName);
console.log("age: ", user.age);
console.log("email: ", user.email);

// Truy cập thông qua ["key"]
console.log("userName:", user["userName"]);

// Thao tác đọc tất cả thông tin trong 1 đối tượng
for(const key in user){
  // console.log("Key: ", key);
  console.log("key - Value: ", user[key]);
}

// Lấy ra ds các keys của đối tượng (trả về 1 mảng các key)
console.log("Danh sách key:", Object.keys(user));
console.log("Danh sách value:", Object.values(user));
console.log("Danh sách key + value:", Object.entries(user));

console.log("user trc khi thêm:", user);
// Thêm key: value vào đối tượng
user.dateOfBirth = "20/11/1996";
console.log("user sau khi thêm:", user);

// Cập nhật đối tượng
user.userName="Lê van B";
console.log("user sau khi cập nhật:", user);

// Xóa key trong đối tượng: Dùng khi xóa trường ko cần thiết trc khi gửi dữ liệu từ form,...
delete user.isMarried;
console.log("usee sau khi xóa key:", user);

const products = [
  {
    id: 1,
    productName: "Cam",
    price: 1000000,
  },
  {
    id: 2,
    productName: "Xoài",
    price: 2000000,
  },
];

const formatCurrency = (price) => {
  return price.toLocaleString("it-IT", {style: "currency", currency: "VND"});
}

// Đọc dữ liệu
console.info("Ds sản phẩm");
products.forEach((product) => {
  console.log(product);
  console.log(` Tên sản phẩm: ${product.productName} - Giá: ${(formatCurrency(product.price))}`);
});

// Thêm dữ liệu
const newProduct = {
  id: 100,
  productName: "Gà",
  price: 3600000,
}
console.info("Danh sách sản phẩm sau khi thêm");
products.push(newProduct);
products.forEach((product) => {
  console.log(` Tên sản phẩm: ${product.productName} - Giá: ${(formatCurrency(product.price))}`);
});

// Cập nhât dữ kiệu
products[0].price=1234569;
console.info("Danh sách sản phẩm sau khi cập nhật");
products.forEach((product) => {
  console.log(` Tên sản phẩm: ${product.productName} - Giá: ${(formatCurrency(product.price))}`);
});

// Xóa dữ liệu
products.splice(0, 1);
console.info("Danh sách sản phẩm sau khi xóa");
products.forEach((product) => {
  console.log(` Tên sản phẩm: ${product.productName} - Giá: ${(formatCurrency(product.price))}`);
});

// Nếu key và value trùng tên nhau thì có thể xóa key và value
const userName="ahiru";
const clone={
  userName
}
console.log("clone:", clone);
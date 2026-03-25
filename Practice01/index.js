// Truy xuất (lấy ra) phần tử trong DOM
// getElementById
const titleElement = document.getElementById("title");
titleElement.innerHTML = "Mẹo mày bé";
console.log("titleElement", titleElement);
const title2element = document.getElementById("title2");
console.log("title2: ", title2element.innerText);

// querySelector: chỉ lấy 1 phần tử đầu tiên
const box1element = document.querySelector("#box1");
console.log("box1element: ", box1element);

const inputRadioElement = document.querySelector("input[type=radio]");
console.log("inputRadioElement: ", inputRadioElement);

// querySelectorAll: Lấy ra nhiều phần tử dựa vào selector
const boxElement = document.querySelectorAll(".box");
console.log("boxElement: ", boxElement);

const textElement = document.querySelectorAll("input[type=text]");
console.log("textElement: ", textElement);

// Lấy ra và thau đổi nội dung phần tử trong HTML
// Các bước thực hiện
// 1. Truy xuất phần tử cần lấy
const liemElement = document.querySelector("#theLiem");
// 2. Sử dụng các phương thức được cung cấp (innerHTML, innerText, textContent)
const liemContent = liemElement.innerHTML; 
console.log("Welcom to the Liêm với innerHTML: ", liemContent);
console.log("Welcom to the Liêm với textContent: ", liemElement.textContent);
console.log("Welcom to the Liêm với innerText: ", liemElement.innerText);

// Thay đổi nd
// Bước 1: truy xuất phần tử cần lấy
const productListElement = document.querySelector("#list-product");
// Bước 2: Cập nhất nd thông qua các phương thức (innerHTML, innerText, textContent)
// 2.1: Cập nhật nd dạng HTML (in dữ liệu ra ngoài giao diện dạng HTML)
productListElement.innerHTML = `
    <li>Monogatari</li>
    <li>Golden Wing 390T</li>
`
// 2.2: Cập nhật nd dạng text truyền thống (thay đổi nd vb)
// Tạo 1 mảng product (id, name, price). sử dụng kiến thức về DOM
// để render danh sách sản phẩm ra ngoài giao diện (sử dụng map() hoặc forEach());
let products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000
  },

  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000
  },

  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000
  },

  {
    id: 4,
    name: "USB 64GB",
    price: 120000
  },

  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000
  },

  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000
  },

  {
    id: 1669,
    name: "Honkai Star Rail",
    price: 0
  },

  {
    id: 6669993636,
    name: "Tuyển tập Monogatari",
    price: 50000
  }
];
let html="";
const tbodyElement = document.querySelector("#tbody");
products.forEach((p) => {
    html += `
    <tr>
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>${p.price.toLocaleString("vi-VN")} đ</td>
        <td><button>Sửa</button></td>
        <td><button>Xóa</button></td>
    </tr>
    `;
});
tbodyElement.innerHTML = html;

// Hiển thị dssv ra bảng (id, name, classname, email)
const students = [
  {
    id: 1,
    name: "Nguyễn Văn An",
    className: "CNTT4",
    email: "an.nguyen@example.com"
  },
  {
    id: 2,
    name: "Trần Thị Bình",
    className: "CNTT5",
    email: "binh.tran@example.com"
  },
  {
    id: 3,
    name: "Lê Văn Cường",
    className: "CNTT1",
    email: "cuong.le@example.com"
  },
  {
    id: 4,
    name: "Phạm Thị Dung",
    className: "CNTT4",
    email: "dung.pham@example.com"
  },
  {
    id: 5,
    name: "Hoàng Văn Em",
    className: "CNTT2",
    email: "em.hoang@example.com"
  }
];
const contentElement = document.querySelector("#content");
contentElement.innerHTML = students.map((s) => `
    <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.className}</td>
        <td>${s.email}</td>
        <td><button>Sửa</button></td>
        <td><button>Xóa</button></td>
    </tr>
`).join("");
console.log("DSSV: \n", contentElement.innerText);
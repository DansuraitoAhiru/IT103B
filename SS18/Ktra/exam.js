const products=[
    { stt: 1, id: "SP001", name: "Laptop Dell XPS 15", price: 25000000},
    { stt: 2, id: "SP002", name: "iPhone 15 Pro Max", price: 32900000},
    { stt: 3, id: "SP003", name: "Samsung Galaxy S24 Ultra", price: 28900000},
    { stt: 4, id: "SP004", name: "Tai nghe AirPods Pro 2", price: 5990000},
    { stt: 5, id: "SP005", name: "Bàn phím cơ Logitech MX Keys", price: 2990000},
    { stt: 6, id: "SP006", name: "Chuột không dây Logitech MX Master 3", price: 25000000},
    { stt: 7, id: "SP007", name: "Màn hình Dell UltraSharp U2720Q", price: 36000000},
    { stt: 8, id: "SP008", name: "Laptop Dell XPS 15", price: 25000000},
    { stt: 9, id: "SP009", name: "Laptop Dell XPS 15", price: 25000000},
];

let nextStt=10;

const tableBody=document.querySelector("#product-tbody");
const form=document.querySelector("#product-form");
const idInput=document.querySelector("#product-code")
const nameInput=document.querySelector("#product-name");
const priceInput=document.querySelector("#product-price");

const render=() => {
    if(Array.isArray(products)) {
        const productMaps=products.map((p) => {
            return `<tr>
                    <td>${p.stt}</td>
                    <td>${p.id}</td>
                    <td>${p.name}</td>
                    <td>${p.price.toLocaleString("vi-VN")}</td>
                    <td>
                    <div class="action-buttons">
                        <button class="btn-edit">Sửa</button>
                        <button class="btn-delete">Xóa</button>
                    </div>
                    </td>
                </tr>`
        });
        const html=productMaps.join("");
        tableBody.innerHTML=html;
    }
}
render();

const addTask=() => {
    const id=idInput.value.trim();
    const name=nameInput.value.trim();
    const price=priceInput.value.trim();
    if(name === "" || price === ""){
        alert("Tên hoặc giá sản phẩm không được để trống!");
        return;
    }

    if(name.length < 3){
        alert("Tên sản phẩm phải có ít nhất 3 ký tự!");
        return;
    }

    if(Number(price) <= 0){
        alert("Giá sản phẩm phải lớn hơn 0!");
        return;
    }

    const newProduct = {
        stt: nextStt++,
        id,
        name,
        price,
    };
    products.unshift(newProduct);
    form.reset();
    render();
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
});
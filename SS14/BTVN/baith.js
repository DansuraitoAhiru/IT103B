const products = [

    { id: 1, name: "Bánh Chưng Tranh Khúc", price: 150000, img: "https://raw.githubusercontent.com/nguyenquangan318/BTTH-IT103B-Session-14/refs/heads/main/img/banhchung.webp" },

    { id: 2, name: "Giò Lụa Ước Lệ", price: 180000, img: "https://raw.githubusercontent.com/nguyenquangan318/BTTH-IT103B-Session-14/refs/heads/main/img/giolua.jpg" },

    { id: 3, name: "Cành Đào Nhật Tân", price: 500000, img: "https://raw.githubusercontent.com/nguyenquangan318/BTTH-IT103B-Session-14/refs/heads/main/img/canhdao.webp" },

    { id: 4, name: "Mứt Tết Thập Cảm", price: 120000, img: "https://raw.githubusercontent.com/nguyenquangan318/BTTH-IT103B-Session-14/refs/heads/main/img/muttet.webp" },

    { id: 5, name: "Lì Xì May Mắn", price: 20000, img: "https://raw.githubusercontent.com/nguyenquangan318/BTTH-IT103B-Session-14/refs/heads/main/img/lixi.webp" },

    { id: 6, name: "Dưa Hấu Khắc Chữ", price: 60000, img: "https://raw.githubusercontent.com/nguyenquangan318/BTTH-IT103B-Session-14/refs/heads/main/img/duahau.jpg" }

];
let total=0;

//Lấy ra các phần tử
const productListElement=document.querySelector("#product-list");
const cartList=document.querySelector("#cart-list");
const totalPrice=document.querySelector("#total-price")

const formatCurrency=(price) => {
    return price.toLocaleString("it-IT", {style: "currency", currency: "VND"});
};

const renderProducts=(products) => {
    const productMaps=products.map((product) => {
        return `
            <div class="product-card">
                <img src="${product.img}" alt="">
                <h3>${product.name}</h3>
                <p class="price">${formatCurrency(product.price)}</p>
                <button class="btn-add" id="btn-add-${product.id}">Thêm vào giỏ</button>
            </div>
        `;
    });

    //Chuyển đổi thành 1 chuỗi
    productListElement.innerHTML=productMaps.join("");
    
    const buttons=document.querySelector()
    products.forEach((product) => {
        const btn=card.querySelector(`#btn-add-${product.id}`);
        btn.addEvenListener("click". function () {
            addTo(product);
        });
    });
};
renderProducts(products);

const addTo=(product) => {
    const emptyMsg=document.querySelector(".emptyMsg");
    if(emptyMsg){
        emptyMsg.remove();  // xóa dòng "chưa có món nào"
    }

    const li=document.createElement("li");  // Tạo thẻ li cho món hàng trong giỏ
    li.innerHTML=`
        <span class="cart-item-name">${products.name}</span>
            <div>
                <span class="cart-item-price">${products.price}</span>
                <button class="btn-remove">X</button>
            </div>
    `;
    cartList.appendChild(li);  // gán thẻ li vào danh sách giỏ hàng
    total+=product.price;
    totalPrice.innerText=formatCurrency(total);
}
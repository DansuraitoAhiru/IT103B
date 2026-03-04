const products = [
    { id: 1, name: "Bánh Chưng", price: 150000},
    { id: 2, name: "Giò Lụa", price: 180000},
    { id: 3, name: "Cành Đào", price: 500000},
    { id: 4, name: "Mứt Tết", price: 120000},
    { id: 5, name: "Lì Xì (Tệp)", price: 20000},
    { id: 6, name: "Dưa Hấu", price: 60000}
];

const productListElement=document.querySelector("#product-list");
const form=document.querySelector("#product-form");
const productName=document.querySelector(("#product-name"));
const productPrice=document.querySelector(("#product-price"));
const search=document.querySelector("#search-input");

const renderProducts=(products) => {
    const productMaps=products.map((p) => {
        const divElement=document.createElement("div");
        divElement.className="product";
        return `
            <li class="product-item">
                <h3>${p.name}</h3>
                <p>Giá: ${p.price.toLocaleString("vi-VN")} VND</p>
            </li>
        `;
    });
  
    productListElement.innerHTML=productMaps.join("");
};
renderProducts(products);

let nextId=7;
form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Lấy giá trị input
    const name=productName.value.trim();
    const price=+(productPrice.value.trim());

    if(name==="" || price<=0){
        alert("Ko hợp lệ!");
        return;
    }

    const newProduct = {
        id: nextId++,
        name,
        price
    };

    products.push(newProduct);
    renderProducts(products); //Thêm vào render

    //Xóa input
    productName.value="";
    productPrice.value="";
});

search.addEventListener("input", function (event) {
    const keyword=search.value.toLowerCase().trim();
    const items=document.querySelectorAll(".product-item");

    items.forEach(function (item) {
        const name=item.querySelector("h3").textContent.toLowerCase();
        if(name.includes(keyword)){
            item.style.display="";
        } else {
            item.style.display="none";
        }
    });
});
const products = [
    { id: 1, name: "Bánh Chưng", price: 150000},
    { id: 2, name: "Giò Lụa", price: 180000},
    { id: 3, name: "Cành Đào", price: 500000},
    { id: 4, name: "Mứt Tết", price: 120000},
    { id: 5, name: "Lì Xì (Tệp)", price: 20000},
    { id: 6, name: "Dưa Hấu", price: 60000}
];

const productListElement=document.querySelector("#product-list");

const formatCurrency=(price) => {
    return price.toLocaleString("it-IT", {style: "currency", currency: "VND"});
};

const renderProducts=(products) => {
    const productMaps=products.map((p) => {
        const divElement=document.createElement("div");
        divElement.className="product";
        return `
            <div>
                <h1>Tên sản phẩm: ${p.name}</h1>
                <p>Giá: ${p.price.toLocaleString("vi-VN")} VND</p>
            </div>
        `;
    });
    productListElement.innerHTML=productMaps.join("");
};
renderProducts(products);
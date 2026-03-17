let products=[
    { id: 1, name: "Monogatari", category: "Sách", price: 25000, quantity: 1000, description: "Omoshiroi"},
    { id: 2, name: "Tình iu", category: "Đồ gia dụng", price: 46271, quantity: 8000000, description: "Nai xừ"}
];
let nextId = 3;

let idUpdate = null;

const title = document.querySelector("#formTitle")
const form = document.querySelector("#productForm");
const nameInput = document.querySelector("#productName");
const categoryInput = document.querySelector("#productCategory");
const priceInput = document.querySelector("#productPrice");
const quantityInput = document.querySelector("#productQuantity")
const descriptionInput = document.querySelector("#productDescription");

const btnSubmit = document.querySelector("#submitBtn");
const btnCancell = document.querySelector("#cancellBtn");
const btnClear = document.querySelector("#clearAllBtn");

const searchInput=document.querySelector("#searchInput");
const filterCategory = document.querySelector("#filterCategory");

const table=document.querySelector("#productTable");
const tableBody = document.querySelector("#productTableBody")
const totalProducts = document.querySelector("#totalProducts");
const totalValue = document.querySelector("#totalValue");
const totalQuantity = document.querySelector("#totalQuantity");

const init=() => {
    renderProducts();
}

const renderProducts = () => {
    if(Array.isArray(products)) {
        let productMaps=products.map((product) => {
            return `<tr>
                        <td>${product.id}</td>
                        <td><strong>${product.name}</strong></td>
                        <td>${product.category}</td>
                        <td class="price">${product.price.toLocaleString("vn-VN")} đ</td>
                        <td class="quantity">${product.quantity}</td>
                        <td class="description">${product.description || 'Không có mô tả'}</td>
                        <td>
                            <div class="action-buttons">
                                <button class="btn-edit" onclick="editProduct(${product.id})">
                                    ✏️ Sửa
                                </button>
                                <button class="btn-delete" onclick="deleteProduct(${product.id})">
                                    🗑️ Xóa
                                </button>
                            </div>
                        </td>
                    </tr>`;
        });
        const html=productMaps.join("");
        tableBody.innerHTML=html;
    }
};

let validateForm=(name, price, quantity) => {
    if(name===""){
        Swal.fire({
        title: "<strong>Lỗi</strong>",
        icon: "info",
        html: `
            Tên các trường ko được rỗng!
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Ok bé!
        `,
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: `
            <i class="fa fa-thumbs-down"></i> Tôi bị ngu
        `,
        cancelButtonAriaLabel: "Thumbs down"
        });
        return false;
    }
    return true;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name=nameInput.value.trim();
    let category=categoryInput.value.trim();
    let price=Number(priceInput.value.trim());
    let quantity=Number(quantityInput.value.trim());
    let description=descriptionInput.value.trim();

    if(!validateForm(name, price, quantity)) return;

    const newProduct={
        id: Date.now(),
        name,
        category,
        price,
        quantity,
        description
    };

    products.unshift(newProduct);
    renderProducts();
})

init();
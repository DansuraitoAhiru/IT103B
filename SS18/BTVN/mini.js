let products=[
    { id: 1, name: "Monogatari", category: "Sách", price: 25000, quantity: 1000, description: "Omoshiroi"},
    { id: 2, name: "Tình iu", category: "Đồ gia dụng", price: 47000, quantity: 8000000, description: "Nai xừ"}
];
let nextId = 3;

let idUpdate = null;  // nếu ko có, Code không biết: đang thêm mới hay cập nhật, dẫn đến sẽ luôn thêm mới → bị trùng data

const title = document.querySelector("#formTitle")
const form = document.querySelector("#productForm");
const nameInput = document.querySelector("#productName");
const categoryInput = document.querySelector("#productCategory");
const priceInput = document.querySelector("#productPrice");
const quantityInput = document.querySelector("#productQuantity")
const descriptionInput = document.querySelector("#productDescription");

const btnSubmit = document.querySelector("#submitBtn");
const btnCancel = document.querySelector("#cancelBtn");
const btnClear = document.querySelector("#clearAllBtn");

const searchInput=document.querySelector("#searchInput");
const filterCategory = document.querySelector("#filterCategory");

const table=document.querySelector("#productTable");
const tableBody = document.querySelector("#productTableBody")
const totalProducts = document.querySelector("#totalProducts");
const totalValue = document.querySelector("#totalValue");
const totalQuantity = document.querySelector("#totalQuantity");

const init=() => {
    const data = localStorage.getItem("products");
    if (data) {
        products = JSON.parse(data) || [];
    }

    const idData=Number(localStorage.getItem("nextId"));
    if(idData){
        nextId = JSON.parse(idData) || 1;
    }
    renderProducts(products);
    report();
    // resetDefault();
}

const renderProducts = (products) => {
    if(products.length===0){
        tableBody.innerHTML="";
        emptyState.style.display="block";
        return;
    }

    emptyState.style.display="none";

    if(Array.isArray(products)) {
        let productMaps=products.map((product) => {
            return `<tr>
                        <td>${product.id}</td>
                        <td><strong>${product.name}</strong></td>
                        <td>${product.category}</td>
                        <td class="price">${product.price.toLocaleString("vi-VN")} ₫</td>
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

let validateForm=(name, category, price, quantity) => {
    if(name===""){
        Swal.fire({
        title: "<strong>Lỗi</strong>",
        icon: "info",
        html: `
            Các trường nì ko được rỗng!
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Ok bé!
        `,
        cancelButtonAriaLabel: "Thumbs down"
        });
        return false;
    }

    if(!category){
        Swal.fire({
        title: "<strong>Lỗi</strong>",
        icon: "info",
        html: `
            Danh mục ko được để trống, nếu ko thuộc các mục trên, hãy chọn khác!
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Okokok và mấy...!
        `,
        cancelButtonAriaLabel: "Thumbs down"
        });
        return false;
    }

    if (price < 0 || quantity < 0) {
        Swal.fire({
        title: "<strong>Lỗi</strong>",
        icon: "info",
        html: `
            Giá và số lướng phải >=0!
        `,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
            <i class="fa fa-thumbs-up"></i> Ok bé!
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

    if(!validateForm(name, category, price, quantity)) return;

    if(idUpdate) {
        updateProduct(name, category, price, quantity, description);
    } else {
        const newProduct={
            id: nextId++,
            name,
            category,
            price,
            quantity,
            description
        };

        products.unshift(newProduct);
        Swal.fire({
            title: "Thêm Thành công một sản phẩm",
            text: "Click để bỏ qua!",
            icon: "success"
        });
    }
    storage();
    form.reset();
    renderProducts(products);
    report();
});

const editProduct=(id) => {
    const found=products.find((p) => p.id===id);

    if(!found) return;

    idUpdate = id // ghi nhớ bạn đang sửa sản phẩm nào

    nameInput.value = found.name;
    categoryInput.value = found.category;
    priceInput.value = found.price;
    quantityInput.value = found.quantity;
    descriptionInput.value = found.description;

    title.textContent = "Chỉnh sửa sản phẩm";
    btnSubmit.textContent = "💾 Cập nhật";
    btnCancel.style.display = "inline-block";
}

const updateProduct=(name, category, price, quantity, description) => {
    const found=products.find((p) => p.id === idUpdate)
    if(!found) return;

    found.name=name;
    found.category=category;
    found.price=price;
    found.quantity=quantity;
    found.description=description;

    idUpdate = null // reset lại trạng thái edit

    title.textContent="Thêm Sản Phẩm mới";
    btnSubmit.textContent = "➕ Thêm Sản Phẩm";
    btnCancel.style.display = "none";

    storage();
    renderProducts(products);
    form.reset();
};

btnCancel.addEventListener("click", () => {
    idUpdate=null;
    form.reset();

      title.textContent = "Thêm Sản Phẩm Mới";
    btnSubmit.textContent = "➕ Thêm Sản Phẩm";
    btnCancel.style.display = "none";
});

const deleteProduct=(id) => {
    const found=products.find((p) => p.id===id);
    if(!found) return;

    Swal.fire({
        title: "Are u sure?",
        text: `Bạn muốn xóa "${found.name}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Let's go my baby",
        cancelButtonText: "Hủy",
        confirmButtonColor: "#e74c3c",
        cancelButtonColor: "#6c757d"
    }).then((result) => {
        if (result.isConfirmed) {
            products = products.filter((p) => p.id !== id);

            storage();

            renderProducts(products);

            report();

            Swal.fire({
                title: "Đã xóa!",
                text: "Sản phẩm đã bị xóa.",
                icon: "success"
            });

            if(idUpdate===id) { // Ktra có đang sửa đúng sản phẩm vừa xóa không?
                idUpdate=null;  // thoát khỏi chế độ edit
                form.reset();   // reset lại form
            }
        }
    });
};

btnClear.addEventListener("click", () => {
    Swal.fire({
        title: "CẢNH BÁO NÈ",
        text: "Ní có chắc muốn xóa toàn bộ sản phẩm ko? Ko làm lại đc âu nha",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Chan đê",
        cancelButtonText: "Hủy",
        confirmButtonColor: "#e74c3c",
        cancelButtonColor: "#6c757d"
    }).then((result) => {
        if (result.isConfirmed) {
            products = [];
            nextId = 1;
            storage();
            renderProducts(products);
            report();
        }
    });
});

const filterProducts=() => {
    const keyword=searchInput.value.toLowerCase().trim();

    const category=filterCategory.value;

    const result=products.filter((p) => {
        const matchKey=p.name.toLowerCase().trim().includes(keyword)
                        || 
                       p.description.toLowerCase().trim().includes(keyword);
        
        const matchCategory= !category || p.category===category;

        return matchKey && matchCategory;
    });
    renderProducts(result);
};

searchInput.addEventListener("input", filterProducts);
filterCategory.addEventListener("change", filterProducts);

const storage=() => {
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("nextId", nextId);
};

const report=() => {
    const totalP=products.length;
    const totalQ=products.reduce((prev, curr) => prev + curr.quantity, 0);
    const totalV=products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);

    totalProducts.textContent=totalP;
    totalQuantity.textContent=totalQ;
    totalValue.textContent=totalV.toLocaleString("vi-VN") + "₫";
};

const resetDefault = () => {
    products = [
        { id: 1, name: "Monogatari", category: "Sách", price: 25000, quantity: 1000, description: "Omoshiroi"},
        { id: 2, name: "Tình iu", category: "Đồ gia dụng", price: 47000, quantity: 8000000, description: "Nai xừ"}
    ];

    nextId = 3;

    storage();
    renderProducts(products);
};

init();

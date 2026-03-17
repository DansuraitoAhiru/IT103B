// =============================
// DOM SELECT
// =============================

const form = document.getElementById("productForm");
const nameInput = document.getElementById("productName");
const categoryInput = document.getElementById("productCategory");
const priceInput = document.getElementById("productPrice");
const quantityInput = document.getElementById("productQuantity");
const descriptionInput = document.getElementById("productDescription");

const tableBody = document.getElementById("productTableBody");
const emptyState = document.getElementById("emptyState");

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

const totalProducts = document.getElementById("totalProducts");
const totalValue = document.getElementById("totalValue");
const totalQuantity = document.getElementById("totalQuantity");

const submitBtn = document.getElementById("submitBtn");
const cancelBtn = document.getElementById("cancelBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const formTitle = document.getElementById("formTitle");

// =============================
// DATA
// =============================

// mảng lưu sản phẩm
let products = JSON.parse(localStorage.getItem("products")) || [];

// id tự tăng
let currentId = Number(localStorage.getItem("currentId")) || 1;

// id đang chỉnh sửa
let editId = null;

// =============================
// SAVE LOCAL STORAGE
// =============================

const saveData = () => {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("currentId", currentId);
};

// =============================
// FORMAT TIỀN
// =============================

const formatMoney = (money) => {
  return money.toLocaleString("vi-VN") + " VNĐ";
};

// =============================
// VALIDATION
// =============================

const validateForm = () => {
  const name = nameInput.value.trim();
  const category = categoryInput.value;
  const price = Number(priceInput.value);
  const quantity = Number(quantityInput.value);

  if (!name) {
    alert("Tên sản phẩm không được để trống");
    return false;
  }

  if (!category) {
    alert("Vui lòng chọn danh mục");
    return false;
  }

  if (price < 0) {
    alert("Giá phải >= 0");
    return false;
  }

  if (quantity < 0) {
    alert("Số lượng phải >= 0");
    return false;
  }

  return true;
};

// =============================
// RESET FORM
// =============================

const resetForm = () => {
  form.reset();
  editId = null;

  formTitle.textContent = "Thêm Sản Phẩm Mới";
  submitBtn.textContent = "➕ Thêm Sản Phẩm";

  cancelBtn.style.display = "none";
};

// =============================
// RENDER TABLE
// =============================

const renderTable = (data) => {
  if (data.length === 0) {
    tableBody.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  tableBody.innerHTML = data
    .map((product) => {
      const lowStock = product.quantity < 10 ? "style='color:red'" : "";

      return `
      <tr>
        <td>${product.id}</td>

        <td>${product.name}</td>

        <td>${product.category}</td>

        <td>${formatMoney(product.price)}</td>

        <td ${lowStock}>${product.quantity}</td>

        <td class="description">${product.description || ""}</td>

        <td>
          <button onclick="editProduct(${product.id})">Sửa</button>
          <button onclick="deleteProduct(${product.id})">Xóa</button>
        </td>

      </tr>
    `;
    })
    .join("");
};

// =============================
// UPDATE STATS
// =============================

const updateStats = () => {
  const totalP = products.length;

  const totalQ = products.reduce((sum, p) => sum + p.quantity, 0);

  const totalV = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  totalProducts.textContent = totalP;

  totalQuantity.textContent = totalQ;

  totalValue.textContent = formatMoney(totalV);
};

// =============================
// ADD PRODUCT
// =============================

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const product = {
    id: editId ? editId : currentId++,
    name: nameInput.value.trim(),
    category: categoryInput.value,
    price: Number(priceInput.value),
    quantity: Number(quantityInput.value),
    description: descriptionInput.value.trim(),
  };

  if (editId) {
    // update
    products = products.map((p) => (p.id === editId ? product : p));
  } else {
    // add
    products.push(product);
  }

  saveData();

  renderTable(products);

  updateStats();

  resetForm();
});

// =============================
// EDIT PRODUCT
// =============================

const editProduct = (id) => {
  const product = products.find((p) => p.id === id);

  if (!product) return;

  editId = id;

  nameInput.value = product.name;
  categoryInput.value = product.category;
  priceInput.value = product.price;
  quantityInput.value = product.quantity;
  descriptionInput.value = product.description;

  formTitle.textContent = "Chỉnh Sửa Sản Phẩm";

  submitBtn.textContent = "Cập Nhật";

  cancelBtn.style.display = "inline-block";

  window.scrollTo({ top: 0, behavior: "smooth" });
};

// =============================
// CANCEL EDIT
// =============================

cancelBtn.addEventListener("click", resetForm);

// =============================
// DELETE PRODUCT
// =============================

const deleteProduct = (id) => {
  const product = products.find((p) => p.id === id);

  if (!confirm(`Bạn chắc chắn muốn xóa "${product.name}" ?`)) return;

  products = products.filter((p) => p.id !== id);

  saveData();

  renderTable(products);

  updateStats();

  if (editId === id) {
    resetForm();
  }
};

// =============================
// DELETE ALL
// =============================

clearAllBtn.addEventListener("click", () => {
  if (!confirm("CẢNH BÁO: Xóa toàn bộ sản phẩm ?")) return;

  products = [];

  currentId = 1;

  localStorage.removeItem("products");

  localStorage.removeItem("currentId");

  renderTable(products);

  updateStats();

  resetForm();
});

// =============================
// SEARCH + FILTER
// =============================

const filterProducts = () => {
  const keyword = searchInput.value.toLowerCase();

  const category = filterCategory.value;

  const result = products.filter((p) => {
    const matchKeyword =
      p.name.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword);

    const matchCategory = !category || p.category === category;

    return matchKeyword && matchCategory;
  });

  renderTable(result);
};

searchInput.addEventListener("input", filterProducts);

filterCategory.addEventListener("change", filterProducts);

// =============================
// LOAD APP
// =============================

renderTable(products);

updateStats();

let products = [
  {
    id: 1,
    name: "Tai nghe Bluetooth TWS",
    price: 320000,
    image:
      "https://picsum.photos/seed/mp19-tws/1200/800",
    description: "Chống ồn nhẹ, pin 20h, kết nối ổn định.",
  },
  {
    id: 2,
    name: "Bàn phím cơ 87 phím",
    price: 790000,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=1200&q=60",
    description: "Switch blue, led trắng, gõ sướng tay.",
  },
  {
    id: 3,
    name: "Chuột không dây công thái học",
    price: 450000,
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1200&q=60",
    description: "Thiết kế ergonomic, sạc USB-C.",
  },
  {
    id: 4,
    name: "USB 64GB",
    price: 120000,
    image:
      "https://picsum.photos/seed/mp19-usb/1200/800",
    description: "Nhỏ gọn, tốc độ đọc/ghi ổn định.",
  },
  {
    id: 5,
    name: "Đế tản nhiệt laptop",
    price: 210000,
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=1200&q=60",
    description: "2 quạt gió, đỡ mỏi cổ tay.",
  },
  {
    id: 6,
    name: "Cáp sạc Type-C 1m",
    price: 80000,
    image:
      "https://picsum.photos/seed/mp19-cable/1200/800",
    description: "Bọc dù, hỗ trợ sạc nhanh.",
  },
];

let cart = [];

const clearBtn = document.querySelector("#clear-cart-btn");

const STORAGE_KEY = "cart";

const saveData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
};

const loadData = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (data) {
    cart = JSON.parse(data);
    cart = cart.filter((c) => products.some((p) => p.id === c.id));
  } else {
    cart = [];
  }
}

const init = () => {
  loadData();
  renderProduct();
  renderCart();
  report();
}

const formatVND = (price) => {
  return price.toLocaleString("vi-VN") + " VNĐ";
}

const renderProduct = () => {
  let productList = document.querySelector("#products-grid");
  const emptyState = document.querySelector("#products-empty");
  if (products.length === 0) {
    productList.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  productList.innerHTML = products.map((p) => `<article class="card">
                                                    <div class="card-img">
                                                        <img
                                                        src=${p.image}
                                                        alt=${p.name}
                                                        loading="lazy"
                                                        />
                                                    </div>
                                                    <div class="card-body">
                                                        <h3 class="card-title">${p.name}</h3>
                                                        <p class="card-desc">${p.description}</p>
                                                        <div class="card-footer">
                                                        <div class="price">${formatVND(p.price)}</div>
                                                        <button onclick="addToCart(${p.id})" class="btn btn-primary">Thêm vào giỏ</button>
                                                        </div>
                                                    </div>
                                                </article>
    `).join("");
};

const addToCart = (id) => {
  let item = cart.find((p) => p.id === id);
  if (item) {
    item.quantity++;
  } else {
    cart.push({ id: id, quantity: 1 });
  }
  saveData();
  renderCart();
  report();
};

const renderCart = () => {
  let listCartItem = document.querySelector("#cart-tbody");
  let emptyState = document.querySelector("#cart-empty");

  if (cart.length === 0) {
    listCartItem.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  listCartItem.innerHTML = cart.map((c) => {
    let item = products.find((p) => p.id === c.id)
    if(!item) return;
    return `<tr>
                  <td>${item.name}</td>
                  <td class="right">${formatVND(item.price)}</td>
                 <td class="center">
                  <div class="qty-controls">
                    <button onclick="decrease(${c.id})" class="btn btn-icon btn-ghost">-</button>
                    <span class="qty">${c.quantity}</span>
                    <button onclick="increase(${c.id})" class="btn btn-icon btn-ghost">+</button>
                  </div>
                </td>
                  <td class="right">${formatVND(item.price * c.quantity)}</td>
                  <td class="center">
                    <button onclick="removeCartItem(${c.id})" class="btn-danger btn">Xóa</button>
                  </td>
              </tr>
        `;
  }).join("");
  saveData();
};

const increase = (id) => {
  let item = cart.find((p) => p.id === id);

  if (item) {
    item.quantity++;
    saveData();
    renderCart();
    report();
  }
};

const decrease = (id) => {
  let item = cart.find((p) => p.id === id);
  if (item) {
    item.quantity--;

    if (item.quantity <= 0) {
      cart = cart.filter((p) => p.id !== id);
    }

    saveData();
    renderCart();
    report();
  }
};

const removeCartItem = (id) => {
  const found = cart.find((p) => p.id === id);
  if (!found) return;

  const product = products.find((p) => p.id===id)

  Swal.fire({
    title: "Are u sure?",
    text: `Bạn muốn xóa ${product.name}?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Chan đê",
    cancelButtonText: "Hủy",
    confirmButtonColor: "#e74c3c",
    cancelButtonColor: "#6c757d"
  }).then((result) => {
    if (result.isConfirmed) {
      cart = cart.filter((p) => p.id !== id);

      saveData();
      renderCart();
      report();

      Swal.fire({
        title: "Đã xóa!",
        text: "Sản phẩm đã bị xóa.",
        icon: "success"
      });
    }
  });
};

clearBtn.addEventListener("click", () => {
  Swal.fire({
    title: "WARNING",
    text: `Bạn muốn xóa tất cả ko?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Chan đê",
    cancelButtonText: "Hủy",
    confirmButtonColor: "#e74c3c",
    cancelButtonColor: "#6c757d"
  }).then((result) => {
    if (result.isConfirmed) {
      cart.length = 0;

      saveData();
      renderCart();
      report();

      Swal.fire({
        title: "Đã xóa!",
        text: "Tất cả sản phẩm đã bị xóa.",
        icon: "success"
      });
    }
  }); 
});

const report=() => {
  const totalProducts = document.querySelector("#product-count-badge");
  const totalCartLines = document.querySelector("#cart-lines-badge");
  const totalCartQuantity = document.querySelector("#cart-qty-badge");
  const totalLines = document.querySelector("#stat-lines");
  const totalQuantity = document.querySelector("#stat-qty");
  const totalValue = document.querySelector("#stat-total");

  let totalP = products.length;
  let totalCl = cart.length;
  let totalCq = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  let totalL = cart.length;
  let totalQ = cart.reduce((prev, curr) => prev + curr.quantity, 0);
  let totalV = cart.reduce((prev, curr) => {
    const product = products.find((p) => p.id === curr.id);
    return prev + product.price * curr.quantity;
  }, 0);

  totalProducts.textContent = totalP + " sản phẩm";
  totalCartLines.textContent = totalCl + " dòng";
  totalCartQuantity.textContent = totalCq + " món";
  totalLines.textContent = totalL;
  totalQuantity.textContent = totalQ;
  totalValue.textContent = formatVND(totalV);
}

init();

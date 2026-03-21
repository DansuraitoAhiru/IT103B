const btn = document.querySelector("#iconBtn");
const menu = document.querySelector("#themeSelect");
const items = menu.querySelectorAll("div"); // lấy các lựa chọn trong menu

let theme; // biến lưu theme

const applyTheme = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.add("dark"); // thêm class dark vào <html>
  } else if (theme === "light") {
    document.documentElement.classList.remove("dark");  // xóa class dark đi
  } else {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;  // AUTO: theo hệ điều hành

    if (isDark) {  // tương tự nếu nó là dark thì thêm class dark, ko thì xóa
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  //Đổi icon theo theme
  if (theme === "dark") {
    btn.textContent = "🌙";
  } else if (theme === "light") {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🤖";
  }
};



// Khi trang load
try {
  theme = localStorage.getItem("theme");  // đọc theme đã lưu từ localStorage
} catch (e) {
  theme = null;  // nếu lỗi thì coi như chưa có
}

if (!theme) theme = "auto";  // nếu chưa có theme → mặc định AUTO

// sau đó áp dụng theme ngay
applyTheme(theme);



// Xử lí việc click nút icon sẽ mở/đóng menu
btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});



// Khi chọn 1 item trong menu
items.forEach((item) => {
  item.addEventListener("click", () => {
    const newTheme = item.getAttribute("value");  // đặt thêm biển newTheme để lấy giá trị theme (light / dark / auto) mới
    // áp dụng theme
    applyTheme(newTheme);

    try {
      localStorage.setItem("theme", newTheme);  // lưu vào localStorage
    } catch (e) {}

    // đóng menu
    menu.classList.remove("show");
  });
});



// Xử lí việc click vị trí bên ngoài thì sẽ đóng menu
document.addEventListener("click", (e) => {
  // nếu click vị trí Không nằm trong dropdown
  if (!e.target.closest(".dropdown")) {
    menu.style.display = "none";
  }
});

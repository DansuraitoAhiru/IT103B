let toasts = {
    success: { icon: '✓', title: 'SUCCESS', messages: 'Quá đỉnk. Chúc mừng nha!' },
    error: { icon: '✕', title: 'ERROR', messages: 'Chúc mừng bạn rơi vào ô mất wifi!' },
    info: { icon: 'ℹ', title: 'INFO', messages: '4.2/3.2 is coming.' },
    warning: { icon: '⚠', title: 'WARNING', messages: 'Bình tĩnh. Hanoi ko vội được đâu!' }
};

const container = document.getElementById("toast-container");  // Lấy ra thẻ chứa tất cả toast

const MAX_TOAST = 6; // giới hạn số lượng ô

const createToast=(type) => {
     if (!toasts[type]) return;

    if (!container) return;

    if (container.children.length >= MAX_TOAST) {
        container.firstChild.remove(); // xóa cái cũ nhất
    }

    let item = toasts[type];  // Lấy dữ liệu từ mảng toasts bằng key "type", ví dụ type = "success" thì item = toasts.success

    const toast = document.createElement("div"); // Tạo 1 thẻ div mới để làm toast = ô nhỏ hiện lên góc phải rồi tự biến mất

    // Gán class cho toast
    // Ví dụ: "toast success" → để còn css từng toast
    toast.className = "toast " + type;

    // Fill nội dung HTML cho toast
    toast.innerHTML = `
        <div>${item.icon}</div>
        <div>
            <strong>${item.title}</strong>
            <span>${item.messages}</span>
        </div>
        <div class="close">✖</div>
        <div class="progress" style="animation-duration: 4000ms"></div>
    `;

    container.appendChild(toast); // Thêm toast vào trong container (hiển thị lên màn hình)
                                  // container là DOM element (thẻ HTML), KHÔNG phải mảng nên ko thể dùng push hay unshift đc

    // Tạo bộ đếm thời gian để tự động ẩn toast sau 4 giây
    let timer = setTimeout(function () {
        toast.classList.add("fade-out");  // Thêm class fade-out để chạy animation biến mất
        setTimeout(function () {
            toast.remove();              // Sau 0.4s thì xóa hẳn ô đấy khỏi màn hình
        }, 400);
    }, 4000);

    // Bắt sự kiện click vào nút đóng (X)
    toast.querySelector(".close").onclick = function () {
        clearTimeout(timer);  // Xóa bộ đếm
        toast.remove();       // Xóa toast ngay lập tức
    };
}

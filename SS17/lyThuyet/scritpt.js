// Thao tác thêm dữ liệu lên localStorage
window.localStorage  // window là đối tượng trình duyệt cao nhứt
localStorage.setItem("username", "Nguyễn Văn A");
localStorage.setItem("username", "Nguyễn Văn B");  /// Trùng key thì lấy value sau
localStorage.setItem("age", 78);
localStorage.setItem("stillVirgin", true);

const users = [
    { id:1, name: "Dan gà", isMarried: false },
    { id:2, name: "Thái Phạm", isMarried: true }
];

// NOTE: Dữ liệu có kiểu object, array, khi lưu lên localStorage sẽ ko được hiểu bởi dữ liệu trên local phải có định dạng là JSON
// Cách chuyển đổi từ JS sang JSON
console.log(JSON.stringify(users));
localStorage.setItem("users", JSON.stringify(users));

// Đọc dữ liệu
console.log("username: ", localStorage.getItem("username"));
console.log("users: ", JSON.parse(localStorage.getItem("users")));

// Xóa 1 key khỏi local
localStorage.removeItem("age");

// Xóa tất cả dữ liệu
localStorage.clear();
let students = [
  { id: 1, name: "Phạm Văn Thoái", age: 20, gpa: 8.7, status: "active", createdAt: Date.now() - 10000000, updatedAt: null, deletedAt: null },
  { id: 2, name: "Diêm Thống Nhất", age: 19, gpa: 9.2, status: "active", createdAt: Date.now() - 9000000, updatedAt: null, deletedAt: null },
  { id: 3, name: "Trơn Công Duy", age: 22, gpa: 6.5, status: "active", createdAt: Date.now() - 8000000, updatedAt: null, deletedAt: null },
  { id: 4, name: "Chần Huy Đạt", age: 18, gpa: 8.8, status: "active", createdAt: Date.now() - 7000000, updatedAt: null, deletedAt: null },
  { id: 5, name: "Dansuraito Ahiru", age: 1999936, gpa: 0, status: "active", createdAt: Date.now() - 6000000, updatedAt: null, deletedAt: null },
  { id: 6, name: "Đỗ Quốc Phong", age: 23, gpa: 7.3, status: "inactive", createdAt: Date.now() - 5000000, updatedAt: Date.now() - 3000000, deletedAt: Date.now() - 3000000 },
  { id: 7, name: "Vũ Thanh Giang", age: 17, gpa: 5.4, status: "active", createdAt: Date.now() - 4000000, updatedAt: null, deletedAt: null },
  { id: 8, name: "Ngô Minh Huy", age: 24, gpa: 8.1, status: "active", createdAt: Date.now() - 3000000, updatedAt: null, deletedAt: null },
  { id: 9, name: "Bùi Thu Hà", age: 20, gpa: 4.9, status: "inactive", createdAt: Date.now() - 2000000, updatedAt: Date.now() - 1000000, deletedAt: Date.now() - 1000000 },
  { id: 10, name: "Phan Quốc Khánh", age: 26, gpa: 9.5, status: "active", createdAt: Date.now() - 1000000, updatedAt: null, deletedAt: null }
];

const createStudent = () => {
  let id, name, age, gpa, status;

  // ===== Nhập ID =====
  while (true) {
    id = prompt("Nhập mã sinh viên:").trim();

    if (!id) {
      alert("⚠ Mã không được để trống!");
      continue;
    }

    if (students.some(s => String(s.id) === id)) {
      alert("⚠ Mã sinh viên đã tồn tại!");
      continue;
    }

    break; // hợp lệ → thoát vòng lặp
  }

  // ===== Nhập tên =====
  while (true) {
    name = prompt("Nhập họ tên sinh viên:").trim();
    if (!name) {
      alert("⚠ Tên không được để trống!");
      continue;
    }
    break;
  }

  // ===== Nhập tuổi =====
  while (true) {
    age = Number(prompt("Nhập tuổi (16 - 60):"));
    if (age < 16 || age > 60 || isNaN(age)) {
      alert("⚠ Tuổi phải từ 16 đến 60!");
      continue;
    }
    break;
  }

  // ===== Nhập GPA =====
  while (true) {
    gpa = Number(prompt("Nhập GPA (0 - 10):"));
    if (gpa < 0 || gpa > 10 || isNaN(gpa)) {
      alert("⚠ GPA phải từ 0 đến 10!");
      continue;
    }
    break;
  }

  // ===== Nhập trạng thái =====
  while (true) {
    status = prompt("Nhập trạng thái (active / inactive):").trim();
    if (status !== "active" && status !== "inactive") {
      alert("⚠ Chỉ được nhập 'active' hoặc 'inactive'!");
      continue;
    }
    break;
  }

  students.push({
    id,
    name,
    age,
    gpa,
    status,
    createdAt: Date.now(),
    updatedAt: null,
    deletedAt: null
  });

  alert("✅ Thêm sinh viên thành công!");
};

const updateStudent = () => {
  const id = prompt("Nhập mã sinh viên cần cập nhật:");
  const student = students.find(s => s.id === id);

  if (!student) {
    alert("❌ Không tìm thấy sinh viên!");
    return;
  }

  const name = prompt("Nhập tên mới (bỏ trống nếu không muốn sửa):");
  const age = prompt("Nhập tuổi mới (bỏ trống nếu không muốn sửa):");
  const gpa = prompt("Nhập GPA mới (bỏ trống nếu không muốn sửa):");

  if (name) student.name = name;
  if (age) student.age = Number(age);
  if (gpa) student.gpa = Number(gpa);

  student.updatedAt = Date.now();

  alert("✅ Cập nhật thông tin thành công!");
};

const softDeleteStudent = () => {
  const id = prompt("Nhập mã sinh viên cần xoá:");
  const student = students.find(s => String(s.id) === id);

  if (!student) {
    alert("❌ Không tìm thấy sinh viên!");
    return;
  }

  const confirmDelete = confirm(
    `Bạn có chắc chắn muốn xoá sinh viên ${student.name} không?`
  );

  if (!confirmDelete) {
    alert("⛔ Đã huỷ thao tác xoá.");
    return;
  }

  student.status = "inactive";
  student.deletedAt = Date.now();

  alert("✅ Đã xoá mềm sinh viên (không xoá khỏi hệ thống).");
};

const restoreStudent = () => {
  const id = prompt("Nhập mã sinh viên cần khôi phục:");
  const student = students.find(s => String(s.id) === id);

  if (!student) {
    alert("❌ Không tìm thấy sinh viên!");
    return;
  }

  student.status = "active";
  student.updatedAt = Date.now();
  student.deletedAt = null;

  alert("✅ Đã khôi phục sinh viên thành công!");
};

const viewStudents = () => {
  let data = [...students];

  const keyword = prompt("Nhập tên cần tìm (bỏ trống nếu không tìm):");
  if (keyword) {
    data = data.filter(s =>
      s.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  const status = prompt("Lọc theo trạng thái (active / inactive / all):");
  if (status !== "all") {
    data = data.filter(s => s.status === status);
  }

  const sortType = prompt("Sắp xếp GPA (asc / desc):");
  data.sort((a, b) =>
    sortType === "asc" ? a.gpa - b.gpa : b.gpa - a.gpa
  );

  if (data.length === 0) {
    alert("❌ Không có sinh viên nào phù hợp.");
    return;
  }

  const pageSize = 5;
  const totalPages = Math.ceil(data.length / pageSize);
  let page = 1;

  while (true) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    let result = `📄 Trang ${page}/${totalPages}\n`;
    result += `📊 Tổng số bản ghi: ${data.length}\n\n`;

    data.slice(start, end).forEach(s => {
      result += `ID: ${s.id} | ${s.name} | Tuổi: ${s.age} | GPA: ${s.gpa} | ${s.status}\n`;
    });

    result += `
-------------------------
n: Trang sau
p: Trang trước
f: Trang đầu
l: Trang cuối
e: Thoát
`;

    const action = prompt(result);

    if (action === "n") {
      if (page < totalPages) page++;
      else alert("⚠ Đây đã là trang cuối!");
    }
    else if (action === "p") {
      if (page > 1) page--;
      else alert("⚠ Đây đã là trang đầu!");
    }
    else if (action === "f") {
      page = 1;
    }
    else if (action === "l") {
      page = totalPages;
    }
    else if (action === "e") {
      break;
    }
    else {
      alert("⚠ Lựa chọn không hợp lệ!");
    }
  }
};

const analyticsDashboard = () => {

  const total = students.length;

  const stats = students.reduce((acc, s) => {
    if (s.status === "active") acc.active++;
    else acc.inactive++;
    return acc;
  }, { active: 0, inactive: 0 });

  const avgGpa =
    students.reduce((sum, s) => sum + s.gpa, 0) / total;

  let result = "===== THỐNG KÊ HỆ THỐNG =====\n\n";
  result += `Tổng số sinh viên: ${total}\n`;
  result += `Đang học (active): ${stats.active}\n`;
  result += `Ngừng học (inactive): ${stats.inactive}\n`;
  result += `GPA trung bình: ${avgGpa.toFixed(2)}\n`;

  alert(result);
};

let choice;
do {
    choice = +(prompt(`
==== HỆ THỐNG QUẢN LÝ SINH VIÊN NÂNG CAO ====
1. Thêm sinh viên
2. Cập nhật sinh viên
3. Xoá mềm sinh viên
4. Khôi phục sinh viên
5. Xem danh sách sinh viên
6. Thống kê hệ thống
7. Thoát chương trình
Chọn chức năng (1-7):`).trim());

    switch (choice) {
        case 1:
            createStudent();
            break;
        case 2:
            updateStudent();
            break;
        case 3:
            softDeleteStudent();
            break;
        case 4:
            restoreStudent();
            break;
        case 5:
            viewStudents();
            break;
        case 6:
            analyticsDashboard();
            break;
        case 7:
            alert("👋 Đã thoát chương trình.");
            break;
        default:
            alert("⚠ Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);

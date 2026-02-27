let students = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }
];

const largeThan8=(student) => {
    const found=student.filter((student) => student.score >= 8.0);
    found.forEach((ele) => {
        console.log(ele.name);
    });
};
largeThan8(students);

const smallerThan4=students.some((element) => element.score < 4.0);
console.log(`${smallerThan4 ? "Có sinh viên yếu" : "Không có sinh viên yếu"}`);

const studentsLabels=students.map((value) => `Tên: [${value.name}] - Điểm: [${value.score}]`);
console.log(studentsLabels);
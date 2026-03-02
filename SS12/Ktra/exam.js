let students = [
  { id: 1, name: "Nguyễn Văn A", score: 8.5, gender: "Nam" },
  { id: 2, name: "Trần Thị B", score: 4.2, gender: "Nữ" },
  { id: 3, name: "Lê Văn C", score: 9.0, gender: "Nam" },
  { id: 4, name: "Phạm Thị D", score: 5.5, gender: "Nữ" },
  { id: 5, name: "Hoàng Văn E", score: 3.8, gender: "Nam" }
];

const women=students.filter((student) => student.gender==="Nữ");
console.log(women);


const largerThan5=students.filter((student) => student.score>=5.0);
const list=largerThan5.map((s) => `${s.name}`);
console.log(list);

const men = students.filter(student => student.gender === "Nam");
const sum = men.reduce((s, student) => s + student.score, 0);
const avg = sum/men.length;
console.log(avg.toFixed(1));


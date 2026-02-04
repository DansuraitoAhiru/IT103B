let student=["Quý", "Nam", "Lan", "Hùng", "Nam"];
console.log(`--- Danh sách hiện tại ---`);
console.log(`${student.join(", ")}`);

let index=student.indexOf("Nam")
console.log(`Vị trí (index) đầu tiên của tên "Nam" trong mảng là ở vị trí ${index}`);

console.log(`--- Danh sách đảo ngược ---`);
console.log(`${student.reverse().join(", ")}`);

if(student.includes("Lan")===true){
    console.log(`Tên Lan tồn tại trong mảng`)
} else {
    console.log(`Tên Lan không tồn tại trong mảng`);
}
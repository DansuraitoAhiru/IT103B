alert("こんにちは");

// Cách khởi tạo mảng
// let listNumber=[1,2,3,4,5];
// let numbers=[]; //mảng rỗng

// // Lấy giá trị trong mảng
// // Tại chỉ số thứ 3 (index=3) và tại phần tử thứ 3(index=2)
// console.log(listNumber[3]);

// // Cập nhật giá trị trong mảng
// // Cập nhật tại phần tử thứ 5 (index=4)
// listNumber[4]=10;
// console.log(`Phần tử thứ 5 sau khi cập nhật ${listNumber[4]}`);

//Xóa giá trị trong mảng
//Xóa phần tử tại đầu mảng: .shift()
// console.log(`${listNumber}: ${listNumber.length}`);
// listNumber.shift();
// console.log(`${listNumber}: ${listNumber.length}`);

//Xóa phần tử cuối mảng: .pop()
// console.log(`${listNumber}: ${listNumber.length}`);
// listNumber.pop();
// listNumber.pop();
// listNumber.pop();
// listNumber.pop();
// listNumber.pop();
// listNumber.pop();
// console.log(`${listNumber}: ${listNumber.length}`);

//Xóa phần tử tại vik trí bất kì
// console.log(`${listNumber}: ${listNumber.length}`);
// listNumber.splice(1,3);
// console.log(`${listNumber}: ${listNumber.length}`); 

//Thêm giá trị vào mảng
//Thêm vào đầu mảng: .unshift
// console.log(`${listNumber}: ${listNumber.length}`);
// listNumber.unshift(36,73,88);
// console.log(`${listNumber}: ${listNumber.length}`); 

//Thêm vào cuối mảng: .push
// console.log(`${listNumber}: ${listNumber.length}`);
// listNumber.push(36);
// console.log(`${listNumber}: ${listNumber.length}`); 

//Thêm vào vị trí bất kì: .splice()
// console.log(`${listNumber}: ${listNumber.length}`);
// listNumber.splice(3,0,6);
// console.log(`${listNumber}: ${listNumber.length}`); 

let listNumber=[3,6,9,6,7,7,4,5,5];
let sum=0;
// for (let i = 0; i < listNumber.length; i++) {
//     console.log(` Phần tử thứ ${i+1} = ${listNumber[i]}`);
//     sum+=listNumber[i];
// }
// console.log((sum / listNumber.length).toFixed(2));

// for(let index in listNumber){
//     console.log(index);
// }

// for(let value of listNumber){
//     console.log(value);
// }

//Tìm kiếm trong mảng
console.log(`Số 99 có trong mảng hay ko: ${listNumber.includes(99)}`);

//startsWith, endsWith, ktra bắt đầu kết thúc với cái j hay ko?
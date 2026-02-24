const numbers = [1,2,3,4,5,6,7,8,9,100];

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

// Sử dụng forEach()
numbers.forEach((number, index, array) => {
    console.log(number, index, array); // ko thể dùng break, return, continue để thoát
});

// Bài toán: Lọc các phần tử trong mảng numbers có giá trị chẵn, trả về mảng chứa các phần tử chẵn
let newArr=[];
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 ===0){
        newArr.push(numbers[i]);
    }    
}
console.log(`Danh sách các phần tử chẵn: ${newArr}`);

// Sử dụng filter(): Sử dụng để duyệt qua các phần tử trong mảng: Xử lý logic theo điều kiện và trả về "1 mẳng mới"
// Có các phần tử thỏa mãn điều kiện
// const newNumbers=numbers.filter((element) => {
//     return element % 2 === 0;
// });

const newNumbers=numbers.filter((element) => element % 2 === 0);
console.log(`Even numbers: ${newNumbers}`);

// Bài toán: Biến đổi mảng numbers thành 1 mảng mới có format: [` Số thứ tự 1`, ` Số thứ tự 2`,...]
let convertNumbers=[];
for (let i = 0; i < numbers.length; i++) {
    convertNumbers.push(` Số thứ tự ${numbers[i]}`);
}
console.log(convertNumbers);

// Sử dụng map(): Sử dụng để duyệt các phần tử của mảng; Trả về 1 mảng mới có số lượng phần tử "bằng với" số lượng phần tử của mảng cũ (Tuy nhiên đã được định dạng hoặc chỉnh sửa)
// const mapNumbers=numbers.map((element) => {
//     return `Số thứ ${element}`;
// });

const mapNumbers=numbers.map((element) => ` Số thứ tự ${element}`);
console.log("mapNumbers: ", mapNumbers);

const scores=[8,9,10,10,8];
// Bài toán: Kiểm tra xem lớp có phảu là lớp học tốt hay ko? (Điều kiện tất cả điểm >= 8)

const checkResult=(scores) => {
    for (let i = 0; i < scores.length; i++) {
        if(scores[i] < 8){
            return false;
        }
    }
    return true;
}
console.log("CheckResult: ", checkResult(scores));

// every: Duyệt qua các phần tử của mảng; Kiểm tra điều kiện
// Nếu chỉ cần 1 phần tử sai thì trả về false, tất cả đúng trả về true
const resultCheck = scores.every((element) => element >= 8);
console.log("resultCheck: ", resultCheck);

// some: Duyệt qua các phần tử của mảng; Kiểm tra điều kiện
// Nếu chỉ cần 1 phần tử đúng trả về true, tất cả sai trả về false
scores.some((element) => element<8);

let total=0;
for (let i = 0; i < numbers.length; i++) {
    total+=numbers[i];
}
console.log("Total:", total);

// reduce()
const newSum=numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(`newSum:`, newSum)
let isActive="true"; //string
let isActive_2=true; //boolean

console.log(typeof isActive);
console.log(typeof isActive_2);

let check=5=="5";
let check2=5==="5";
let check3=5 != 4;

console.log(check);
console.log(check2);
console.log(check3);

let age=36;
if(age<25){
    console.log("Tôi chưa đu tuổi đi tù");
} else if(age<45){
    console.log("Tôi đủ tuổi lấy vợ")
} else {
    console.log("Tôi thích gái 2D");
}

//Toán tử 3 ngôi
let city=age>25 ? "Hà nội" : "Hà nam";

let diem=9;
let tuoi=20;

if(diem>9 && tuoi>20){
    console.log("Đỗ đại học");
} else {
    console.log("Trượt rùi");
}

if(diem>9 || tuoi>20){
    console.log("Đỗ đại học");
} else {
    console.log("Trượt rùi");
}

let day=10;

switch(day){
    case 10:
        console.log("Hôm nay là ngày 1"); //Nếu ko có break ở đây thì màn hình sẽ in cả 2 case
        break;
    case 2:
        console.log("Hôm nay là ngày 2");
        break;
    default: //default để đầu hay cuối cũng đc
        console.log("Hôm nay là thứ 7");
        break;
}

//falsy: null, 0, "", unde, false, NaN

let checked=!false;
if(checked){
    console.log("Giá trị trả về là true");
} else {
    console.log("Giá trị trả về là false");
}
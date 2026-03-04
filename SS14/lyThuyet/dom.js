//Lấy ra phần tử có id là heading-1
// getElementById: Hay sử dụng để lấy ra 1 phần tử có id duy nhất
console.log(document.getElementById("heading-1"));

//Lấy ra danh sách tất cả các thẻ h1
// getElementsByTagName trả về dạng HTMLCollection
console.log(document.getElementsByTagName("h1"));

//Lấy ra phần tử có id là heading-2
console.log(document.querySelector("#heading-2"));

//Lấy ra danh sách tất cả các thẻ p
console.log(document.querySelectorAll(".paragraph"));
console.log(document.querySelectorAll("input[type='checkbox']"));

const listCheckbox=document.querySelectorAll("input[type='checkbox']");
// listCheckbox.forEach(())

//Lấy ra nd của 1 thẻ (2 bước)
//Bước 1: Lấy ra phần tử đó
const headingElement=document.querySelector("#head-1");
const headinh2Element=document.querySelector("#head-2");
const listElement=document.querySelector("#list");
const contentElement=document.querySelector("#content");
const bodyElement=document.querySelector("#color")

//Bước 2: Thông qua phần tử sẽ truy cập vào nd
console.log("textContent: ", headingElement.textContent);
console.log("innerText: ", headingElement.innerText);
console.log("innerHTML: ", headingElement.innerHTML);

//Thay đổi nd của thẻ
headingElement.textContent="Nd đã được thay đổi";
headinh2Element.innerText="nd 2 đã thay đổi";
listElement.innerHTML="<li>Nội dung 1</li>";

//Thay đổi style của 1 phần tuwr HTML bằng js
//Thêm class
contentElement.classList.add("content");

//Xóa class
contentElement.classList.remove("text");

bodyElement.classList.add("color");

//Tạo 1 thẻ html bàng js
const divElement=document.createElement("div");
divElement.textContent="Bản án anh hùng thật sự peak";
divElement.setAttribute("class", "content");
divElement.setAttribute("id", "content");

//Gán thẻ vừa tạo 1 vị trí cụ thể
bodyElement.append(divElement);

const btnElement=document.querySelector("#btn");
const handleClick=() => {
    console.log("Clicked");
};
handleClick();

//Lắng nghe sự kiện
btnElement.onclick=() => {
    console.log("Clicked");
};

btnElement.addEventListener("click", () => {
    console.log("Clicked", event.target);
});

const inputElement=document.querySelector("input['text']");
inputElement.addEventListener
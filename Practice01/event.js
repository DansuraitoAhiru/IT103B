// Một số sự kiện hay dùng
// click (button, nút), submit (form), change (input, select),
// keydown, input...
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");
const input = document.querySelector("#input");
btn.onclick = () => {
    console.log("clicked 2");
};

btn2.addEventListener("click", (event) => {   // event chứa thông tin sự kiện
    console.log("clicked 3", event.target.innerText);
});

input.addEventListener("input", (event) => {
    console.log("event: ", event.target.value);
});

const form = document.querySelector("#form");
const text = document.querySelector("#text");
form.addEventListener("submit", (e) => {
    e.preventDefault();    // bắt buộc phải có khi dùng submit

    const user = {
        id: Date.now(),
        name: text.value,
        status: true
    }
    console.log("Submitted", user);
});

const select = document.querySelector("#select");
select.addEventListener("change", (e) => {
    console.log("Value: ", e.target.value);
})
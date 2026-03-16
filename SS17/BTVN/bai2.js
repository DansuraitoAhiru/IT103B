const initialTodos = [
  { id: 1, task: "Mua bánh chưng", done: true },
  { id: 2, task: "Dọn nhà đón Tết", done: true },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
  { id: 5, task: "Mua phong bao lì xì", done: false },
  { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];

const taskListElement=document.querySelector("#taskList");

const render=() => {
    if(Array.isArray(initialTodos)) {
        const todoMaps=initialTodos.map((t) => {
            return `<div class="task ${t.done ? "done" : ""}">
                        <span class="circle">${t.done ? "✓" : ""}</span>
                        <span class="text">🌸 ${t.task}</span>
                    </div>`;
        });
        const html=todoMaps.join("");
        taskListElement.innerHTML=html;
    }
};

taskListElement.addEventListener("click", function(e){
    const task = e.target.closest(".task");  // tìm cha (div.task) gần nhất có class task
    if(!task) return;  // nếu click không phải task thì dừng

    const allTasks = Array.from(document.querySelectorAll(".task")); // lấy tất cả task trong danh sách

    const index = allTasks.indexOf(task);

    initialTodos[index].done = !initialTodos[index].done; // đảo trạng thái
    localStorage.setItem("myTodos", JSON.stringify(initialTodos)); // myTodos đã tồn tại ở bài trc nên h chỉ cần ghi đè
    render();
});

render();
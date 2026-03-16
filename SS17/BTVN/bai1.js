const todos = [
  { id: 1, task: "Mua bánh chưng", done: false },
  { id: 2, task: "Dọn nhà đón Tết", done: false },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa", done: false },
];

const taskListElement=document.querySelector("#taskList");

const render=() => {
    if(Array.isArray(todos)) {
        const todoMaps=todos.map((t) => {
            return `<div class="list">
                        <div class="todoList">
                            <span>🌸 ${t.task}</span>
                        </div>

                        <div class="status">
                            <span>${t.done ? "Hoàn thành" : "Chưa làm"}</span>
                        </div>
                    </div>`;
        });
        const html=todoMaps.join("");
        taskListElement.innerHTML=html;
    }

    if(!localStorage.getItem("myTodos")){
        localStorage.setItem("myTodos", JSON.stringify(todos));
    }
};
render();
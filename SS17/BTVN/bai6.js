const initialTodos = [
  { id: 1, task: "Mua bánh chưng", done: true },
  { id: 2, task: "Dọn nhà đón Tết", done: true },
  { id: 3, task: "Gói bánh chưng", done: false },
  { id: 4, task: "Trang trí nhà cửa bằng hoa mai, hoa đào", done: false },
  { id: 5, task: "Mua phong bao lì xì", done: false },
  { id: 6, task: "Chuẩn bị mâm ngũ quả", done: false },
];

const taskListElement=document.querySelector("#taskList");
const taskInput=document.querySelector("#taskInput");
const addBtn=document.querySelector("#addBtn");
const clearBtn = document.querySelector("#clearBtn");

const render=() => {
    if(Array.isArray(initialTodos)) {
        const todoMaps=initialTodos.map((t) => {
            return `<div class="task ${t.done ? "done" : ""}">
                        <div class="taskContent">
                            <span class="circle">${t.done ? "✓" : ""}</span>
                            <span class="text">🌸 ${t.task}</span>
                        </div>
                        <div class="bonus">
                            <button class="updateBtn">✏️</button>
                            <button class="deleteBtn">🗑️</button>
                        </div>
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

    if(e.target.closest(".deleteBtn")){
        const isConfirm=confirm("Bạn có chắc muốn xóa công việc lày?");
        
        if(!isConfirm) return;

        initialTodos.splice(index, 1);
    } else if(e.target.closest(".updateBtn")){
        updateTask(task, index);
        return;
    }else{
        initialTodos[index].done = !initialTodos[index].done; // đảo trạng thái
    }
    localStorage.setItem("myTodos", JSON.stringify(initialTodos)); // myTodos đã tồn tại ở bài trc nên h chỉ cần ghi đè
    render();
});

const addTask=() => {
    const task=taskInput.value.trim();
    if(task==="") {
        alert("Vui lòng nhập công việc mới! Baby girl");
        return;
    }

    const newTask = {
        id: Date.now(),
        task,
        done: false
    };
    initialTodos.unshift(newTask);

    localStorage.setItem("myTodos", JSON.stringify(initialTodos));

    taskInput.value="";
    taskInput.focus();
    render();
};

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
    if(e.key==="Enter"){
        addTask();
    }
});

const updateTask = (task, index) => {
    const textElement=task.querySelector(".text"); // trường hợp nhiều text cần phải trở đúng vào task mình đang làm
    const oldValue = textElement.textContent.replace("🌸 ", "");  //.replace() là method của String trong JavaScript dùng để thay thế một phần chuỗi bằng chuỗi khác

    textElement.innerHTML = `<input type="text" class="editInput" value="${oldValue}">`; // mục đích là tạo biến để lưu lại nội dung task cũ trước khi đổi sang input mới, tránh cho vc mất lun dữ liệu

    const input = textElement.querySelector("input");

    input.focus();
    input.select(); // bôi toàn bộ text, dễ cho vc xóa ấy

    input.addEventListener("keydown", function(e){
        if(e.key === "Enter"){
            const newValue = input.value.trim();

            if(newValue === ""){
                alert("Tên công việc không được rỗng");
                return;
            }

            initialTodos[index].task = newValue;

            localStorage.setItem("myTodos", JSON.stringify(initialTodos));

            render();
        }

        if(e.key === "Escape"){
            render();
        }
    });
};

clearBtn.addEventListener("click", () => {
    const isConfirm = confirm("Bạn có chắc muốn xóa toàn bộ danh sách công việc?");

    if(!isConfirm) return;

    initialTodos.length = 0;
    localStorage.setItem("myTodos", JSON.stringify(initialTodos));

    render();
});

render();
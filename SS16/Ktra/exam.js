let tasks=[
    { id: 1, task: "Quét nhà"},
    { id: 2, task: "Giặt quần áo"},
    { id: 3, task: "Nấu ăn"}
];
let nextId=4;

const taskList=document.querySelector("#taskList");
const taskInput=document.querySelector("#taskInput");

const rederList=() => {
    let list="";
    tasks.forEach((t) => {
        list += `
            <li>${t.task}</li>
        `;
    });
    taskList.innerHTML=list;
};

const addTask=() => {
    let taskName=taskInput.value.trim();

    if(!taskName || taskName===""){
        alert("Vui lòng nhập tên công việc!");
        taskInput.focus();
        return;
    }

    const newTask={
        id: nextId++,
        task: taskName
    }

    tasks.push(newTask);
    taskInput.value="";
    taskInput.focus;
    rederList();
};

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (e) {
    if(e.key==="Enter"){
        addTask();
    }
})
rederList();
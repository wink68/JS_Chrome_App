const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

// todo list 추가 (li 태그)
function paintToDo(toDoObj) {
  const liTag = document.createElement("li");
  liTag.id = toDoObj.id;   // id 추가
  const spanTag = document.createElement("span");
  const btn = document.createElement("button");

  liTag.appendChild(spanTag);
  liTag.appendChild(btn);  
  toDoList.appendChild(liTag);

  spanTag.innerText = toDoObj.text;
  btn.innerText = "❌";
  btn.addEventListener("click", deleteToDo)
}

function handleTodoSubmit(e) {
    e.preventDefault();
  
    const newToDo = toDoInput.value;
    toDoInput.value = "";   // input 값 비우기
    const toDoObj = {
      text: newToDo,
      id: Date.now(),
    };

    toDos.push(toDoObj);    // 새 todo 리스트를 기존 리스트 배열에 추가
    paintToDo(toDoObj);
    saveToDos();
  }
  toDoForm.addEventListener("submit", handleTodoSubmit);

// todo list 삭제
function deleteToDo(e) {
  const delLiTag = e.target.parentElement;
  delLiTag.remove();
  toDos = toDos.filter(toDo => toDo.id !== parseInt(delLiTag.id));  // 삭제된 todo 요소를 배열에서 제거
  saveToDos();  // 로컬스토리지 업데이트
}

// localStorage에 todo list 저장
function saveToDos() {
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

const savedToDos = localStorage.getItem("toDos");

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;  // 로컬스토리지의 todo list 복원
  parsedToDos.forEach(paintToDo);
}


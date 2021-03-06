let employees = [];
let roles = [];
let selectedItem;

const listE1 = document.querySelector("ul");
const formE1 = document.querySelector("form");
const bdelete = document.getElementById("bdelete");
const bcancel = document.getElementById("bcancel");
const bcreate = document.getElementById("bcreate");

async function init() {

    try {
    [employees, roles] = await Promise.all([
        listEmployees(),
        listRoles(),
      ]);
      renderRoles();
      renderData();
      clearSelection();
      bcancel.addEventListener("click", clearSelection);
    } catch (erro) {
        showError(erro);
    }
}

init();


function selectItem(employee, li) {
  clearSelection();
  selectedItem = employee;
  li.classList.add("selected");
  formE1.name.value = employee.name;
  formE1.salary.valueAsNumber = employee.salary;
  formE1.role_id.value = employee.role_id;
  bdelete.style.display = "inline";
  bcancel.style.display = "inline";
}

function clearSelection() {
  selectedItem = undefined;
  const li = listE1.querySelector(".selected");
  if (li) {
    li.classList.remove("selected");
  }
  formE1.name.value = "";
  formE1.salary.value = "";
  formE1.role_id.value = "";
  bdelete.style.display = "none";
  bcancel.style.display = "none";
}


function renderData() {
    
    for (const employee of employees) {
      let role = roles.find((role) => {
        return role.id == employee.role_id;
      });
      const li = document.createElement("li");
      const divName = document.createElement("div");
      divName.textContent = employee.name;
      const divRole = document.createElement("div");
      divRole.textContent = role.name;
      li.appendChild(divName);
      li.appendChild(divRole);
      listE1.appendChild(li);

      li.addEventListener("click", () => selectItem(employee, li));
    }
}

function renderRoles() {
  for (const role of roles) {
    const option = document.createElement("option");
    option.textContent = role.name;
    option.value = role.id;
    formE1.role_id.appendChild(option);
  }
}

function showError(error) {
    document.getElementById("erros").textContent = "Erro ao carregar dados."
    console.log(error);
}
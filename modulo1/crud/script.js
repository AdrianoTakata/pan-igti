let employees = [];
let roles = [];
let selectedItem;
const elList = document.querySelector('ul');
const elForm = document.querySelector('form');
const bdelete = document.getElementById("bdelete");
const bcancel = document.getElementById("bcancel");
const bsubmit = document.getElementById("bsubmit");

async function init() {
    [employees, roles] = await Promise.all([ listEmployees(), listRoles()]);
    renderRoles();
    renderData();
    clearSelection();
    bcancel.addEventListener("click", clearSelection);
    bsubmit.addEventListener("click", onSubmit);
    bdelete.addEventListener("click", onDelete);
}

init();

function selectItem(employee, li) {
    clearSelection();
    selectedItem = employee;
    li.classList.add("selected");
    elForm.name.value = employee.name;
    elForm.salary.valueAsNumber = employee.salary;
    elForm.role_id.value = employee.role_id;
    bdelete.style.display = "inline";
    bcancel.style.display = "inline";
    bsubmit.textContent = "Update";
}

function clearSelection() {
    selectedItem = undefined;
    const li = elList.querySelector(".selected");
    if (li) {
        li.classList.remove("selected");
    }
    elForm.name.value = '';
    elForm.salary.value = '';
    elForm.role_id.value = '';
    bdelete.style.display = "none";
    bcancel.style.display = "none";
    bsubmit.textContent = "Create"
}

async function onSubmit(evt) {
    evt.preventDefault();
    const employeeData = {
        name: elForm.name.value,
        salary: elForm.salary.valueAsNumber,
        role_id: +elForm.role_id.value,
    };

    if (!employeeData.name || !employeeData.salary || employeeData.rode_id) {
        showError("You must fill all form fields.");
    } else {
        if (selectedItem) {
            const updatedItem = await updateEmployee(selectedItem.id, employeeData);
            const i = employees.indexOf(selectedItem);
            employees[i] = updatedItem;
            renderData();
            selectItem(updatedItem, elList.children[i])
        } else {
            const createdItem = await createEmployee(employeeData);
            employees.push(createdItem);
            renderData();
            selectItem(createdItem, elList.lastChild);
            elList.lastChild.scrollIntoView();
        }
    }
}

async function onDelete(){
    if (selectedItem) {
        await deleteEmployee(selectedItem.id)
        const i = employees.indexOf(selectedItem);
        employees.splice(i,1);
        renderData();
        clearSelection();
    }
}

function renderData() {
    elList.innerHTML = "";
    employees.forEach((employee) => {
    //for (let employee of employees){
        let role = roles.find((role) => {
            return role.id == employee.role_id
        }
        );
        const li = document.createElement('li')
        const divName = document.createElement('div');
        divName.textContent = employee.name;
        const divRole = document.createElement('div');
        divRole.textContent = role.name;
        li.append(divName, divRole);
        elList.appendChild(li);
        li.addEventListener('click', (evt) => selectItem(employee, evt.currentTarget));
    })
}

function renderRoles() {
    roles.forEach((role) => {
        const option = document.createElement('option');
        option.textContent = role.name;
        option.value = role.id;
        elForm.role_id.appendChild(option);
    })
}


function showError(message, error) {
    document.getElementById("errors").textContent = message;
    if (error) console.log(error);
}
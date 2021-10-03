async function init() {
    console.log('olá');

    const [roles, employees] = await Promise.all([
        fetchJson("http://localhost:3000/roles"),
        fetchJson("http://localhost:3000/employees")
    ]);
    initRoles(roles);
    updateEmployees(employees, roles);
    
    const div = document.querySelector(".app");
    div.addEventListener("change", () => {
        updateEmployees(employees, roles)
    })
}

init();

function initRoles(roles) {
    const rolesfs = document.getElementById("rolesfs");
    for (const role of roles) {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = role.id;
        label.append(checkbox, role.name);
    
        rolesfs.append(label);
    }
}

function updateEmployees(employees, roles) {

    const checkboxes = document.querySelectorAll("input:checked");
    const rolesIds = [];
    for (let i=0; i< checkboxes.length; i++){
        rolesIds.push(parseInt(checkboxes[i].value));
    }

    const filteredEmployees = employees.filter( (employee) => {
        if (!rolesIds.length){
            return true;
        } else {
            return rolesIds.indexOf(employee.role_id) !== -1;
        }
    }) 

    const sortby = document.getElementById("sortby").value;
    filteredEmployees.sort( (a,b) => {
        switch (sortby) {
            case "name-asc":
                return compare(a.name, b.name);
            case "name-desc":
                return -compare(a.name, b.name);
            case "salary-asc":
                return compare(a.salary, b.salary);
            case "salary-desc":
                return -compare(a.salary, b.salary);
        }
    })


    const tbody = document.querySelector("tbody");
    tbody.innerHTML = "";
    for (const employee of filteredEmployees) {
        const tr = document.createElement("tr");
        const tdID = document.createElement("td");
        tdID.textContent = employee.id;
        const tdName = document.createElement("td");
        tdName.textContent = employee.name;
        const tdRole = document.createElement("td");
        const role = roles.find( (role) => role.id === employee.role_id);
        tdRole.textContent = role.name;
        const tdSalary = document.createElement("td");
        tdSalary.textContent = employee.salary;

        tr.append(tdID, tdName, tdRole, tdSalary);
        tbody.append(tr);
    }
    document.getElementById("counter"). textContent =`(${filteredEmployees.length})`;
}

function fetchJson(url) {
    return fetch(url).then( (r) =>{
        if (r.ok) {
            return r.json();
        } else {
            throw new Error("Erro ao carregar os dados " + r.statusText);
        }
    });
}

function compare( v1, v2 ) {
    if (v1 < v2) {
        return -1;
    } else if (v1 > v2) {
        return 1;
    } else {
        return 0;
    }
}
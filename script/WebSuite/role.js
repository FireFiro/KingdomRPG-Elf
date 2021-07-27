createTable()
function createTable() {
    role.forEach(e => {
        addTable(e)
    })
}

function addTable(role) {
    let div = document.querySelector("#body")
    let HTML = `
    <tr>
        <th class="center">${role.category}</th>
        <td class="center"><img src="${role.image}"><br>${role.name}</td>
        <td class="center">${role.description}</td>
        <td>${role.mechanics}</td>
    </tr>`
    div.insertAdjacentHTML(`beforeend`, HTML)
}
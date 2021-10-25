let formAxie = document.getElementById("formAxie");
var verde = ["Plant", "Reptile", "Dusk"];
var azul = ["Bird", "Aqua", "Dawn"];
var rojo = ["Bug", "Mech", "Beast"];

formAxie.addEventListener('submit', function (event) {
    event.preventDefault();
    let axieData = new FormData(formAxie);
    let dataObj = transformFromToObj(axieData);
    savedAxie(dataObj)
    insertAxie(dataObj)
})
document.addEventListener("DOMContentLoaded", function (event) {
    let teamsPreForm = JSON.parse(localStorage.getItem("axies"))
    teamsPreForm.forEach(
        function (arrayElement) {
            insertAxie(arrayElement)
        }
    )
})
function getNewAxieId() {
    let lastAxieId = localStorage.getItem("lastAxieId") || "-1";
    let newAxieId = JSON.parse(lastAxieId) + 1;
    localStorage.setItem("lastAxieId", JSON.stringify(newAxieId))
    return newAxieId;
}
function transformFromToObj(axieData) {
    let axieName = axieData.get("axieName")
    let damage1 = axieData.get("damage1")
    let damage2 = axieData.get("damage2")
    let damage3 = axieData.get("damage3")
    let damage4 = axieData.get("damage4")
    let claseValue = axieData.get("claseValue")
    let claseValuD1 = axieData.get("claseValuD1")
    let claseValuD2 = axieData.get("claseValuD2")
    let claseValuD3 = axieData.get("claseValuD3")
    let claseValuD4 = axieData.get("claseValuD4")
    const damage = [damage1, damage2, damage3, damage4]
    const valuesClases = [claseValuD1, claseValuD2, claseValuD3, claseValuD4]
    let axieId = getNewAxieId();
    return {
        "axieName": axieName,
        "claseValue": claseValue,
        "damage1": damage1,
        "damage2": damage2,
        "damage3": damage3,
        "damage4": damage4,
        "claseValuD1": claseValuD1,
        "claseValuD2": claseValuD2,
        "claseValuD3": claseValuD3,
        "claseValuD4": claseValuD4,
        "axieId": axieId,
        "damage": damage,
        "valuesClases": valuesClases
    }
}
function insertAxie(dataObj) {
    let tableDamage = document.getElementById('datasos');
    let newRow = tableDamage.insertRow(-1)
    let newCell = newRow.insertCell(0);
    let valueSkill = dataObj["claseValue"]
    let multiplicador1 = dataObj["claseValuD1"]
    let multiplicador2 = dataObj["claseValuD2"]
    let multiplicador3 = dataObj["claseValuD3"]
    let multiplicador4 = dataObj["claseValuD4"]
    let damage1 = dataObj["damage1"]
    let damage2 = dataObj["damage2"]
    let damage3 = dataObj["damage3"]
    let damage4 = dataObj["damage4"]
    newRow.setAttribute("class", dataObj["axieName"])
    let deleteButton = document.createElement("button")
    deleteButton.className = "btn btn-danger"
    deleteButton.type = "button"
    deleteButton.textContent = "delete"
    let claseSkill = {
        valueSkillVerde: ["Plant", "Reptile", "Dusk"],
        valueSkillBlue: ["Aqua", "Bird", "Dawn"],
        valueSkillRed: ["Beast", "Mech", "Bug"]
    }

    //Aplicar Recursion en algun momento
    let hola1 = (damage1 * (multiplicador1 == valueSkill ? 1.1 : 1)) * (multiplicador1 == verde[0] ? 1 : multiplicador1 == verde[1] ? 1 : multiplicador1 == verde[2] ? 1 : multiplicador1 == "Bird" ? 0.85 : multiplicador1 == "Aqua" ? 0.85 : multiplicador1 == "Dawn" ? 0.85 : multiplicador1 == "Beast" ? 1.15 : multiplicador1 == "Mech" ? 1.15 : multiplicador1 == "Bug" ? 1.15 : null) + (damage1 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola2 = (damage1 * (multiplicador1 == valueSkill ? 1.1 : 1)) * (multiplicador1 == verde[0] ? 1.15 : multiplicador1 == verde[1] ? 1.15 : multiplicador1 == verde[2] ? 1.15 : multiplicador1 == "Bird" ? 1 : multiplicador1 == "Aqua" ? 1 : multiplicador1 == "Dawn" ? 1 : multiplicador1 == "Beast" ? 0.85 : multiplicador1 == "Mech" ? 0.85 : multiplicador1 == "Bug" ? 0.85 : null) + (damage1 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola3 = (damage1 * (multiplicador1 == valueSkill ? 1.1 : 1)) * (multiplicador1 == verde[0] ? 0.85 : multiplicador1 == verde[1] ? 0.85 : multiplicador1 == verde[2] ? 0.85 : multiplicador1 == "Bird" ? 1.15 : multiplicador1 == "Aqua" ? 1.15 : multiplicador1 == "Dawn" ? 1.15 : multiplicador1 == "Beast" ? 1 : multiplicador1 == "Mech" ? 1 : multiplicador1 == "Bug" ? 1 : null) + (damage1 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola4 = (damage2 * (multiplicador2 == valueSkill ? 1.1 : 1)) * (multiplicador2 == verde[0] ? 1 : multiplicador2 == verde[1] ? 1 : multiplicador2 == verde[2] ? 1 : multiplicador2 == "Bird" ? 0.85 : multiplicador2 == "Aqua" ? 0.85 : multiplicador2 == "Dawn" ? 0.85 : multiplicador2 == "Beast" ? 1.15 : multiplicador2 == "Mech" ? 1.15 : multiplicador2 == "Bug" ? 1.15 : null) + (damage2 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola5 = (damage2 * (multiplicador2 == valueSkill ? 1.1 : 1)) * (multiplicador2 == verde[0] ? 1.15 : multiplicador2 == verde[1] ? 1.15 : multiplicador2 == verde[2] ? 1.15 : multiplicador2 == "Bird" ? 1 : multiplicador2 == "Aqua" ? 1 : multiplicador2 == "Dawn" ? 1 : multiplicador2 == "Beast" ? 0.85 : multiplicador2 == "Mech" ? 0.85 : multiplicador2 == "Bug" ? 0.85 : null) + (damage2 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola6 = (damage2 * (multiplicador2 == valueSkill ? 1.1 : 1)) * (multiplicador2 == verde[0] ? 0.85 : multiplicador2 == verde[1] ? 0.85 : multiplicador2 == verde[2] ? 0.85 : multiplicador2 == "Bird" ? 1.15 : multiplicador2 == "Aqua" ? 1.15 : multiplicador2 == "Dawn" ? 1.15 : multiplicador2 == "Beast" ? 1 : multiplicador2 == "Mech" ? 1 : multiplicador2 == "Bug" ? 1 : null) + (damage2 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola7 = (damage3 * (multiplicador3 == valueSkill ? 1.1 : 1)) * (multiplicador3 == verde[0] ? 1 : multiplicador3 == verde[1] ? 1 : multiplicador3 == verde[2] ? 1 : multiplicador3 == "Bird" ? 0.85 : multiplicador3 == "Aqua" ? 0.85 : multiplicador3 == "Dawn" ? 0.85 : multiplicador3 == "Beast" ? 1.15 : multiplicador3 == "Mech" ? 1.15 : multiplicador3 == "Bug" ? 1.15 : null) + (damage3 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola8 = (damage3 * (multiplicador3 == valueSkill ? 1.1 : 1)) * (multiplicador3 == verde[0] ? 1.15 : multiplicador3 == verde[1] ? 1.15 : multiplicador3 == verde[2] ? 1.15 : multiplicador3 == "Bird" ? 1 : multiplicador3 == "Aqua" ? 1 : multiplicador3 == "Dawn" ? 1 : multiplicador3 == "Beast" ? 0.85 : multiplicador3 == "Mech" ? 0.85 : multiplicador3 == "Bug" ? 0.85 : null) + (damage3 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola9 = (damage3 * (multiplicador3 == valueSkill ? 1.1 : 1)) * (multiplicador3 == verde[0] ? 0.85 : multiplicador3 == verde[1] ? 0.85 : multiplicador3 == verde[2] ? 0.85 : multiplicador3 == "Bird" ? 1.15 : multiplicador3 == "Aqua" ? 1.15 : multiplicador3 == "Dawn" ? 1.15 : multiplicador3 == "Beast" ? 1 : multiplicador3 == "Mech" ? 1 : multiplicador3 == "Bug" ? 1 : null) + (damage3 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola10 = (damage4 * (multiplicador4 == valueSkill ? 1.1 : 1)) * (multiplicador4 == verde[0] ? 1 : multiplicador4 == verde[1] ? 1 : multiplicador4 == verde[2] ? 1 : multiplicador4 == "Bird" ? 0.85 : multiplicador4 == "Aqua" ? 0.85 : multiplicador4 == "Dawn" ? 0.85 : multiplicador4 == "Beast" ? 1.15 : multiplicador4 == "Mech" ? 1.15 : multiplicador4 == "Bug" ? 1.15 : null) + (damage4 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola11 = (damage4 * (multiplicador4 == valueSkill ? 1.1 : 1)) * (multiplicador4 == verde[0] ? 1.15 : multiplicador4 == verde[1] ? 1.15 : multiplicador4 == verde[2] ? 1.15 : multiplicador4 == "Bird" ? 1 : multiplicador4 == "Aqua" ? 1 : multiplicador4 == "Dawn" ? 1 : multiplicador4 == "Beast" ? 0.85 : multiplicador4 == "Mech" ? 0.85 : multiplicador4 == "Bug" ? 0.85 : null) + (damage4 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola12 = (damage4 * (multiplicador4 == valueSkill ? 1.1 : 1)) * (multiplicador4 == verde[0] ? 0.85 : multiplicador4 == verde[1] ? 0.85 : multiplicador4 == verde[2] ? 0.85 : multiplicador4 == "Bird" ? 1.15 : multiplicador4 == "Aqua" ? 1.15 : multiplicador4 == "Dawn" ? 1.15 : multiplicador4 == "Beast" ? 1 : multiplicador4 == "Mech" ? 1 : multiplicador4 == "Bug" ? 1 : null) + (damage4 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500

    newCell.textContent = dataObj["axieName"]
    newCell = newRow.insertCell(1);
    newCell.setAttribute("class", "bg-success opacity-75 text-center")
    newCell.textContent = Math.round(hola1)
    newCell = newRow.insertCell(2);
    newCell.setAttribute("class", "bg-info opacity-75 text-center")
    newCell.textContent = Math.round(hola2)
    newCell = newRow.insertCell(3);
    newCell.setAttribute("class", "bg-danger opacity-75 text-center")
    newCell.textContent = Math.round(hola3)
    newDeleteCell = newRow.insertCell(4);
    newDeleteCell.appendChild(deleteButton)
    newDeleteCell.addEventListener("click", (event) => {
        let dataRow = event.target.parentNode.parentNode;
        let axieName = dataRow.getAttribute("class");
        removeElementsByClass(axieName)
        deleteAxie(axieName)
    })
    newRow = tableDamage.insertRow(-1)
    newRow.setAttribute("class", dataObj["axieName"])
    newCell = newRow.insertCell(0);
    newCell.textContent = "Back"
    newCell = newRow.insertCell(1);
    newCell.setAttribute("class", "bg-success opacity-75 text-center")
    newCell.textContent = Math.round(hola4)
    newCell = newRow.insertCell(2);
    newCell.setAttribute("class", "bg-info opacity-75 text-center")
    newCell.textContent = Math.round(hola5)
    newCell = newRow.insertCell(3);
    newCell.setAttribute("class", "bg-danger opacity-75 text-center")
    newCell.textContent = Math.round(hola6)
    newRow = tableDamage.insertRow(-1)
    newRow.setAttribute("class", dataObj["axieName"])
    newCell = newRow.insertCell(0);
    newCell.textContent = "Horn"
    newCell = newRow.insertCell(1);
    newCell.setAttribute("class", "bg-success opacity-75 text-center")
    newCell.textContent = Math.round(hola7)
    newCell = newRow.insertCell(2);
    newCell.setAttribute("class", "bg-info opacity-75 text-center")
    newCell.textContent = Math.round(hola8)
    newCell = newRow.insertCell(3);
    newCell.setAttribute("class", "bg-danger opacity-75 text-center")
    newCell.textContent = Math.round(hola9)
    newRow = tableDamage.insertRow(-1)
    newRow.setAttribute("class", dataObj["axieName"])
    newCell = newRow.insertCell(0);
    newCell.textContent = "Tail"
    newCell = newRow.insertCell(1);
    newCell.setAttribute("class", "bg-success opacity-75 text-center")
    newCell.textContent = Math.round(hola10)
    newCell = newRow.insertCell(2);
    newCell.setAttribute("class", "bg-info opacity-75 text-center")
    newCell.textContent = Math.round(hola11)
    newCell = newRow.insertCell(3);
    newCell.setAttribute("class", "bg-danger opacity-75 text-center")
    newCell.textContent = Math.round(hola12)
}

function savedAxie(dataObj) {
    let dataObjJSON = JSON.parse(localStorage.getItem("axies")) || [];
    dataObjJSON.push(dataObj)
    let dataArrayObjJSON = JSON.stringify(dataObjJSON);
    localStorage.setItem("axies", dataArrayObjJSON)
}

function deleteAxie(axieName) {
    let axieObjArray = JSON.parse(localStorage.getItem("axies"));
    let axieIndexIdArray = axieObjArray.findIndex(element => element.axieName == axieName)
    axieObjArray.splice(axieIndexIdArray, 1);
    let dataArrayObjJSON = JSON.stringify(axieObjArray);
    // Saved array
    localStorage.setItem("axies", dataArrayObjJSON)
}
function removeElementsByClass(className) {
    const elements = document.getElementsByClassName(className);
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
}
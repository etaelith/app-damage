let formAxie = document.getElementById("formAxie");
var verde = ["plant", "reptile", "dusk"];
var azul = ["bird", "aqua", "dawn"];
var rojo = ["bug", "mech", "beast"];

formAxie.addEventListener('submit', function (event) {
    event.preventDefault();
    let axieData = new FormData(formAxie)
    let dataObj = transformFromToObj(axieData)
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

function savedAxie(dataObj) {
    let dataObjJSON = JSON.parse(localStorage.getItem("axies")) || [];
    dataObjJSON.push(dataObj)
    let dataArrayObjJSON = JSON.stringify(dataObjJSON);
    localStorage.setItem("axies", dataArrayObjJSON)
}
function insertAxie(dataObj) {
    let tableDamage = document.getElementById('datasos')
    let newRow = document.createElement('div');
    newRow.setAttribute("class", dataObj["axieName"])
    let claseSkill = {
        valueSkillVerde: ["plant", "reptile", "dusk"],
        valueSkillBlue: ["aqua", "bird", "dawn"],
        valueSkillRed: ["beast", "mech", "bug"]
    }
    let axieName = dataObj["axieName"]
    let valueSkill = dataObj["claseValue"]
    let multiplicador1 = dataObj["claseValuD1"]
    let multiplicador2 = dataObj["claseValuD2"]
    let multiplicador3 = dataObj["claseValuD3"]
    let multiplicador4 = dataObj["claseValuD4"]
    let damage1 = dataObj["damage1"]
    let damage2 = dataObj["damage2"]
    let damage3 = dataObj["damage3"]
    let damage4 = dataObj["damage4"]
    let hola1 = (damage1 * (multiplicador1 == valueSkill ? 1.1 : 1)) * (multiplicador1 == verde[0] ? 1 : multiplicador1 == verde[1] ? 1 : multiplicador1 == verde[2] ? 1 : multiplicador1 == azul[0] ? 0.85 : multiplicador1 == azul[1] ? 0.85 : multiplicador1 == azul[2] ? 0.85 : multiplicador1 == rojo[2] ? 1.15 : multiplicador1 == rojo[1] ? 1.15 : multiplicador1 == rojo[0] ? 1.15 : null) + (damage1 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola2 = (damage1 * (multiplicador1 == valueSkill ? 1.1 : 1)) * (multiplicador1 == verde[0] ? 1.15 : multiplicador1 == verde[1] ? 1.15 : multiplicador1 == verde[2] ? 1.15 : multiplicador1 == azul[0] ? 1 : multiplicador1 == azul[1] ? 1 : multiplicador1 == azul[2] ? 1 : multiplicador1 == rojo[2] ? 0.85 : multiplicador1 == rojo[1] ? 0.85 : multiplicador1 == rojo[0] ? 0.85 : null) + (damage1 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola3 = (damage1 * (multiplicador1 == valueSkill ? 1.1 : 1)) * (multiplicador1 == verde[0] ? 0.85 : multiplicador1 == verde[1] ? 0.85 : multiplicador1 == verde[2] ? 0.85 : multiplicador1 == azul[0] ? 1.15 : multiplicador1 == azul[1] ? 1.15 : multiplicador1 == azul[2] ? 1.15 : multiplicador1 == rojo[2] ? 1 : multiplicador1 == rojo[1] ? 1 : multiplicador1 == rojo[0] ? 1 : null) + (damage1 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola4 = (damage2 * (multiplicador2 == valueSkill ? 1.1 : 1)) * (multiplicador2 == verde[0] ? 1 : multiplicador2 == verde[1] ? 1 : multiplicador2 == verde[2] ? 1 : multiplicador2 == azul[0] ? 0.85 : multiplicador2 == azul[1] ? 0.85 : multiplicador2 == azul[2] ? 0.85 : multiplicador2 == rojo[2] ? 1.15 : multiplicador2 == rojo[1] ? 1.15 : multiplicador2 == rojo[0] ? 1.15 : null) + (damage2 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola5 = (damage2 * (multiplicador2 == valueSkill ? 1.1 : 1)) * (multiplicador2 == verde[0] ? 1.15 : multiplicador2 == verde[1] ? 1.15 : multiplicador2 == verde[2] ? 1.15 : multiplicador2 == azul[0] ? 1 : multiplicador2 == azul[1] ? 1 : multiplicador2 == azul[2] ? 1 : multiplicador2 == rojo[2] ? 0.85 : multiplicador2 == rojo[1] ? 0.85 : multiplicador2 == rojo[0] ? 0.85 : null) + (damage2 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola6 = (damage2 * (multiplicador2 == valueSkill ? 1.1 : 1)) * (multiplicador2 == verde[0] ? 0.85 : multiplicador2 == verde[1] ? 0.85 : multiplicador2 == verde[2] ? 0.85 : multiplicador2 == azul[0] ? 1.15 : multiplicador2 == azul[1] ? 1.15 : multiplicador2 == azul[2] ? 1.15 : multiplicador2 == rojo[2] ? 1 : multiplicador2 == rojo[1] ? 1 : multiplicador2 == rojo[0] ? 1 : null) + (damage2 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola7 = (damage3 * (multiplicador3 == valueSkill ? 1.1 : 1)) * (multiplicador3 == verde[0] ? 1 : multiplicador3 == verde[1] ? 1 : multiplicador3 == verde[2] ? 1 : multiplicador3 == azul[0] ? 0.85 : multiplicador3 == azul[1] ? 0.85 : multiplicador3 == azul[2] ? 0.85 : multiplicador3 == rojo[2] ? 1.15 : multiplicador3 == rojo[1] ? 1.15 : multiplicador3 == rojo[0] ? 1.15 : null) + (damage3 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola8 = (damage3 * (multiplicador3 == valueSkill ? 1.1 : 1)) * (multiplicador3 == verde[0] ? 1.15 : multiplicador3 == verde[1] ? 1.15 : multiplicador3 == verde[2] ? 1.15 : multiplicador3 == azul[0] ? 1 : multiplicador3 == azul[1] ? 1 : multiplicador3 == azul[2] ? 1 : multiplicador3 == rojo[2] ? 0.85 : multiplicador3 == rojo[1] ? 0.85 : multiplicador3 == rojo[0] ? 0.85 : null) + (damage3 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola9 = (damage3 * (multiplicador3 == valueSkill ? 1.1 : 1)) * (multiplicador3 == verde[0] ? 0.85 : multiplicador3 == verde[1] ? 0.85 : multiplicador3 == verde[2] ? 0.85 : multiplicador3 == azul[0] ? 1.15 : multiplicador3 == azul[1] ? 1.15 : multiplicador3 == azul[2] ? 1.15 : multiplicador3 == rojo[2] ? 1 : multiplicador3 == rojo[1] ? 1 : multiplicador3 == rojo[0] ? 1 : null) + (damage3 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola10 = (damage4 * (multiplicador4 == valueSkill ? 1.1 : 1)) * (multiplicador4 == verde[0] ? 1 : multiplicador4 == verde[1] ? 1 : multiplicador4 == verde[2] ? 1 : multiplicador4 == azul[0] ? 0.85 : multiplicador4 == azul[1] ? 0.85 : multiplicador4 == azul[2] ? 0.85 : multiplicador4 == rojo[2] ? 1.15 : multiplicador4 == rojo[1] ? 1.15 : multiplicador4 == rojo[0] ? 1.15 : null) + (damage4 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola11 = (damage4 * (multiplicador4 == valueSkill ? 1.1 : 1)) * (multiplicador4 == verde[0] ? 1.15 : multiplicador4 == verde[1] ? 1.15 : multiplicador4 == verde[2] ? 1.15 : multiplicador4 == azul[0] ? 1 : multiplicador4 == azul[1] ? 1 : multiplicador4 == azul[2] ? 1 : multiplicador4 == rojo[2] ? 0.85 : multiplicador4 == rojo[1] ? 0.85 : multiplicador4 == rojo[0] ? 0.85 : null) + (damage4 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500
    let hola12 = (damage4 * (multiplicador4 == valueSkill ? 1.1 : 1)) * (multiplicador4 == verde[0] ? 0.85 : multiplicador4 == verde[1] ? 0.85 : multiplicador4 == verde[2] ? 0.85 : multiplicador4 == azul[0] ? 1.15 : multiplicador4 == azul[1] ? 1.15 : multiplicador4 == azul[2] ? 1.15 : multiplicador4 == rojo[2] ? 1 : multiplicador4 == rojo[1] ? 1 : multiplicador4 == rojo[0] ? 1 : null) + (damage4 * (valueSkill == claseSkill.valueSkillVerde[0] ? 31 : valueSkill == claseSkill.valueSkillVerde[1] ? 31 : valueSkill == claseSkill.valueSkillVerde[2] ? 27 : valueSkill == claseSkill.valueSkillBlue[0] ? 35 : valueSkill == claseSkill.valueSkillBlue[1] ? 35 : valueSkill == claseSkill.valueSkillBlue[2] ? 39 : valueSkill == claseSkill.valueSkillRed[0] ? 31 : valueSkill == claseSkill.valueSkillRed[1] ? 43 : valueSkill = claseSkill.valueSkillRed[2] ? 35 : null)) / 500

    newRow.innerHTML = ` 
    <div >
        <div>${axieName}</div>
        <button type="button" class="btn-close" onclick="deleteAxie('${axieName}')"></button>
    </div>
    <div class="row text-center border"> 
    
    <div class="col-2">
        <div class="">Mouth</div>
          <div class="">Back</div>
          <div class="">Horn</div>
          <div class="">Tail</div>
        </div>
        <div class="col text-center">
            <div>${Math.round(hola1)}</div>
            <div>${Math.round(hola4)}</div>
            <div>${Math.round(hola7)}</div>
            <div>${Math.round(hola10)}</div>
        </div>
        <div class="col text-center">
            <div>${Math.round(hola2)}</div>
            <div>${Math.round(hola5)}</div>
            <div>${Math.round(hola8)}</div>
            <div>${Math.round(hola11)}</div>
        </div>
        <div class="col text-center">
            <div>${Math.round(hola3)}</div>
            <div>${Math.round(hola6)}</div>
            <div>${Math.round(hola9)}</div>
            <div>${Math.round(hola12)}</div>
        </div>
    </div>`;
    tableDamage.appendChild(newRow)
}
function deleteAxie(axieName) {
    tefuiste = document.getElementsByClassName(axieName)
    while (tefuiste.length > 0) tefuiste[0].remove();
    let axies = JSON.parse(localStorage.getItem('axies'))
    for (let i = 0; i < axies.length; i++) {
        if (axies[i].axieName == axieName) {
            axies.splice(i, 1);
        }
    }
    localStorage.setItem('axies', JSON.stringify(axies));

}

let formWinRate = document.getElementById("formWinRate")

formWinRate.addEventListener('submit', function (event) {
    event.preventDefault();
    let winRateData = new FormData(formWinRate)
    let dataObj = transformFromToObj1(winRateData)
    saveMatch(dataObj)
    insertMatch(dataObj)
})
document.addEventListener("DOMContentLoaded", function (event) {
    let matchsPreForm = JSON.parse(localStorage.getItem("matchs"))
    matchsPreForm.forEach(
        function (arrayElement) {
            insertMatch(arrayElement)
        }
    )
})
function transformFromToObj1(winRateData) {
    let firstAxie = winRateData.get("FirstAxie")
    let secondAxie = winRateData.get("SecondAxie")
    let thirdAxie = winRateData.get("ThirdAxie")
    let commentMatch = winRateData.get("floatingTextarea")
    let urlDemo = winRateData.get("urlDemo")
    let rate = winRateData.get("flexRadioDefault")
    return {
        firstAxie,
        secondAxie,
        thirdAxie,
        commentMatch,
        urlDemo,
        rate
    }
}

function saveMatch(dataObj) {
    let dataObjJSON = JSON.parse(localStorage.getItem("matchs")) || [];
    dataObjJSON.push(dataObj)
    let dataArrayObjJSON = JSON.stringify(dataObjJSON);
    localStorage.setItem("matchs", dataArrayObjJSON)
}

function insertMatch(dataObj) {
    let tableMatchs = document.getElementById('tableMatchs')
    let newRow = document.createElement('div');
    let first = dataObj["firstAxie"]
    let second = dataObj["secondAxie"]
    let third = dataObj["thirdAxie"]
    let comment = dataObj["commentMatch"]
    let url = dataObj["urlDemo"]
    let rate = dataObj["rate"]
    let color = rate == 1 ? "success" : "danger";
    newRow.innerHTML = `            
            <div class="row border border-${color}
                  rounded-pill
                  border-5">
              <div
                class="
                  col-3
                  text-center
                "
              >
                ${first} / ${second} / ${third}
              </div>
              <div
                class="
                  col-7                 
                  text-center
                "
              >
                ${comment}
              </div>
              <div
                class="
                  col-2
                  text-center
                "
              >
                <a href="${url}" target="_blank">Demo</a>
                </div>
            </div>
`
    tableMatchs.insertBefore(newRow, tableMatchs.childNodes[0])
}
function generateData(rows, cols) {
  const dataMatrix = document.getElementById("data");
  dataMatrix.style.gridTemplateColumns = "repeat(" + String(cols) + ", 65px)";
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < rows+1; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0) {
        const dataVariable = document.createElement("div");
        dataVariable.className = "data-variable";
        let dataVariableName = null;
        if (j < cols-1 || cols === 1) {
          dataVariableName = "X" + String(j);
        } else {
          dataVariableName = "y";
        }
        dataVariable.id = dataVariableName;
        dataVariable.innerHTML = dataVariableName;
        fragment.appendChild(dataVariable);
      } else {
        const dataCell = document.createElement("input");
        dataCell.className = "data-cell";
        dataCell.id = "r" + String(i+1) + "-" + "c" + String(j+1);
        dataCell.type = "number";
        dataCell.value = (1+Math.random()*100).toFixed(2);
        fragment.appendChild(dataCell);
      }
    }
  }
  dataMatrix.appendChild(fragment);
}

generateData(5, 5);

function clearData() {
  const dataMatrix = document.getElementById("data");
  while (dataMatrix.hasChildNodes()) {
    dataMatrix.removeChild(dataMatrix.firstChild);
  }
}

document.getElementById("generate-data-button").addEventListener("click", function() {
  let rows = Number(document.getElementById("data-rows").value);
  if (!rows || rows < 1 || rows > 20 || !Number.isInteger(rows)) {
    rows = 5;
  }
  let cols = Number(document.getElementById("data-cols").value);
  if (!cols || cols < 2 || cols > 10 || !Number.isInteger(cols)) {
    cols = 5;
  }
  clearData();
  generateData(rows, cols);
});
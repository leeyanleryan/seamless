function generateDefault() {
  const defaultRows = 5;
  const defaultCols = 5;
  const dataMatrix = document.getElementById("data");
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < defaultRows+1; i++) {
    for (let j = 0; j < defaultCols; j++) {
      if (i === 0) {
        const dataVariable = document.createElement("div");
        dataVariable.className = "data-variable";
        let dataVariableName = null;
        if (j < defaultCols-1) {
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
        fragment.appendChild(dataCell);
      }
    }
  }
  dataMatrix.appendChild(fragment);
}

generateDefault();

async function main() {
  let pyodide = await loadPyodide();
  const pythonFiles = [
    "./py/test.py"
  ];
  for (const pythonFile of pythonFiles) {
    const py = await fetch(pythonFile);
    const pyCode = await py.text();
    await pyodide.runPythonAsync(pyCode);
  }
  return pyodide;
}

let pyodideReadyPromise = main();

async function add() {
  let pyodide = await pyodideReadyPromise;
  try {
    const inp1 = document.getElementById("test1").value;
    const inp2 = document.getElementById("test2").value;
    const pythonAdd = pyodide.globals.get("add");
    const total = pythonAdd(inp1, inp2);
    document.getElementById("output").innerHTML = total;
  } catch(err) {
    console.error(err);
    document.getElementById("output").innerHTML = "Error!"
  }
}

document.getElementById("add-button").addEventListener("click", add);

async function multiplyby2() {
  let pyodide = await pyodideReadyPromise;
  try {
    const total = Number(document.getElementById("output").innerHTML);
    const pythonMultiplyBy2 = pyodide.globals.get("multiply_by_2");
    const result = pythonMultiplyBy2(total);
    document.getElementById("output").innerHTML = result;
  } catch(err) {
    console.error(err);
    document.getElementById("output").innerHTML = "Error!"
  }
}

document.getElementById("multiply-button").addEventListener("click", multiplyby2);
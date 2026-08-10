async function main() {
  let pyodide = await loadPyodide();
  return pyodide;
}
let pyodideReadyPromise = main();

async function add() {
  let pyodide = await pyodideReadyPromise;
  try {
    pyodide.runPython(`
    import js
    inp1 = js.document.getElementById("test1")
    inp2 = js.document.getElementById("test2")
    total = int(inp1.value) + int(inp2.value)
    js.document.getElementById("output").innerHTML = total
  `);
  } catch(err) {
    document.getElementById("output").innerHTML = "Error!"
  }
}

document.getElementById("add-button").addEventListener("click", add);

async function multiplyby2() {
  let pyodide = await pyodideReadyPromise;
  try {
    pyodide.globals.set("total", pyodide.globals.get("total")*2);
    document.getElementById("output").innerHTML = pyodide.globals.get("total");
  } catch(err) {
    document.getElementById("output").innerHTML = "Error!"
  }
}

document.getElementById("multiply-button").addEventListener("click", multiplyby2);
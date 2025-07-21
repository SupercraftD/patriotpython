

  function switchAssignment(u,l){
    document.getElementById("assignmenttitle").innerHTML = `${u+1}.${l+1}: ${units[u][l]}`;
    document.getElementById("header").innerHTML = lessonContents[units[u][l]].header;
    document.getElementById("code").value = lessonContents[units[u][l]].code;
  }

  for (let unit in units){
    
    let unitE = document.createElement("div")
    unitE.classList.add("unit")

    unitE.appendChild(document.createTextNode(`Unit ${parseInt(unit)+1}: ${unitNames[unit]}`))

    let lessons = document.createElement("ol")
    lessons.classList.add("lessons")
    lessons.classList.add("hiddenlessons")

    for (let lesson in units[unit]){
        let li = document.createElement("li")
        let a = document.createElement("a")
        a.href = "#"+lesson
        a.textContent = units[unit][lesson]
        a.onclick = function(){
            switchAssignment(parseInt(unit),parseInt(lesson))
        }
        li.appendChild(a)
        lessons.appendChild(li)
    }   
    unitE.appendChild(lessons)

    unitE.onclick = function(){

        for (let unitElement of document.getElementById("units").children){
            
            for (let lessonElement of unitElement.children){
                lessonElement.classList.remove("visiblelessons");
                lessonElement.classList.add("hiddenlessons");
            }
        }

        lessons.classList.remove("hiddenlessons");
        lessons.classList.add("visiblelessons");
    }

    document.getElementById("units").appendChild(unitE);
  }

  switchAssignment(0,0);

  document.getElementById("code").oninput = function(){
    document.getElementById("code").value = document.getElementById("code").value.replace("\t","    ");
  }

  //allows tab to work
  document.addEventListener("DOMContentLoaded", function() {
  const textarea = document.getElementById("code");
  textarea.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = this.selectionStart;
      const end = this.selectionEnd;

      // Set textarea value to: text before caret + tab + text after caret
      this.value = this.value.substring(0, start) + "    " + this.value.substring(end);

      // Move caret
      this.selectionStart = this.selectionEnd = start + 4;
    }
  });
});


  // Utility delay
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function reset(){
    document.getElementById("console").textContent = ""
  }

  // Run button event
  for (let element of document.getElementsByClassName("run-btn")){
    element.addEventListener('click', async () => {
      const runBtns = document.getElementsByClassName('run-btn');
      for (let e of runBtns){
        e.disabled=true;
      }
      try {
        reset();
        runCode();
      } catch(e) {
        alert('Error during execution:\n' + e.message);
      }
      for (let e of runBtns){
        e.disabled=false;
      }
    });
  }
  function outf(text) {
      document.getElementById("console").textContent += text;
  }

  function builtinRead(x) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined) {
          throw "File not found: '" + x + "'";
      }
      return Sk.builtinFiles["files"][x];
  }

  function runCode() {
      const prog = document.getElementById("code").value;
      document.getElementById("console").textContent = ""; // clear output

      Sk.configure({
          output: outf,
          read: builtinRead,
          inputfun: function (promptText) {
            console.log(promptText)
              return new Promise((resolve) => {
                  const userInput = prompt(promptText);
                  resolve(userInput);
              });
          },
         inputfunTakesPrompt: true

      });

      Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, prog, true))
          .catch(err => outf("\n" + err.toString()));
  }

  // Start fresh
  reset();
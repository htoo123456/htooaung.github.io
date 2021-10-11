const buttons = document.querySelectorAll("input[type = button]");
const inputSide = document.querySelector(".inputside");
const input = document.querySelector(".input");
const arrowLeft = document.querySelector(".arrows");
const cleanButton = document.querySelector(".clean");
const fifthLine = document.querySelector(".fifthLine");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if(input.textContent == "0") {
      input.textContent = "";
    }
    switch (e.target.value) {
      case "=":
        if (input.textContent == "") return;
        let changingValue = (input1) => {
          let acmultiple = input1.replaceAll("×", "*");
          let acdivide = acmultiple.replaceAll("÷", "/");
          let acpower = acdivide.replaceAll("^", "**");

          return acpower;
        };
        let value = /×|÷|^|√/.test(input.textContent)
          ? changingValue(input.textContent)
          : input.textContent;
        try {
          input.textContent = eval(value);
        } catch (error) {
          console.log(error);
        }
        
        break;
      case "Del":
        let cleanedValue = input.textContent.substring(
          0,
          input.textContent.length - 1
        );
        input.textContent = cleanedValue;
        break;
      case "AC":
        input.textContent = "0";
        break;
      default:
        input.textContent += e.target.value;
        break;
    }
  });
}

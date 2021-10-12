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
         const calc = eval(value);
          const parseFloat = String(calc);
          if(Number(parseFloat.length) >= 14 && parseFloat.includes(".")) {
            const toNumber = Number(parseFloat)
            const toBeFixed = toNumber.toFixed(5);
            input.textContent = toBeFixed;
          } else {
            input.textContent = calc;
          }
        } catch (error) {
          console.log(error);
        }
        
        break;
      case "Del":
        if(input.textContent == "0") {
          return;
        } else {
          const cleanedValue = input.textContent.substring(
          0,
          input.textContent.length - 1
        );
          if(cleanedValue == "") {
            input.textContent = "0";
          } else {
            input.textContent = cleanedValue;
          }
        }
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

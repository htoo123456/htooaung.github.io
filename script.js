const buttons = document.querySelectorAll("input[type = button]");
const inputSide = document.querySelector(".inputside");
const calculate = (num) {
  return new Function("return " + num)();
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    if(input.textContent == "0" && e.target.value != "Del" && e.target.value != "=") {
      input.textContent = "";
    }

    switch (e.target.value) {
      case "=":
        const changingValue = (input1) => {
          const acmultiple = input1.replaceAll("×", "*");
          const acdivide = acmultiple.replaceAll("÷", "/");
          return acdivide;
        };
        const value = /×|÷|^|√/.test(input.textContent)
          ? changingValue(input.textContent)
          : input.textContent;
        try {
         input.textContent = calculate(value);
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

const buttons = document.querySelectorAll("input[type = button]");
const inputSide = document.querySelector(".inputside");
const input = document.querySelector(".input");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    if(e.target.classList.contains("num")) {
      e.target.style.backgroundColor = "#fff";
      setTimeout(() => {
        e.target.style.backgroundColor = "hsl(30, 25%, 89%)"
      }, 100);
    } else {
      e.target.style.backgroundColor = "#ede3c2";
      setTimeout(() => {
        e.target.style.backgroundColor = "#ffc106"
      }, 200);
    }
    if (input.textContent == "0" && e.target.value != "Del" && e.target.value != "=") {
      input.textContent = "";
    }

    switch (e.target.value) {
      case "=":
        const changingValue = (input1) => {
          let acmultiple = input1.replaceAll("×", "*");
          let acdivide = acmultiple.replaceAll("÷", "/");
          return acdivide;
        };
        const value = /×|÷|^|√/.test(input.textContent)
          ? changingValue(input.textContent)
          : input.textContent;
        try {
          input.textContent = eval(value);
        } catch (error) {
          console.log(error);
        }

        break;
      case "Del":
          const cleanedValue = input.textContent.substring(
            0,
            input.textContent.length - 1
          );
          if(cleanedValue == "") {
            input.textContent = "0";
          } else {
            input.textContent = cleanedValue;
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
})

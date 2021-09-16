let buttons = document.querySelectorAll("input[type = button]");
let input = document.querySelector("input");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    input.value.substring(0, input.value.length -1);
    switch (e.target.value) {
      case "=":
        input.value = eval(input.value)
        break;
      case "AC":
        input.value = "";
        break;
      case "C":
        let cleanedValue = input.value.substring(0, input.value.length -1);
        input.value = cleanedValue;
        break;
      default:
        input.value += e.target.value
        break;
    }

  })};

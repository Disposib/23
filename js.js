let inputWidth = document.querySelector(".input_width");
let inputHeight = document.querySelector(".input_height");
let inputColor = document.querySelector(".input_color");

let btnClear = document.querySelector(".btn_clear");
let btnCreate = document.querySelector(".btn_create");

let btnUp = document.querySelector(".arrow_up");
let btnDown = document.querySelector(".arrow_down");
let btnLeft = document.querySelector(".arrow_left");
let btnRight = document.querySelector(".arrow_right");

let newDiv;
let mTop = 0;
let mLeft = 0;
let iwValue;
let ihValue;
let icValue;
let isRadius;
let isDiv = false;

btnCreate.addEventListener("click", createDiv);
btnClear.addEventListener("click", clearDiv);

function clearDiv() {
    document.querySelector(".container").firstChild.remove();
    document.querySelector(".container").style.borderRadius = 0;
    inputHeight.removeAttribute("readonly", 1);
    inputWidth.removeAttribute("readonly", 1);
    isDiv = false;
}

function createDiv() {
    if (!isDiv) {
        iwValue = inputWidth.value;
        ihValue = inputHeight.value;
        icValue = inputColor.value;
        isRadius = inputRadius.cheked;
    }

    if (iwValue >= 50 && ihValue >= 50 && iwValue <= 500 && ihValue <= 500) {
        newDiv = document.createElement("div");
        newDiv.style.width = iwValue + "px";
        newDiv.style.height = ihValue + "px";
        newDiv.style.background = icValue;

        if (isRadius) {
            newDiv.style.borderRadius = iwValue / 2 + "px"
            document.querySelector(".container").style.borderRadius = iwValue / 2 + "px"
        }

        document.querySelector(".container").prepend(newDiv);
        inputHeight.setAttribute("readonly", 1);
        inputWidth.setAttribute("readonly", 1);

        isDiv = true;
    }
}
const birthyear = document.getElementById("birthyear");

//Output
const result = document.getElementById("result");

const button = document.querySelector("button");

function age() {
    const userInput = birthyear.value;
    const age = 2023 - userInput;

    result.innerHTML = age;
}

button.addEventListener("click", age);

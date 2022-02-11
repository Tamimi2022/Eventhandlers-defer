// Part 3
const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
        alert("button clicked!");
    });
};
const toggleColor = function () {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};
const attachEventToChangeColorButton = function () {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function () {
        toggleColor();
    });
};
attachEventToAlertButton();
attachEventToChangeColorButton();


// Part 2
const changeClassBlueBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
  };
  const attachEventToChangeColorButton = function () {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function () {
      changeClassBlueBackground();
    });
  };
  const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("alert-button");
    alertButton.addEventListener("click", function () {
      alert("button clicked!");
    });
  };
  
  attachEventToAlertButton();
  attachEventToChangeColorButton();
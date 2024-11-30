const adjustMargin = () => {
  let formElement = document.querySelector("form");
  let putText = document.querySelector(".put-text");
  let checkBoxex = document.querySelectorAll(".checkbox");
  let evenlyFake = (formElement.offsetWidth - putText.offsetWidth * 2) / 3;

  checkBoxex.forEach((checkBox) =>
    evenlyFake > 0 ? (checkBox.style.marginLeft = `${evenlyFake}px`) : "0px"
  );
};

window.addEventListener("load", adjustMargin);
window.addEventListener("resize", adjustMargin);

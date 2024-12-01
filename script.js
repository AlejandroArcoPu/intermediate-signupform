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
let passwordInputs = document.querySelectorAll('input[type="password"]');

const checkPasswordValidity = () => {
  let password = passwordInputs[0];
  let confirmPassword = passwordInputs[1];

  password.setCustomValidity("");
  confirmPassword.setCustomValidity("");
  if (!password.validity.valid) return;

  if (password.value !== confirmPassword.value) {
    password.setCustomValidity("Passwords must be identical.");
    confirmPassword.setCustomValidity("Passwords must be identical.");
  }
};

passwordInputs.forEach((password) =>
  password.addEventListener("keyup", checkPasswordValidity)
);

let btnValidate = document.querySelector(".btn-validate");
let urlInput = document.querySelector(".url");
let display = document.querySelector(".display");
const regex =
  /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-_]+\.[a-zA-Z]+(\/[a-zA-Z0-9\-_]+)*$/;

btnValidate.addEventListener("click", () => {
  let url = urlInput.value;
  if (regex.test(url)) {
    display.textContent = "Valid Url";
    display.style.color = "green";
  } else {
    display.textContent = "Invalid Url";
    display.style.color = "red";
  }
});

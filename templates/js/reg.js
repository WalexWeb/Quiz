const form = document.querySelector(".registration-form");
const registerBtn = document.querySelector("#register");
const headerContainer = document.querySelector("#header");
const signInBtn = document.querySelector("#signIn");

registerBtn.onclick = () => {
  for (item of form) {
    if (item.value === "") {
      item.classList.add("wrong");
    } else {
      item.classList.remove("wrong");
      registerBtn.blur();
    }
  }
};

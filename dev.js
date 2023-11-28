function validateForm() {
  var emailID = document.Contact.mail.value;
  atpos = emailID.indexof("@");
  dotpos = emailID.lastIndexof(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    alert("please input correct email ");
    document.Contact.mail.focus();
    return false;
  }
  if (document.Contact.name.value == "") {
    alert("please input your name !!");
    document.Contact.name.focus();
    return false;
  }
  return true;
}
const button = document.querySelector("form");
document.getElementById("clk").addEventListener("click", (event) => {
  event.preventDefault();
});


// button.addEventListener("click", function () {
//   SubmitPopup.classList.add("show");
// });
// ClosePopup.addEventListener("click", function () {
//   SubmitPopup.classList.remove("show");
// });
// window.addEventListener("click", function (event) {
//   if (event.target == SubmitPopup) {
//     SubmitPopup.classList.remove("show");
//   }
// });

// const form = document.querySelector("form");
// const name = document.getElementById("name");
// const email = document.getElementById("mail");
// const emailError = document.querySelector("#mail + span.error");

// email.addEventListener("input", (event) => {
//   if (email.validity.valid) {
//     emailError.textContent = ""; // Reset the content of the message
//     emailError.className = "error"; // Reset the visual state of the message
//   } else {
//     showError();
//   }
// });

// form.addEventListener("submit", (event) => {
//   if (!email.validity.valid) {
//     showError();
//     event.preventDefault();
//   }
// });

// function showError() {
//   if (email.validity.valueMissing) {
//     emailError.textContent = "You need to enter an email address.";
//   } else if (email.validity.typeMismatch) {
//     emailError.textContent = "Entered value needs to be an email address.";
//   } else if (email.validity.tooShort) {
//     emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
//   }
//   emailError.className = "error active";
// }

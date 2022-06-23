let fulName = document.getElementById("name"),
  contact = document.getElementById("contact"),
  phone = document.getElementById("phone"),
  email = document.getElementById("email"),
  subject = document.getElementById("subject"),
  form = document.getElementById("contact_form"),
  describe = document.getElementById("describe");

let errorMsg = document.getElementsByClassName("error");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (fulName.value == "") {
    errorMsg[0].innerHTML = "Enter your full name";
    errorMsg[0].style.display = "block";
    fulName.style.border = "1px solid red";
  } else if (fulName.value.length <= 2) {
    errorMsg[0].innerHTML = "Your name must be more than 2 characters";
    errorMsg[0].style.display = "block";
    fulName.style.border = "1px solid red";
  } else {
    errorMsg[0].innerHTML = "";
    fulName.style.border = "1px solid green";
  }
});

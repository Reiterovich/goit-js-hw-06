const onLogin = document.querySelector(".login-form");

onLogin.addEventListener("submit", sendForm);

function sendForm(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }
  const user = {
    email,
    password,
  };
  console.log(user);
  form.reset();
}

import { makeHeader } from "../components/header.mjs";
import { makeFooter } from "../components/footer.mjs";
import { handleRegistration } from "../components/handleRegistration.mjs";

const runPage = () => {
  makePage();
  makeHeader();
  makeFooter();
  handleRegistration();
};

const makePage = () => {
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.className = "container";

  const h1 = document.createElement("h1");
  h1.innerText = "Register";
  h1.className = "headerOne";

  const form = document.createElement("form");
  form.className = "form flex flex-col items-center";
  form.id = "registrationForm";

  const email = document.createElement("input");
  email.type = "email";
  email.id = "email";
  email.name = "email";
  email.placeholder = "Email";
  email.className = "headerTwo loginForms";
  email.required = true;

  const username = document.createElement("input");
  username.type = "text";
  username.name = "name";
  username.id = "username";
  username.placeholder = "Username";
  username.className = "headerTwo loginForms";
  username.autocomplete = "username";
  username.required = true;

  const password = document.createElement("input");
  password.type = "password";
  password.id = "password";
  password.name = "password";
  password.placeholder = "Password";
  password.className = "headerTwo loginForms";
  password.autocomplete = "current-password";
  password.required = true;

  const button = document.createElement("button");
  button.type = "submit";
  button.innerText = "Register";
  button.className = "buttonBig";

  const logInButton = document.createElement("a");
  logInButton.innerText = "Log in";
  logInButton.className = "alternativeHeadline styles-none";
  logInButton.href = "./login.html";

  main.appendChild(container);
  container.append(h1, form);
  form.append(email, username, password, button, logInButton);
};

runPage();

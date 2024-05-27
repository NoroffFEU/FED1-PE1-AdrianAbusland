import { doFetch } from "./fetch.mjs";

export const handleRegistration = () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const MIN_PASSWORD_LENGTH = 8;
    const formData = new FormData(form);
    const registerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (registerData.password.length < MIN_PASSWORD_LENGTH) {
      alert(`Password must be at least ${MIN_PASSWORD_LENGTH} characters`);
      return;
    }

    if (!registerData.email.endsWith("@stud.noroff.no")) {
      alert(`Email must be a stud.noroff.no email.`);
      return;
    }
    const response = await doFetch(
      "POST",
      "https://v2.api.noroff.dev/auth/register",
      registerData
    );
    if (response) {
      alert(`Successfully created user "${registerData.name}"`);
      window.location.href = "./login.html";
    } else {
      alert("Something went wrong!");
    }
  });
};

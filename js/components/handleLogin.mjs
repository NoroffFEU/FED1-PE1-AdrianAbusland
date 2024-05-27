import { doFetch } from "./fetch.mjs";

export const handleLogIn = () => {
  const form = document.getElementById("logInForm");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const logInData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const response = await doFetch(
      "POST",
      "https://v2.api.noroff.dev/auth/login",
      logInData
    );
    if (!response) {
      alert("Your Email or Password is wrong.");
      return;
    }

    localStorage.setItem("userInfo", JSON.stringify(response));
    window.location.href = "../index.html";
  });
};

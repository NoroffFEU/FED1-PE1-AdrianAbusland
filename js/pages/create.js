import { makeHeader } from "../components/header.mjs";
import { makeFooter } from "../components/footer.mjs";
import { doFetch } from "../components/fetch.mjs";

const runPage = () => {
  makePage();
  makeHeader();
  makeFooter();
};

const makePage = () => {
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.className = "container";

  const imageBox = document.createElement("div");
  imageBox.className = "width-100 max-height550 overflow-hidden";

  const headline = document.createElement("h1");
  headline.innerHTML = "Create Post";
  headline.className = "headerOne";

  main.appendChild(container);
  container.append(headline, imageBox);
  makeForms(container, imageBox);
};

const makeForms = (container, imageBox) => {
  const form = document.createElement("form");
  form.className = "flex flex-col items-center form";

  const imageFormBox = document.createElement("div");
  imageFormBox.className = "inputBox";

  const imageLabel = document.createElement("label");
  imageLabel.innerText = "Image URL:";
  imageLabel.className = "headerTwo";

  const imageInput = document.createElement("input");
  imageInput.type = "text";
  imageInput.id = "image";
  imageInput.name = "image";
  imageInput.className = "inputField";
  imageInput.placeholder = "Insert image url here..";

  imageInput.addEventListener("input", () => {
    const existingImagePreview = imageBox.querySelector(".postImage");
    if (existingImagePreview) {
      existingImagePreview.remove();
    }
    if (imageInput.value.trim() !== "") {
      const imagePreview = document.createElement("img");
      imagePreview.src = imageInput.value;
      imagePreview.className = "postImage object-fit width-100 height-100";
      imageBox.appendChild(imagePreview);
    } else {
      imagePreview.src = "#";
    }
  });

  const tagFormBox = document.createElement("div");
  tagFormBox.className = "inputBox";

  const tagLabel = document.createElement("label");
  tagLabel.innerText = "Tags:";
  tagLabel.className = "headerTwo";

  const tagInput = document.createElement("input");
  tagInput.type = "text";
  tagInput.id = "tag";
  tagInput.name = "tag";
  tagInput.className = "inputField";
  tagInput.placeholder = "Insert a tag here..";

  const titleFormBox = document.createElement("div");
  titleFormBox.className = "inputBox";

  const titleLabel = document.createElement("label");
  titleLabel.innerHTML = "Title:";
  titleLabel.setAttribute("for", "title");
  titleLabel.className = "headerTwo";

  const inputField = document.createElement("input");
  inputField.className = "inputField";
  inputField.type = "text";
  inputField.id = "title";
  inputField.name = "title";
  inputField.placeholder = "Insert text here..";

  const textFormBox = document.createElement("div");

  const textInput = document.createElement("textarea");
  textInput.className = "textInput";
  textInput.id = "text";
  textInput.name = "text";
  textInput.placeholder = "Add text here..";

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Save";
  submitButton.className = "buttonBig";

  const cancelButton = document.createElement("button");
  cancelButton.innerText = "Cancel";
  cancelButton.className = "buttonSmall";
  cancelButton.onclick = () => {
    window.location.href = "../index.html";
  };
  container.append(form, cancelButton);
  form.append(
    imageFormBox,
    tagFormBox,
    titleFormBox,
    textFormBox,
    submitButton
  );
  imageFormBox.append(imageLabel, imageInput);
  titleFormBox.append(titleLabel, inputField);
  tagFormBox.append(tagLabel, tagInput);
  textFormBox.append(textInput);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const postData = {
      title: formData.get("title"),
      body: formData.get("text"),
      media: {
        url: formData.get("image"),
        alt: "Image for Blog Post: " + formData.get("title"),
      },
      tags: [formData.get("tag")],
      // Add other form fields as needed
    };
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    await doFetch(
      "POST",
      "https://v2.api.noroff.dev/blog/posts/" + userInfo.name,
      postData
    );
    window.location.href = "../index.html";
  });
};

runPage();

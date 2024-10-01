import { makeHeader } from "../components/header.mjs";
import { makeFooter } from "../components/footer.mjs";
import { doFetch } from "../components/fetch.mjs";

const runPage = async () => {
  const id = window.location.search.slice(1);
  const blog = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/TestAdrian1/" + id
  );
  makePage(blog, id);
  makeHeader();
  makeFooter();
};

const makePage = (blog, id) => {
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.className = "container";

  const imageBox = document.createElement("div");
  imageBox.className = "postImageContainer width-100 overflow-hidden shadow";

  const headline = document.createElement("h1");
  headline.innerHTML = "Edit Post";
  headline.className = "headerOne";

  main.appendChild(container);
  container.append(headline, imageBox);
  makeForms(container, imageBox, blog, id);
};

const makeForms = (container, imageBox, blog, id) => {
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
  imageInput.placeholder = "insert image URL here..";
  imageInput.defaultValue = blog.media.url;
  const imageInputEvent = () => {
    const existingImagePreview = imageBox.querySelector(".postImage");
    if (existingImagePreview) {
      existingImagePreview.remove();
    }
    if (imageInput.value.trim() !== "") {
      const imagePreview = document.createElement("img");
      imagePreview.src = imageInput.value;
      imagePreview.className = "postImage object-fit width-100 height-100";
      imagePreview.id = "imagePreview";
      imageBox.appendChild(imagePreview);
    } else {
      imagePreview.src = "#";
    }
  };
  imageInputEvent();

  imageInput.addEventListener("input", imageInputEvent);

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
  tagInput.defaultValue = blog.tags;

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
  inputField.defaultValue = blog.title;

  const textFormBox = document.createElement("div");

  const textInput = document.createElement("textarea");
  textInput.className = "textInput";
  textInput.id = "text";
  textInput.name = "text";
  textInput.placeholder = "Add text here..";
  textInput.defaultValue = blog.body;

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Save";
  submitButton.className = "buttonBig";

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.className = "buttonSmall";
  deleteButton.onclick = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const result = window.confirm("Are you sure you want to delete this?");
    if (result) {
      doFetch(
        "DELETE",
        "https://v2.api.noroff.dev/blog/posts/" + userInfo.name + "/" + id
      );
      window.location.href = "../index.html";
    }
  };

  container.append(form, deleteButton);
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
      tags: formData.get("tag").split(","),
    };
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    await doFetch(
      "PUT",
      "https://v2.api.noroff.dev/blog/posts/" + userInfo.name + "/" + id,
      postData
    );

    window.location.href = "index.html?" + id;
  });
};

runPage();

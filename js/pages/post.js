import { makeHeader } from "../components/header.mjs";
import { makeFooter } from "../components/footer.mjs";
import { doFetch } from "../components/fetch.mjs";

const runPage = async () => {
  await makePage();
  makeHeader();
  makeFooter();
};

const makePage = async () => {
  const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  const userInfo = getUserInfo ? getUserInfo : "";
  const id = window.location.search.slice(1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const blog = await doFetch(
    "GET",
    "https://v2.api.noroff.dev/blog/posts/TestAdrian1/" + id
  );

  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.className = "container";

  const backButton = document.createElement("button");
  backButton.innerText = "Go Back";
  backButton.className = "buttonSmall position-left marginBackButton";
  backButton.onclick = () => {
    window.location.href = "../index.html";
  };

  const imageBox = document.createElement("div");
  imageBox.className = "postImageContainer width-100 overflow-hidden shadow";

  const postImage = document.createElement("img");
  postImage.className = "object-fit width-100 height-100";
  postImage.src = blog.media.url;
  postImage.alt = blog.media.alt;

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.className = "buttonSmall position-right";
  editButton.style.display = userInfo.name === "TestAdrian1" ? "block" : "none";
  editButton.onclick = () => {
    window.location.href = "edit.html" + "?" + id;
  };

  const postTitle = document.createElement("h1");
  postTitle.innerText = blog.title;
  postTitle.className = "headerOne";

  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col gap10 shadow textBox";

  const tagContainer = document.createElement("div");
  tagContainer.className = "flex gap10";

  const tagText = document.createElement("p");
  tagText.innerText = "Tags:";

  const tags = document.createElement("p");
  tags.innerText = blog.tags;

  const authorContainer = document.createElement("div");
  authorContainer.className = "flex gap10";

  const authorText = document.createElement("p");
  authorText.innerText = "Author:";

  const author = document.createElement("p");
  author.innerText = blog.author.name;

  const publicationContainer = document.createElement("div");
  publicationContainer.className = "flex gap10";

  const publicationDateText = document.createElement("p");
  publicationDateText.innerText = "Publication date:";

  const publicationDate = document.createElement("p");
  const formattedDate = new Date(blog.created);
  publicationDate.innerText = `${formattedDate.getDate()} ${
    months[formattedDate.getMonth()]
  } ${formattedDate.getFullYear()}`;

  const postText = document.createElement("p");
  postText.innerText = blog.body;

  main.appendChild(container);
  container.append(backButton, imageBox, editButton, postTitle, textContainer);
  imageBox.appendChild(postImage);
  textContainer.append(
    tagContainer,
    authorContainer,
    publicationContainer,
    postText
  );
  tagContainer.append(tagText, tags);
  authorContainer.append(authorText, author);
  publicationContainer.append(publicationDateText, publicationDate);
};

runPage();

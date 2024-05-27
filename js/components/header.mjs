export const makeHeader = () => {
  const isFrontPage = !(
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account") ||
    window.location.pathname.includes("about")
  );
  const prefix = isFrontPage ? "" : "../";

  const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  const userInfo = getUserInfo ? getUserInfo : "";

  desktopHeader(isFrontPage, userInfo, prefix);
  tabletHeader(isFrontPage, userInfo, prefix);
};

const desktopHeader = (isFrontPage, userInfo, prefix) => {
  const header = document.querySelector("header");

  const container = document.createElement("div");
  container.className = "flex between items-center desktopHeader";

  const leftHeader = document.createElement("div");
  leftHeader.className = "flex gap10 items-center";

  const loggedInAs = document.createElement("p");
  loggedInAs.innerText = "Logged in as: " + userInfo.name;
  loggedInAs.style.display = userInfo ? "block" : "none";
  loggedInAs.className = "headerTwo color-black";

  const logo = document.createElement("img");

  logo.className = "cursor logo";
  logo.alt = "logo";

  logo.addEventListener("click", () => {
    if (isFrontPage) {
      window.location.href = "index.html";
    } else {
      window.location.href = "../index.html";
    }
  });

  const nav = document.createElement("nav");
  nav.className = "justify-evenly header-gap flex";

  const createPost = document.createElement("a");
  createPost.innerText = "+ Create Post";
  createPost.className = "headerText margin cursor";
  createPost.style.display = userInfo.name === "owner" ? "block" : "none";

  const home = document.createElement("a");
  home.innerText = "Home";
  home.className = "headerText margin cursor";

  const logOut = document.createElement("button");
  logOut.innerText = "Log Out";
  logOut.className = "headerText margin cursor smallBlueButton";
  logOut.classList.add = "hidden";
  logOut.onclick = () => {
    localStorage.removeItem("userInfo");
    if (isFrontPage) {
      window.location.href = "index.html";
    } else {
      window.location.href = "../index.html";
    }
  };

  const logIn = document.createElement("a");
  logIn.innerText = "Login";
  logIn.classList.add = "visible";

  logIn.className = "headerText margin cursor";

  logIn.href = prefix + "account/login.html";
  home.href = prefix + "index.html";
  logo.src = prefix + "public/Logo.png";
  createPost.href = prefix + "post/create.html";

  if (userInfo) {
    logIn.style.display = "none";
    logOut.style.display = "block";
  } else {
    logIn.style.display = "block";
    logOut.style.display = "none";
  }

  header.appendChild(container);
  container.append(leftHeader, nav);
  leftHeader.append(logo, loggedInAs);
  nav.append(createPost, home, logIn, logOut);
};

const tabletHeader = (isFrontPage, userInfo, prefix) => {
  const header = document.querySelector("header");

  const container = document.createElement("div");
  container.className = "flex between items-center tabletHeader";

  const logo = document.createElement("img");

  const loggedInAsContainer = document.createElement("div");
  loggedInAsContainer.className = "width-100";

  const loggedInAs = document.createElement("p");
  loggedInAs.innerText = "Logged in as: " + userInfo.name;
  loggedInAs.style.display = userInfo ? "block" : "none";
  loggedInAs.className = "headerTwo";

  logo.className = "cursor logo";
  logo.alt = "logo";
  logo.addEventListener("click", () => {
    if (isFrontPage) {
      window.location.href = "index.html";
    } else {
      window.location.href = "../index.html";
    }
  });

  const details = document.createElement("details");

  const menuButton = document.createElement("summary");
  menuButton.className = "menuButton headerText list-style-none";

  const menuImg = document.createElement("img");
  menuImg.alt = "menu";

  const ul = document.createElement("ul");
  ul.className =
    "boxMenu flex justify-center items-center list-style-none position-absolute shadow z-index2 flex-wrap width-100";

  const createPost = document.createElement("a");
  createPost.innerText = "+ Create Post";
  createPost.className = "headerTwo marginBotTop styles-none";

  const home = document.createElement("a");
  home.innerText = "Home";
  home.className = "headerTwo marginBotTop styles-none";

  const logOut = document.createElement("button");
  logOut.innerText = "Log Out";
  logOut.className = "headerText margin cursor";
  logOut.className = "hidden smallBlueButton";
  logOut.onclick = () => {
    localStorage.removeItem("userInfo");
    if (isFrontPage) {
      window.location.href = "index.html";
    } else {
      window.location.href = "../index.html";
    }
  };

  const logIn = document.createElement("a");
  logIn.innerText = "Log In";
  logIn.className = "headerTwo marginBotTop cursor styles-none";

  const aboutUs = document.createElement("a");
  aboutUs.innerText = "About Us";
  aboutUs.className = "headerTwo marginBotTop cursor styles-none";

  logIn.href = prefix + "account/login.html";
  createPost.href = prefix + "post/create.html";
  home.href = prefix + "index.html";
  logo.src = prefix + "public/Logo.png";
  aboutUs.href = prefix + "about/marley.html";
  menuImg.src = prefix + "public/Menu.png";
  logo.src = prefix + "public/Logo.png";

  if (userInfo) {
    createPost.style.display = "block";
    logIn.style.display = "none";
    logOut.style.display = "block";
  } else {
    createPost.style.display = "none";
    logIn.style.display = "block";
    logOut.style.display = "none";
  }

  header.appendChild(container);
  container.append(logo, details);
  details.append(menuButton, ul);
  menuButton.appendChild(menuImg);
  ul.append(home, aboutUs, logIn, createPost, logOut, loggedInAsContainer);
  loggedInAsContainer.appendChild(loggedInAs);
};

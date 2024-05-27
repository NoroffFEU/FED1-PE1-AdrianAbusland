export const makeFooter = () => {
  const isFrontPage = !(
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account") ||
    window.location.pathname.includes("about")
  );

  desktopVersion(isFrontPage);
};

const desktopVersion = (isFrontPage) => {
  const footer = document.querySelector("footer");

  const container = document.createElement("div");
  container.className = "flex justify-evenly desktopFooter";

  const informationBox = document.createElement("div");
  informationBox.className = "flex marginBotTop items-center";

  const instagram = document.createElement("i");
  instagram.className = "fa-brands fa-instagram fa-2xl";
  instagram.style.color = "#9e6031";

  const tikTokA = document.createElement("a");
  tikTokA.href = "https://www.tiktok.com/@marley_the_dog_no";
  tikTokA.target = "_blank";
  tikTokA.className = "marginLinks";

  const instagramA = document.createElement("a");
  instagramA.href = "https://www.instagram.com/marley_the_dog_dk/";
  instagramA.target = "_blank";
  instagramA.className = "marginLinks";

  const tikTok = document.createElement("i");
  tikTok.className = "fa-brands fa-tiktok fa-2xl";
  tikTok.style.color = "#9e6031";

  const logo = document.createElement("img");
  if (isFrontPage) {
    logo.src = "./public/Logo.png";
  } else {
    logo.src = "../public/Logo.png";
  }
  logo.className = "logo footerLogo";
  logo.alt = "logo";

  const aboutUsBox = document.createElement("div");
  aboutUsBox.className =
    "flex flex-col marginBotTop items-center aboutUsBox justify-center";

  const aboutUs = document.createElement("a");
  aboutUs.innerText = "About Us";
  aboutUs.className = "footerText styles-none cursor";
  if (isFrontPage) {
    aboutUs.href = "./about/marley.html";
  } else {
    aboutUs.href = "../about/marley.html";
  }

  footer.appendChild(container);
  container.append(informationBox, logo, aboutUsBox);
  informationBox.append(instagramA, tikTokA);
  instagramA.appendChild(instagram);
  tikTokA.appendChild(tikTok);
  aboutUsBox.appendChild(aboutUs);
};

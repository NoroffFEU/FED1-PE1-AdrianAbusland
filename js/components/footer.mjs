export const makeFooter = () => {
  const isFrontPage = !(
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("account")
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
  tikTokA.href = "https://www.tiktok.com/@add_user_here";  //Change "@add_user_here" with you own username from tiktok
  tikTokA.target = "_blank";
  tikTokA.className = "marginLinks";

  const instagramA = document.createElement("a");
  instagramA.href = "https://www.instagram.com/add_user_here/";  //Change "add_user_here" with you own username from instagram
  instagramA.target = "_blank";
  instagramA.className = "marginLinks";

  const tikTok = document.createElement("i");
  tikTok.className = "fa-brands fa-tiktok fa-2xl";
  tikTok.style.color = "#9e6031";

  footer.appendChild(container);
  container.append(informationBox);
  informationBox.append(instagramA, tikTokA);
  instagramA.appendChild(instagram);
  tikTokA.appendChild(tikTok);
};

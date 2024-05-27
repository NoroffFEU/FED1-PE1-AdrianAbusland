import { makeFooter } from "../components/footer.mjs";
import { makeHeader } from "../components/header.mjs";

const runPage = () => {
  makePage();
  makeFooter();
  makeHeader();
};

const makePage = () => {
  const main = document.querySelector("main");

  const ImageContainer = document.createElement("div");
  ImageContainer.className =
    "postImageContainer width-100 overflow-hidden shadow";

  const image = document.createElement("img");
  image.src = "../public/marley18.jpg";
  image.alt = "Image Of Marley The Dog";
  image.className = "object-fit width-100 height-100";

  const headlineContainer = document.createElement("div");
  headlineContainer.className = "headlineContainer width-100";

  const headline = document.createElement("h1");
  headline.innerText = "The dog called Marley";
  headline.className = "headerOne";

  const sectionHeader = document.createElement("h2");
  sectionHeader.className = "alternativeHeadline marginAbout";
  sectionHeader.innerText = "From Bosnia To Denmark";

  const aboutMarleyTextContainer = document.createElement("div");

  const aboutMarleyTextPartOne = document.createElement("p");
  aboutMarleyTextPartOne.className = "marginAbout";
  aboutMarleyTextPartOne.innerText =
    "Marley’s story begins on the streets of Bosnia, where he faced the harsh realities of life as a stray. His fortunes changed when the shelter he was staying in closed down, necessitating his move to Denmark. He was brought to a private woman's shelter in Jylland, Denmark, along with many other dogs. Despite the many dogs in need, Marley managed to stand out. When Laura, his future mom, visited the shelter, Marley saw his chance. As soon as she sat down on the couch, he climbed onto her lap and snuggled in for some much-needed cuddles. This act of trust and affection won Laura's heart instantly. Without hesitation, she decided to bring him home that very day. Their first day together was memorable. Marley, despite his dislike for baths, endured one to shed the grime of his past life. Once clean and comfortable, Marley quickly adapted to his new home. Laura and Marley formed an unbreakable bond, spending their days training, running, and exploring together. Their adventures in Denmark were filled with joy and discovery, as Marley learned what it meant to be loved and cared for.";

  const sectionTwoHeader = document.createElement("h2");
  sectionTwoHeader.className = "alternativeHeadline marginAbout";
  sectionTwoHeader.innerText = "A New Adventure In Norway";

  const aboutMarleyTextPartTwo = document.createElement("p");
  aboutMarleyTextPartTwo.className = "marginAbout";
  aboutMarleyTextPartTwo.innerText =
    "A few years later, life took another exciting turn. Laura met someone special, Marley’s dad, Lasse, who lived in Norway. This meant another big move for Marley. Moving from Denmark to Norway was a significant change, but it opened up a whole new world for him. The Norwegian landscape, with its majestic mountains and breathtaking nature, became his new playground. Marley thrived in this fresh environment, embracing the vast outdoors with enthusiasm. Norway's natural beauty offered endless opportunities for adventure. Marley loved hiking through the mountains, exploring the forests, and playing in the snow. Each day was a new adventure, and he cherished the time spent with his family in this new, beautiful setting. The crisp Norwegian air and stunning scenery brought out the best in Marley, making him even happier and more energetic. His journey from a Bosnian street dog to a beloved family member living in the picturesque landscapes of Norway is a heartwarming tale of resilience, love, and new beginnings.";

  const headlineContainerTwo = document.createElement("div");
  headlineContainerTwo.className = "headlineContainer width-100";

  const headlineTwo = document.createElement("h1");
  headlineTwo.innerText = "About This Blog";
  headlineTwo.className = "headerOne";

  const aboutThisBlogContainer = document.createElement("div");

  const aboutThisBlog = document.createElement("p");
  aboutThisBlog.className = "marginAbout";
  aboutThisBlog.innerText =
    "Welcome to our blog, a space dedicated to sharing the adventures of Marley and our family. This blog is not just a collection of stories and photos but also a significant part of my project exam for the Noroff Front-End Developer course. Through this platform, I aim to showcase my skills and creativity as I bring you along on our journey.";

  const aboutThisBlogTwo = document.createElement("p");
  aboutThisBlogTwo.className = "marginAbout";
  aboutThisBlogTwo.innerText =
    "At Noroff, I’ve been learning the ins and outs of web development, from coding and design to user experience and beyond. This blog serves as a culmination of those efforts, integrating the technical skills I’ve acquired with the personal stories that are dear to me. Each post, photo, and page has been crafted with care, aiming to provide an engaging and visually appealing experience for our readers.";

  const aboutThisBlogThree = document.createElement("p");
  aboutThisBlog.className = "marginAbout";
  aboutThisBlogThree.innerText =
    "Creating this blog has been a wonderful way to blend my love for storytelling with the practical application of web development principles. It’s a testament to the knowledge and experience I’ve gained throughout my course at Noroff, and I’m excited to share this journey with you. Thank you for visiting and being a part of our story.";

  const credit = document.createElement("p");
  credit.innerText = "Credit to Herman Hylland for making the Logo!";
  credit.className = "marginAbout";

  main.append(
    ImageContainer,
    headlineContainer,
    aboutMarleyTextContainer,
    headlineContainerTwo,
    aboutThisBlogContainer
  );
  ImageContainer.appendChild(image);
  headlineContainer.appendChild(headline);
  aboutMarleyTextContainer.append(
    sectionHeader,
    aboutMarleyTextPartOne,
    sectionTwoHeader,
    aboutMarleyTextPartTwo
  );
  headlineContainerTwo.appendChild(headlineTwo);
  aboutThisBlogContainer.append(
    aboutThisBlog,
    aboutThisBlogTwo,
    aboutThisBlogThree,
    credit
  );
};

runPage();

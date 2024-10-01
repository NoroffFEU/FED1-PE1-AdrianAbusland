import { makeHeader } from "../components/header.mjs";
import { makeFooter } from "../components/footer.mjs";
import { doFetch } from "../components/fetch.mjs";
import { carousel } from "../components/carousel.mjs";
import { makePagination } from "../components/pagination.mjs";
import { sortBy } from "../components/sortBy.mjs";
import { filterBy } from "../components/filterBy.mjs";
import { searchMech } from "../components/search.mjs";
import { closeDetails } from "../components/closeDetails.mjs";

const runPage = async () => {
  makePage(blogs);
  makeHeader();
  makeFooter();
  sortBy(blogs);
  filterBy(blogs);
  searchMech(blogs);
  closeDetails();
};

const blogs = await doFetch(
  "GET",
  "https://v2.api.noroff.dev/blog/posts/TestAdrian1"
);

const makePage = (blogs) => {
  const getUserInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userInfo = getUserInfo ? getUserInfo : "";
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.className = "container";

  const headlineContainerOne = document.createElement("div");
  headlineContainerOne.className = "headlineContainer width-100";

  const recentPostsHeadline = document.createElement("h1");
  recentPostsHeadline.innerText = "Latest Posts";
  recentPostsHeadline.className = "headerOne";

  const carouselDiv = document.createElement("div");
  carouselDiv.className =
    "flex flex-col justify-center items-center marginBotTop width-100";

  const headlineContainerTwo = document.createElement("div");
  headlineContainerTwo.className = "headlineContainer width-100";

  const allPostsHeadline = document.createElement("h1");
  allPostsHeadline.innerText = "Blog Posts";
  allPostsHeadline.className = "headerOne";

  const mechContainer = document.createElement("div");
  mechContainer.className =
    "mechContainer flex-col flex width-100 gap10 items-center";
  mechContainer.id = "mechContainer";

  const blogPostGrid = document.createElement("div");
  blogPostGrid.className = "blogPostGridContainer grid width-100";
  blogPostGrid.id = "blogPostGrid";

  const paginationNumbers = document.createElement("div");
  paginationNumbers.id = "paginationContainer";

  main.appendChild(container);
  container.append(
    headlineContainerOne,
    carouselDiv,
    headlineContainerTwo,
    mechContainer,
    blogPostGrid,
    paginationNumbers
  );
  headlineContainerOne.appendChild(recentPostsHeadline);
  headlineContainerTwo.appendChild(allPostsHeadline);

  makeCarousel(carouselDiv, blogs);
  makeBlogPostGrid(blogs, mechContainer);
};

const makeCarousel = (carouselDiv, blogs) => {
  const latestPosts = blogs.slice(0, 3);

  const leftButton = document.createElement("img");
  leftButton.src = "./resources/Left.png";
  leftButton.alt = "left carousel button";
  leftButton.id = "prevBtn";
  leftButton.className =
    "carouselButtons position-absolute z-index2 position-left cursor prevBtn";

  const rightButton = document.createElement("img");
  rightButton.src = "./resources/Right.png";
  rightButton.alt = "right carousel Button";
  rightButton.id = "nextBtn";
  rightButton.className =
    "carouselButtons position-absolute z-index2 position-right cursor nextBtn";

  const dots = document.createElement("div");
  dots.id = "slide-indicators";
  dots.className = "slide-indicators";

  const dot1 = document.createElement("span");
  dot1.className = "dot cursor active";

  const dot2 = document.createElement("span");
  dot2.className = "dot cursor";

  const dot3 = document.createElement("span");
  dot3.className = "dot cursor";

  const carouselImgs = document.createElement("div");
  carouselImgs.className = "width-100 height-100";

  carouselDiv.append(leftButton, rightButton, carouselImgs, dots);
  dots.append(dot1, dot2, dot3);

  latestPosts.forEach((blog) => {
    const carouselBox = document.createElement("div");
    carouselBox.className =
      "carouselBox visible justify-center items-center carouselImageContainer overflow-hidden shadow width-100";
    const image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = blog.media.alt;
    image.className = "width-100 height-100 object-fit carouselImg";

    const textBox = document.createElement("div");
    textBox.className =
      "carouselButtons position-absolute gap10 flex flex-col items-center position-right textBoxCarousel";

    const title = document.createElement("h2");
    title.innerText = blog.title;
    title.className = "headerThree";

    const button = document.createElement("button");
    button.innerText = "Read More";
    button.className = "buttonSmall";
    button.addEventListener("click", () => {
      window.location.href = "post/index.html?" + blog.id;
    });
    carouselImgs.appendChild(carouselBox);
    carouselBox.append(image, textBox);
    textBox.append(title, button);
  });

  carousel();
};

const makeBlogPostGrid = (blogs, mechContainer) => {
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "flex between width-100 btnContainer flex-wrap ";

  const sortButtonDetails = document.createElement("details");

  const sortButtonSummary = document.createElement("summary");
  sortButtonSummary.innerText = "Sort By";
  sortButtonSummary.className = "buttonSmall list-style-none";

  const sortButtonUl = document.createElement("ul");
  sortButtonUl.className =
    "list-style-none mechButton position-absolute detailsBox";

  const sortByNewest = document.createElement("li");
  sortByNewest.innerText = "Newest";
  sortByNewest.className = "headerTwo cursor hover";
  sortByNewest.id = "newest";

  const sortByOldest = document.createElement("li");
  sortByOldest.innerText = "Oldest";
  sortByOldest.className = "headerTwo cursor hover";
  sortByOldest.id = "oldest";

  const filterButtonDetails = document.createElement("details");

  const filterButtonSummary = document.createElement("summary");
  filterButtonSummary.innerText = "Filter By";
  filterButtonSummary.className = "buttonSmall list-style-none";

  const filterButtonUl = document.createElement("ul");
  filterButtonUl.className =
    "list-style-none mechButton position-absolute detailsBox";

  const showAll = document.createElement("li");
  showAll.innerText = "Show All";
  showAll.className = "headerTwo cursor filter hover";

  const filterByHome = document.createElement("li");
  filterByHome.innerText = "Home";
  filterByHome.className = "headerTwo cursor filter hover";

  const filterByFamily = document.createElement("li");
  filterByFamily.innerText = "Family";
  filterByFamily.className = "headerTwo cursor filter hover";

  const filterByWork = document.createElement("li");
  filterByWork.innerText = "Work";
  filterByWork.className = "headerTwo cursor filter hover";

  const filterByOutDoor = document.createElement("li");
  filterByOutDoor.innerText = "Outdoor";
  filterByOutDoor.className = "headerTwo cursor filter hover";

  const filterByAuthor = document.createElement("li");
  filterByAuthor.innerText = "Author";
  filterByAuthor.className = "headerTwo cursor filter hover";

  const searchContainer = document.createElement("div");
  searchContainer.className = "searchContainer width-100 flex-noWrap";

  const input = document.createElement("input");
  input.type = "search";
  input.id = "search";
  input.setAttribute("data-search", "");
  input.className = "width-100 searchInput shadow";
  input.placeholder = "Search...";

  mechContainer.append(searchContainer, buttonContainer);
  buttonContainer.append(sortButtonDetails, filterButtonDetails);
  sortButtonDetails.append(sortButtonSummary, sortButtonUl);
  sortButtonUl.append(sortByNewest, sortByOldest);
  filterButtonDetails.append(filterButtonSummary, filterButtonUl);
  searchContainer.appendChild(input);
  filterButtonUl.append(
    showAll,
    filterByHome,
    filterByFamily,
    filterByWork,
    filterByOutDoor,
    filterByAuthor
  );

  makePagination(blogs);
};

runPage();

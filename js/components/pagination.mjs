const MAX_BLOGS_PER_PAGE = 12;

export const makePagination = (blogs) => {
  const container = document.getElementById("blogPostGrid");
  const pages = Math.ceil(blogs.length / MAX_BLOGS_PER_PAGE);
  const currentPage = 1;
  makePaginationNumbers(pages, blogs, currentPage, container);
  calculatePage(blogs, currentPage);
};

const makePaginationNumbers = (pages, blogs, currentPage, container) => {
  const paginationContainer = document.getElementById("paginationContainer");
  paginationContainer.innerHTML = "";
  for (let index = 1; index <= pages; index++) {
    const pageNumber = document.createElement("a");
    pageNumber.innerText = index;
    pageNumber.className = `paginationButton alternativeHeadline cursor notActive`;
    if (currentPage === index) {
      pageNumber.className = "activePage";
    }
    pageNumber.addEventListener("click", () => {
      currentPage = index;
      calculatePage(blogs, currentPage, container);
      updatePageNumber(currentPage, pageNumber, index);
    });
    paginationContainer.appendChild(pageNumber);
  }
};

const updatePageNumber = (currentPage, pageNumber, index) => {
  const oldPage = document.querySelector(".activePage");
  if (oldPage) {
    oldPage.classList.remove("activePage");
    oldPage.className = `paginationButton alternativeHeadline cursor notActive`;
  }
  if (currentPage === index) {
    pageNumber.className = "activePage";
  }
};

export const calculatePage = (blogs, currentPage) => {
  const startBlogs = (currentPage - 1) * MAX_BLOGS_PER_PAGE;
  const lastBlogs = currentPage * MAX_BLOGS_PER_PAGE;
  const blogsToShow = blogs.slice(startBlogs, lastBlogs);
  displayPage(blogsToShow);
};

export const displayPage = async (blogs) => {
  const container = document.getElementById("blogPostGrid");
  container.innerHTML = "";
  blogs.forEach((blog) => {
    const imageBox = document.createElement("div");
    imageBox.className =
      "postImageBox width-100 overflow-hidden flex items-center justify-center";

    const image = document.createElement("img");
    image.src = blog.media.url;
    image.alt = blog.media.alt;
    image.className = "postGridImage object-fit width-100 height-100 cursor";
    image.addEventListener("click", () => {
      window.location.href = "post/index.html?" + blog.id;
    });

    const title = document.createElement("h2");
    title.innerText = blog.title;
    title.className = "headerTwo position-absolute cursor font-medium";
    title.addEventListener("click", () => {
      window.location.href = "post/index.html?" + blog.id;
    });

    container.appendChild(imageBox);
    imageBox.append(image, title);
  });
};

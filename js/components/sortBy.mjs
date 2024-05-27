import { makePagination } from "./pagination.mjs";

export const sortBy = (blogs) => {
  createEventListener(blogs);
};

const createEventListener = (blogs) => {
  const newest = document.getElementById("newest");
  newest.addEventListener("click", () => {
    sortNewToOld(blogs);
  });

  const oldest = document.getElementById("oldest");
  oldest.addEventListener("click", () => {
    sortOldToNew(blogs);
  });
};

const sortNewToOld = (blogs) => {
  const sortedBlogs = blogs.sort((a, b) => {
    return new Date(b.created) - new Date(a.created);
  });
  makePagination(sortedBlogs);
};

const sortOldToNew = (blogs) => {
  const sortedBlogs = blogs.sort((a, b) => {
    return new Date(a.created) - new Date(b.created);
  });
  makePagination(sortedBlogs);
};

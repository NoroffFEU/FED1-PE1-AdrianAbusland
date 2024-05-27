export const showLoader = () => {
  const loader = document.getElementById("loader");
  loader.hidden = false;
};

export const hideLoader = () => {
  const loader = document.getElementById("loader");
  loader.hidden = true;
};

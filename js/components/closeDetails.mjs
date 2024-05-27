//code borrowed: https://stackoverflow.com/questions/68644260/how-to-close-details-tag-when-other-is-open-or-a-click-is-made-outside-the-tag//

export const closeDetails = () => {
  const details = [...document.querySelectorAll("details")];
  document.addEventListener("click", function (e) {
    if (!details.some((f) => f.contains(e.target))) {
      details.forEach((f) => f.removeAttribute("open"));
    } else {
      details.forEach((f) =>
        !f.contains(e.target) ? f.removeAttribute("open") : ""
      );
    }
  });
};

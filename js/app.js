const filterClick = document.querySelector("#filter");
const filterContent = document.querySelector("#showFilter");

filterClick.addEventListener("click", () => {
  filterContent.style.display =
    filterContent.style.display == "none" ? "block" : "none";
});

/* JS To Open & Close The Menu */
document.addEventListener("DOMContentLoaded", function () {
  const menuOpenBtn = document.querySelector(".js-menu-open");
  const menuCloseBtn = document.querySelector(".js-menu-close");
  const menu = document.querySelector(".js-menu");

  menuOpenBtn.addEventListener("click", function () {
    menu.style.right = "0";
  });

  menuCloseBtn.addEventListener("click", function () {
    menu.style.right = "-100vw";
  });
});
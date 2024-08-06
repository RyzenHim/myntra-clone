const sidePanelLeft = document.querySelector(".aside_card_left");
const sidePanelRight = document.querySelector(".aside_card_right");
const asideMain = document.querySelector(".aside_main");
sidePanelLeft.addEventListener("click", () => {
  asideMain.classList.toggle("active");
});

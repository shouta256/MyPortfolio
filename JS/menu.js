// メニューバーアイコンのクリックイベントをリッスン
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("active"); // メニューを表示/非表示切り替え
});

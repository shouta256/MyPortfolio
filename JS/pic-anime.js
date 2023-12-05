// ページが読み込まれた後、1.5秒待ってからアニメーションをトリガー
window.addEventListener("load", () => {
  setTimeout(() => {
    const projectElements = document.querySelectorAll(".project");

    // 各 .project 要素を一つずつ表示させてアニメーションをトリガー
    projectElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.display = "block"; // 要素を表示
        element.classList.add("animate-zoomin"); // アニメーションをトリガー
      }, index * 300); // インデックスに応じた適切な待機時間を設定
    });
  }, 1500); // 1500ミリ秒（1.5秒）後に実行
});

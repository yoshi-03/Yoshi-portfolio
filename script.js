
// 画面内に要素が入ってきたかを検知する処理
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // 画面に入ったらshowクラスを追加
    }
  });
}, {
  threshold: 0.2 // 要素が20%表示されたら発動
});

// すべての.card要素を監視対象にする
document.querySelectorAll('.card').forEach(card => {
  observer.observe(card);
});
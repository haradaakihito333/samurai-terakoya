// フッターの著作権年を現在の年に動的に設定
document.getElementById("current-year").textContent = new Date().getFullYear();
 
// スライドショーで使用する画像パスの一覧
const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png"
];
 
// 現在表示中の画像インデックス（初期値は0＝image1）
let currentIndex = 0;
 
// 画像を次の順番に切り替える関数
function changeImage() {
  // インデックスを1つ進め、末尾まで来たら先頭に戻す
  currentIndex = (currentIndex + 1) % images.length;
 
  // img要素のsrc属性を更新して画像を切り替える
  document.getElementById("slideshow-image").src = images[currentIndex];
}
 
// changeImage関数を3秒（3000ミリ秒）ごとに繰り返し実行
setInterval(changeImage, 3000);
 

// 1秒ごとに時計を更新
setInterval(updateClock, 1000);
// 初回表示
updateClock();
// 時計表示
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `TIME: ${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// ユーザー認証状態
document.addEventListener("DOMContentLoaded", function() {
  const username = localStorage.getItem('username');
  const userProfile = document.getElementById('UserProfile');
  const logoutLink = document.getElementById('logout');

  if (username) {
    userProfile.textContent = `ログイン中: ${username}`;
  }

  logoutLink.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.removeItem('username');
    window.location.href = 'login.html';
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const voidTrigger = document.getElementById('voidTrigger');

    if (voidTrigger) {
        voidTrigger.addEventListener('click', function() {
            // 画面を真っ暗にする
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'black';
            overlay.style.zIndex = '9999';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.innerHTML = '<p style="color:red; font-family:\'Press Start 2P\'; font-size:10px;">CONNECTING...</p>';
            
            document.body.appendChild(overlay);

            // 1秒後にリンク集へ
            setTimeout(() => {
                window.location.href = '../html/links.html'; 
            }, 1000);
        });
    }
});

/* --- ページ下部の不気味な演出用 --- */
window.addEventListener('scroll', function() {
    // ページの全体の高さと、現在のスクロール位置を計算
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.pageYOffset;
    
    // ページの一番下（残り5%以内）に到達したか判定
    if ((scrollHeight - scrollPosition) / scrollHeight < 0.05) {
        // 画面の色味を不気味に変える（コントラストを上げ、赤っぽくする）
        document.body.style.filter = "contrast(1.2) brightness(0.8) sepia(0.5) hue-rotate(-50deg)";
        document.body.style.transition = "filter 0.5s ease"; // 滑らかに変化させる
    } else {
        // 上に戻ったら元に戻す
        document.body.style.filter = "none";
    }
});
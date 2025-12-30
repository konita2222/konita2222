
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


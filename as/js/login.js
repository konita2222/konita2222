document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById('loginButton');
    const userInp = document.getElementById('username');
    const passInp = document.getElementById('password');
    const hint = document.getElementById('hint');

    loginBtn.addEventListener('click', function() {
        // 名前とパスワードが「next」
        if (userInp.value === "next" && passInp.value === "next") {
            localStorage.setItem('username', "next");
            alert("V E S S E L . . . F O U N D .");
            window.location.href = '../html/main.html';
        } else {
            // 失敗演出
            document.body.style.animation = "shake 0.1s infinite"; // 揺れを激しくする
            hint.textContent = "VERY VERY INTERESTING.";
            hint.style.color = "white";
            
            setTimeout(() => {
                alert("VOID ERROR: INVALID_IDENTITY");
                document.body.style.animation = "shake 0.5s infinite"; // 元に戻す
                userInp.value = "";
                passInp.value = "";
            }, 500);
        }
    });
});
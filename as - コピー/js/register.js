import { auth } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", function() {
    const regButton = document.getElementById('registerButton');
    
    regButton.addEventListener('click', async () => {
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("登録が完了しました！ログイン画面からログインしてください。");
            window.location.href = 'login.html'; // ログインへ飛ばす
        } catch (error) {
            alert("登録エラー: " + error.message);
        }
    });
});
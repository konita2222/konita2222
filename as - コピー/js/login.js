// 1. Firebaseライブラリの読み込み
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 2. Firebaseの設定 (ここを自分のプロジェクトのものに書き換える)
const firebaseConfig = {
  apiKey: "AIzaSyCDsnnLdynGIYiAWIk6mYP33z6Q-gqzcSw",
  authDomain: "team-anti-edge-existence.firebaseapp.com",
  projectId: "team-anti-edge-existence",
  storageBucket: "team-anti-edge-existence.firebasestorage.app",
  messagingSenderId: "29240033178",
  appId: "1:29240033178:web:a3b89dbf0bc7600c734423"
  measurementId: "G-NQ7J1JZTZN"
};

// 3. 初期化
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener("DOMContentLoaded", function() {
    const usernameElement = document.getElementById('username');
    const passwordElement = document.getElementById('password');

    // --- 新規登録ボタンの処理 ---
    document.getElementById('registerButton').addEventListener('click', async () => {
        const email = usernameElement.value; // メールアドレス形式（example@test.comなど）が必要
        const password = passwordElement.value;

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("登録完了！ケツイが みなぎった！");
        } catch (error) {
            alert("登録エラー: " + error.message);
        }
    });

    // --- ログインボタンの処理 ---
    document.getElementById('loginButton').addEventListener('click', async () => {
        const email = usernameElement.value;
        const password = passwordElement.value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            // ログイン成功：ユーザー名を保存してリダイレクト
            alert(`認証成功！こんにちは、${user.email}さん`);
            localStorage.setItem('username', user.email.split('@')[0]); // @より前を名前として保存
            window.location.href = '../html/main.html';
        } catch (error) {
            alert("ログイン失敗: パスワードが違うか、登録されていません。");
        }
    });

    // パスワード表示切り替え
    document.getElementById('showPassword').addEventListener('change', function() {
        passwordElement.type = this.checked ? 'text' : 'password';
    });
});
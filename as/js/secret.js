const commandInput = document.getElementById('commandInput');
const output = document.getElementById('output');
const secretContent = document.getElementById('secretContent');
const secretTitle = document.getElementById('secretTitle');
const secretText = document.getElementById('secretText');

commandInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const cmd = commandInput.value.toLowerCase();
        handleCommand(cmd);
        commandInput.value = ''; 
        
        // 追記：コマンド入力後に一番下へ自動スクロール
        window.scrollTo(0, document.body.scrollHeight);
    }
});

function handleCommand(cmd) {
    const p = document.createElement('p');
    p.textContent = `> ${cmd}`;
    output.appendChild(p);

    if (cmd === 'gaster') {
        showSecret("VOICE FROM THE VOID", "何かが こちらを 見ている 。");
    } else if (cmd === 'sans') {
        showSecret("BAD TIME", "地獄で 燃えれば いいのにな 。");
    } else if (cmd === 'existencetale') {
        showSecret("PROJECT: EXISTENCE", "プロジェクト「存在物語」のデータが 読み込まれました。");
    } else {
        const error = document.createElement('p');
        error.textContent = "INVALID COMMAND.";
        error.style.color = "gray";
        output.appendChild(error);
    }

    // 追記：判定メッセージが出た後も一番下へ自動スクロール
    window.scrollTo(0, document.body.scrollHeight);
}

// secretContent内のボタンを操作できるように取得
function showSecret(title, text) {
    setTimeout(() => {
        secretContent.classList.remove('hidden');
        secretTitle.textContent = title;
        secretText.textContent = text;
        
        // ボタンに演出付きの戻る処理を設定
        const backBtn = secretContent.querySelector('button');
        backBtn.onclick = function() {
            // 画面全体にバグクラスを追加
            secretContent.classList.add('void-out');
            
            // 演出が終わった後にリロード（または元のターミナルへ）
            setTimeout(() => {
                // 本当に「VOID（虚無）」に戻るならリロード
                location.reload(); 
                
                // もし「login.html」に戻したい場合は下を使ってください
                // window.location.href = 'login.html';
            }, 500);
        };
    }, 500);
}
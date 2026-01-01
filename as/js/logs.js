document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('extractBtn');
    const target = document.getElementById('copyTarget');
    const msg = document.getElementById('successMessage');
    const scanner = document.querySelector('.data-scanner');

    btn.addEventListener('click', async () => {
        const textToCopy = target.innerText;

        try {
            // クリップボードにコピー
            await navigator.clipboard.writeText(textToCopy);

            // 視覚的演出の追加
            scanner.classList.add('extracted');
            msg.classList.add('show');
            
            btn.innerHTML = "DATA_STOLEN";
            btn.style.borderColor = "var(--danger)";
            btn.style.color = "var(--danger)";

            // 軽いバグ演出（画面を一瞬揺らす）
            document.body.style.animation = "shake 0.2s ease-in-out";
            setTimeout(() => {
                document.body.style.animation = "";
            }, 200);

        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // 黒塗りテキストの解除機能
    const redactedTexts = document.querySelectorAll('.redacted-text');

    redactedTexts.forEach(span => {
        span.addEventListener('mousedown', function() {
            // マウスダウン時に選択状態を維持し、CSSで色を反転させる
            // この機能はCSSの::selectionで実装されているため、JS側での直接的な操作は不要
            // ただし、ドラッグ終了後に自動で選択解除されないようにするならJSで制御が必要
            // 今回はCSSの::selectionに任せるため、JSは不要だが、
            // もし永続的に解除したい場合は下記のようなコードを追加する
            // this.style.backgroundColor = 'transparent';
            // this.style.color = 'white';
        });
    });

    // オプション：特定のステータスバーを赤くする（HTMLで直接スタイル指定済み）
    // JavaScriptで動的に変更したい場合はここにロジックを追加
    const sanityBar = document.querySelector('.subject-card:nth-child(2) .status-bars .fill');
    if (sanityBar && parseInt(sanityBar.style.width) < 30) {
        sanityBar.style.background = 'var(--red)';
        sanityBar.style.boxShadow = '0 0 10px var(--red)';
    }
});
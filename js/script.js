// ハンバーガーメニュー
const humbugerBtn = document.getElementById('humburger-btn');

humbugerBtn.addEventListener('click', () => {
    humbugerBtn.classList.toggle("active");
})


// モーダル

function modal(siteName) {
    // ID取得
    const btn = document.getElementById(`${siteName}-btn`);
    const dialog = document.getElementById(`${siteName}-dialog`);
    const close = document.getElementById(`${siteName}-close`);
    // モーダル開閉
    btn.addEventListener('click', () => {
        dialog.showModal();
    })
    close.addEventListener('click', () => {
        dialog.close();
    })
}

modal('reform');
modal('mypage');
modal('gyoza');


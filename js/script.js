// ハンバーガーメニュー
// const toggleArea = document.getElementById('toggle-area');
const humbugerBtn = document.getElementById('humburger-btn');

humbugerBtn.addEventListener('click', () => {
    humbugerBtn.classList.toggle("active");
})

// モーダル


// モーダルに必要な要素取得
const reformBtn = document.getElementById('reform-btn');
const reformDialog = document.getElementById('reform-dialog');
const reformClose = document.getElementById('reform-close');

const mypageBtn = document.getElementById('mypage-btn');
const mypageDialog = document.getElementById('mypage-dialog');
const mypageClose = document.getElementById('mypage-close');


const gyozaBtn = document.getElementById('gyoza-btn');
const gyozaDialog = document.getElementById('gyoza-dialog');
const gyozaClose = document.getElementById('gyoza-close');


// モーダル開閉する関数

function modal(btn, dialog, close) {
    btn.addEventListener('click', () => {
        dialog.showModal();
    })
    close.addEventListener('click', () => {
        dialog.close();
    })
}

modal(reformBtn, reformDialog, reformClose);
modal(mypageBtn, mypageDialog, mypageClose);
modal(gyozaBtn, gyozaDialog, gyozaClose);

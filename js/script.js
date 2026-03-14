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



// モーダル開ける
reformBtn.addEventListener('click', () => {
    reformDialog.showModal();
})

mypageBtn.addEventListener('click', () => {
    mypageDialog.showModal();
})


gyozaBtn.addEventListener('click', () => {
    gyozaDialog.showModal();
})


// モーダル閉じる
reformClose.addEventListener('click', () => {
    reformDialog.close();
})
mypageClose.addEventListener('click', () => {
    mypageDialog.close();
})

gyozaClose.addEventListener('click', () => {
    gyozaDialog.close();
})
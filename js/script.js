
// ハンバーガーメニュー
const humbugerBtn = document.getElementById('humburger-btn');

humbugerBtn.addEventListener('click', () => {
    humbugerBtn.classList.toggle("active");
})


// ダイアログ
let currentNum = 0;

// カード描画エリアの取得（常に表示するもの）
const cardArea = document.getElementById('work-card-area');
// foreachで描画
worksArray.forEach((work, index) => {
    let cardHtml = '';
    cardHtml += `<button class="c-work-card" id="${work.name}-card" data-card-num="${index}">
    <p>【${work.category}】</p>
                        <h3 class="c-sub-title u-notosans">${work.title}</h3>
                        <p class="u-notosans">${work.date}</p>
                        <img class="c-work-card__img" src="image/${work.img}" alt="${work.title}HPのトップページデザイン画像。">
                        <ul class="c-work__skills">    
                        ${work.skill.map(item => `<li>${item}</li>`).join('')} 
                        </ul>
                        <p class="c-works__click-btn">Click here！</p>
                    </button> `;
    cardArea.insertAdjacentHTML('beforeend', cardHtml);
})




// モーダルに必要な各要素取得
// 開閉時に使う
const dialog = document.getElementById('dialog');
// close取得
const close = document.getElementById('close');
// 矢印の要素取得
let before = document.getElementById('before-btn');
let after = document.getElementById('after-btn');

const title = document.getElementById('dialog_title');
const info = document.querySelector('.l-dialog__info');
const linkArea = document.querySelector('.l-dialog__links');
const items = document.getElementById('dialog_items');


function writeModalFunc(num) {
    title.innerText = worksArray[num].title;

    info.innerHTML = `<p>【${worksArray[num].category}】</p><p>${worksArray[num].comment}</p>`;

    linkArea.innerHTML = `<a href="${worksArray[num].url}"><img src="image/${worksArray[num].img}" alt="" class="p-dialog__img"></a><div class="l-dialog__btns"><a href="${worksArray[num].url}">Go page</a><a href="${worksArray[num].git}"><img src="image/github-icon.svg" alt="">`;

    items.innerHTML = worksArray[num].realize.map(item => `<li class="p-dialog__box">${item}</li>`).join('');
}


// カードのIDを取得
// ID名だけの配列を生成
let worksIdArray = worksArray.map(e => {
    return `${e.name}-card`;
});
// 実際に取得
let cardId = worksIdArray.map(id => {
    return document.getElementById(`${id}`);
})


// カードをクリック
cardId.forEach((e, index) => {
    e.addEventListener('click', () => {
    currentNum = index;
    // モーダルを開く
    dialog.showModal();
    writeModalFunc(index);
})})

// モーダルを閉じる
close.addEventListener('click', () => {
    dialog.close();
});


before.addEventListener('click',()=>{
    currentNum--;
        if (currentNum < 0 || currentNum >= worksArray.length) {
        currentNum = (worksArray.length - 1)
    }
    writeModalFunc(currentNum);
})

after.addEventListener('click',()=>{
    currentNum++;
   if (currentNum < 0 || currentNum >= worksArray.length) {
        currentNum = 0
    }
    writeModalFunc(currentNum);
})

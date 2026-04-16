
// ハンバーガーメニュー
const humbugerBtn = document.getElementById('humburger-btn');

humbugerBtn.addEventListener('click', () => {
    humbugerBtn.classList.toggle("active");
})



// カード描画エリアの取得（常に表示するもの）
const cardArea = document.getElementById('work-card-area');
// foreachで描画
worksArray.forEach(work => {
    let cardHtml = '';
    cardHtml += `<button class="c-work-card" id="${work.name}-card">
    <p>【${work.category}】</p>
                        <h3 class="c-sub-title u-notosans">${work.title}</h3>
                        <p class="u-notosans">${work.date}</p>
                        <img class="c-work-card__img" src="image/${work.img}" alt="${work.title}HPのトップページデザイン画像。">
                        <ul class="c-work__skills">    
                        ${work.skill.map(item => `<li>${item}</li>`).join('')} 
                        </ul>
                        <p class="c-works__click-btn">Click here！</p>
                    </button
                     > `;
    cardArea.insertAdjacentHTML('beforeend', cardHtml);
})


// モーダル描画エリア取得
// const dialogWriteArea = document.getElementById('dialog-write-area');

const opArea = document.querySelector('.c-dialog__top-area');
const skillArea = document.querySelector('.c-work__skills');
const linkArea = document.querySelector('c-dialog__link-area');

// 各要素取得
// 開閉時に使う
const dialog = document.getElementById('dialog');
// close取得
const close = document.getElementById('close');
// 矢印の要素取得
let before = document.querySelector('.before-btn');
let after = document.querySelector('.after-btn');


// 該当のモーダルのHTML(dialogの中身)
function modalInner(n) {


    //     let html = `<div class="c-dialog__top-area--text"><h3 class="c-sub-title u-notosans">${n.title}</h3>


    //     <img class="c-dialog__img" src="image/${n.img}" alt="${n.title}HPのトップページデザイン画像。">


    // ${n.skill.map(item => `<li>${item}</li>`).join('')} 
    // <ul class="u-notosans c-dialog__realize">
    // ${n.realize.map(item => `<li>${item}</li>`).join('')}</ul>
    // <!--タスク項目があれば表示(三項演算子) -->
    //         ${n.task ? `<div class="c-dialog__tasks"><p>担当ページ</p><ul class="u-center-text u-notosans p-mytasks">${n.task.map(item => ` <li> ${item}</li>`).join('')}</ul></div>` : ''}


    // <a href="${n.url}" target="_blank" class="c-dialog__link-text">サイトを見る</a><a href="${n.git}" target="_blank"><img src="image/github-icon.svg" class="c-dialog__link-img" alt=""></a>
    // <p class="u-center-text u-notosans">${n.comment}</p>`;

    return html;
}

// 今見ているモーダルのインデックス番号を管理する
let currentIndex = 0;

// ダイアログタグの中身を作る関数
function writeModal(indexNum) {
    currentIndex = indexNum
    // モーダルに描画
    dialogWriteArea.innerHTML = modalInner(worksArray[indexNum]);;
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
        // モーダルを開く
        dialog.showModal();
        // 開いたモーダルの中身を書く
        writeModal(index);
    })
});

// モーダルを閉じる
close.addEventListener('click', () => {
    dialog.close();
})

// 矢印の操作
before.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0 || currentIndex >= worksArray.length) {
        currentIndex = (worksArray.length - 1)
    }
    writeModal(currentIndex);
})

after.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex < 0 || currentIndex >= worksArray.length) {
        currentIndex = (0)
    }
    writeModal(currentIndex);
})



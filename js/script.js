// ハンバーガーメニュー
const humbugerBtn = document.getElementById('humburger-btn');

humbugerBtn.addEventListener('click', () => {
    humbugerBtn.classList.toggle("active");
})



// 作品情報を配列管理

const worksArray = [
    {
        num: 0,
        title: 'リカレント工務店',
        name: 'reform',
        date: '2026年1月～2月制作',
        img: 'reform-index.jpg',
        realize: ['デザイン', 'レスポンシブ対応', 'ハンバーガーメニュー', 'フィルター機能', '問い合わせフォーム', 'バリデーション', 'Git管理', 'AI活用'],
        url: 'https://okoba-git.github.io/reform/index.html',
        git: 'https://github.com/okoba-git/reform',
        skill: ['HTML', 'CSS', 'JS', '個人制作', '動的表示'],
        comment: '『地域に寄り添う、親しみやすいリフォーム会社』をテーマに、デザインから実装まで一人で完成させた架空のコーポレートサイトです。'
    },
    {
        num: 1,
        title: 'ポートフォリオ',
        name: 'mypage',
        date: '2026年3月制作',
        img: 'mypage.jpg',
        realize: ['デザイン', 'レスポンシブ対応', 'ハンバーガーメニュー', 'CSSアニメーション', 'モーダル', 'Git管理'],
        url: 'https://okoba-git.github.io/portfolio/index.html',
        git: 'https://github.com/okoba-git/portfolio',
        skill: ['HTML', 'CSS', 'JS', '個人制作', '動的表示'],
        comment: '初めての自身のポートフォリオサイトです。'
    },
    {
        num: 2,
        title: '社員情報一覧',
        name: 'employees',
        date: '2026年2月制作',
        img: 'noimage.jpg',
        realize: ['配列管理', 'フィルター機能', 'モーダル'],
        url: 'https://okoba-git.github.io/emproyees/',
        git: 'https://github.com/okoba-git/emproyees',
        skill: ['JS', '学校課題', '動的表示'],
        comment: '学校のJavaScript試験での制作課題です。HTML・CSSは完成されており、配列管理された情報をJSにて表示させました。'
    },
    {
        num: 3,
        title: 'ふくおか餃子FES',
        name: 'gyoza',
        date: '2025年12月～1月制作',
        img: 'gyoza-top.jpg',
        realize: ['デザイン', 'レスポンシブ対応', 'ハンバーガーメニュー', '問い合わせフォーム', 'Git管理'],
        task: ['トップページ下部（コーディング）', 'NEWS（コーディング）', 'CONTACT（デザイン・コーディング）', 'FAQ（デザイン）', 'フッター（デザイン・コーディング）', 'その他'],
        url: 'https://dwdw0421-blip.github.io/gyoza-fes_a/',
        git: 'https://github.com/dwdw0421-blip/gyoza-fes_a',
        skill: ['HTML', 'CSS', 'チーム制作'],
        comment: '授業で取り組んだグループ（３人）課題です。'
    }, {
        num: 4,
        title: 'Go Out Gear',
        name: 'go',
        date: '2025年11月制作',
        img: 'gooutgear.png',
        realize: ['レスポンシブ対応'],
        url: 'https://okoba-git.github.io/gooutgear/',
        git: 'https://github.com/okoba-git/gooutgear',
        skill: ['HTML', 'CSS', '学校課題'],
        comment: '学校のHTML・CSS試験での制作課題です。'
    }]



// カード描画エリアの取得（常に表示するもの）
const cardArea = document.getElementById('work-card-area');
// foreachで描画
worksArray.forEach(work => {
    let cardHtml = '';
    cardHtml += `<li class="c-work-card" id="${work.name}-card">
                        <h3 class="c-sub-title u-notosans">${work.title}</h3>
                        <img class="c-work-card__img" src="image/${work.img}" alt="${work.title}HPのトップページデザイン画像。">
                        <ul class="c-work__skills">    
                        ${work.skill.map(item => `<li>${item}</li>`).join('')} 
                        </ul>
                    </li > `;
    cardArea.insertAdjacentHTML('beforeend', cardHtml);
})


// Worksセクションを取得（モーダル描画エリア）
const dialogWriteArea = document.getElementById('dialog-write-area');

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
    let html = `<div class="c-dialog__top-area"><div class="c-dialog__top-area--text"><h3 class="c-sub-title u-notosans">${n.title}</h3>
    <p class="u-notosans">${n.date}</p></div>
    <img class="c-dialog__img" src="image/${n.img}" alt="${n.title}HPのトップページデザイン画像。"></div>
<ul class="c-work__skills">    
${n.skill.map(item => `<li>${item}</li>`).join('')} </ul>
<ul class="u-notosans c-dialog__realize">
${n.realize.map(item => `<li>${item}</li>`).join('')}</ul>
<!--オブジェクトにタスク項目（自分の担当）があれば表示(三項演算子) -->
        ${n.task ? `<p>担当ページ</p><ul class="u-center-text u-notosans p-mytasks">${n.task.map(item => ` <li> ${item}</li>`).join('')}</ul>` : ''}
<div class="c-dialog__link-area"><a href="${n.url}" target="_blank" class="c-dialog__link-text">Go page</a><a href="${n.git}" target="_blank"><img src="image/github-icon.svg" class="c-dialog__link-img" alt=""></a>
</div><p class="u-center-text u-notosans">${n.comment}</p>`;

    return html;
}

// 今見ているモーダルのインデックス番号を管理する
let currentIndex = 0;

// ダイアログタグの中身を作る関数
function writeModal(indexNum) {
    currentIndex = indexNum
    // 中身
    let html = modalInner(worksArray[indexNum]);
    // モーダル描画エリアworksにダイアログタグを追加
    dialogWriteArea.innerHTML = html;
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
    if (currentIndex >= 0 && currentIndex < worksArray.length) {
        currentIndex -= 1;
        writeModal(currentIndex);
    } else {
        currentIndex = (worksArray.length - 1)
        writeModal(worksArray.length - 1);
    }

})

after.addEventListener('click', () => {
    if (currentIndex >= 0 && currentIndex < worksArray.length) {
        currentIndex += 1;
        writeModal(currentIndex);
    } else {
        currentIndex = 0
        writeModal(0);
    }

})




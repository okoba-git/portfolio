// ハンバーガーメニュー
const humbugerBtn = document.getElementById('humburger-btn');

humbugerBtn.addEventListener('click', () => {
    humbugerBtn.classList.toggle("active");
})



// 作品情報を配列管理

const worksArray = [
    {
        title: 'リカレント工務店',
        name: 'reform',
        date: '2026年1月～2月制作',
        img: 'reform-index.jpg',
        realize: ['デザイン', 'レスポンシブ対応', 'ハンバーガーメニュー', '動的描画', 'フィルター機能', '問い合わせフォーム', 'バリデーション', 'GitHub'],
        url: 'https://okoba-git.github.io/reform/index.html',
        git: 'https://github.com/okoba-git/reform',
        skill: ['HTML', 'CSS', 'JS', '個人制作'],
        comment: '『地域に寄り添う、親しみやすいリフォーム会社』をテーマに、デザインから実装まで一人で完成させた架空のコーポレートサイトです。'
    },
    {
        title: 'ポートフォリオ',
        name: 'mypage',
        date: '2026年3月制作',
        img: 'mypage.jpg',
        realize: ['デザイン', 'レスポンシブ対応', 'ハンバーガーメニュー', '動的描画', 'CSSアニメーション', 'モーダル', 'GitHub'],
        url: 'https://okoba-git.github.io/portfolio/index.html',
        git: 'https://github.com/okoba-git/portfolio',
        skill: ['HTML', 'CSS', 'JS', '個人制作'],
        comment: '初めてのポートフォリオサイトです。'
    },
    {
        title: 'ふくおか餃子フェス',
        name: 'gyoza',
        date: '2025年12月～1月制作',
        img: 'gyoza-top.jpg',
        realize: ['デザイン', 'レスポンシブ対応', 'ハンバーガーメニュー', '問い合わせフォーム', 'GitHub'],
        task: ['トップページ下部（コーディング）', 'NEWS（コーディング）', 'CONTACT（デザイン・コーディング）', 'FAQ（デザイン）', 'フッター（デザイン・コーディング）', 'その他'],
        url: 'https://dwdw0421-blip.github.io/gyoza-fes_a/',
        git: 'https://github.com/dwdw0421-blip/gyoza-fes_a',
        skill: ['HTML', 'CSS', 'チーム制作'],
        comment: '授業で取り組んだグループ（３人）課題です。'
    }]



// カード描画エリアの取得（常に表示するもの）
const cardArea = document.getElementById('work-card-area');
// foreachで描画
worksArray.forEach(work => {
    let cardHtml = '';
    cardHtml += `<li class="c-work-card" id="${work.name}-btn">
                        <h3 class="c-sub-title">${work.title}</h3>
                        <img class="c-work-card__img" src="../image/${work.img}" alt="${work.title}HPのトップページデザイン画像。">
                        <ul class="c-work-card__skills">    
                        ${work.skill.map(item => `<li>${item}</li>`).join('')} 
                        </ul >
                    </li > `;
    cardArea.insertAdjacentHTML('beforeend', cardHtml);
})




// Worksセクションを取得（モーダル描画エリア）
const works = document.getElementById('works');


// 描画するモーダルのインデックス番号
let currentIndx = 0;

// 該当のモーダルのHTMLを描画する関数
function modalInner(n) {
    let html = `<div class="c-dialog__icon-area"><button id="before-btn">←</button><button id="${n.name}-close" class="close"><span></span></button><button class="after-btn">→</button></div> <div class="c-dialog__title-area"><h3 class="c-sub-title">${n.title}</h3></div><p class="u-notosans">${n.date}</p>
<!--実装したリアライズ項目の表示 -->
<ul class="u-notosans c-dialog__realize">
${n.realize.map(item => `<li>${item}</li>`).join('')}</ul>
<!--オブジェクトにタスク項目（自分の担当）があれば表示(三項演算子) -->
        ${n.task ? `<p>担当ページ</p><ul class="u-center-text u-notosans p-mytasks">${n.task.map(item => ` <li> ${item}</li>`).join('')}</ul>` : ''}
<div class="c-dialog__link-area"><a href="${n.url}" target="_blank" class="c-dialog__link-text">Go page</a><a href="${n.git}"><img src="image/github-icon.svg" class="c-dialog__link-img" alt=""></a>
</div><p class="u-center-text u-notosans">${n.comment}</p>`;

    return html;
}


// // foreachですべてのモーダルを描画
// worksArray.forEach(work => {
//     // ダイアログタグの生成、クラス名・idの付与
//     let dialog = document.createElement('dialog');
//     dialog.setAttribute('id', `${work.name}-dialog`);
//     dialog.setAttribute('class', 'l-dialog c-dialog');

//     // ダイアログタグの中身
//     let html = '';
//     html += modalInner(work);

//     // ワークスにダイアログタグを追加
//     dialog.innerHTML = html;
//     works.insertBefore(dialog, null);
// })


modalInner(worksArray[0]);



// モーダル開閉する関数
function modal(siteName) {
    // 必要なIDを取得
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

// 関数実行
worksArray.forEach(work => modal(work.name));


const before = document.getElementById('before-btn');
const after = document.getElementById('after-btn');

before.addEventListener('click', () => {

})
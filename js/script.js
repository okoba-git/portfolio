const reformBtn = document.getElementById('reform-btn');
const reformDialog = document.getElementById('reform-dialog');

const gyozaBtn = document.getElementById('gyoza-btn');
const gyozaDialog = document.getElementById('gyoza-dialog');


const reformClose = document.getElementById('reform-close');
const gyozaClose = document.getElementById('gyoza-close');



reformBtn.addEventListener('click', () => {
    reformDialog.showModal();
})
gyozaBtn.addEventListener('click', () => {
    gyozaDialog.showModal();
})



reformClose.addEventListener('click', () => {
    reformDialog.close();
})
gyozaClose.addEventListener('click', () => {
    gyozaDialog.close();
})
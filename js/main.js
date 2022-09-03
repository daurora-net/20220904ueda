// ナビメニュー
const target = document.getElementById("menu");
target.addEventListener('click', () => {
    target.classList.toggle('open');
    const nav = document.getElementById("nav");
    nav.classList.toggle('in');
});

// TOPに戻る
function scrollTop(elem) {
    const target = document.getElementById(elem);
    target.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
scrollTop('button');
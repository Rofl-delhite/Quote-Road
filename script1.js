let textarea = document.getElementById('textarea');
let btn = document.getElementById('publish');
btn.addEventListener('click', fun);
function fun() {
    textarea.setAttribute('placeholder', 'Your Quote is Published Now')
}
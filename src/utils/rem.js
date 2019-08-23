// function font() {
//     document.documentElement.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
// }
// font();
// window.onresize = font;
function font() {
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px'
}

font()


window.onresize = font
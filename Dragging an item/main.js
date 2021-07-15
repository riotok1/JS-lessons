const el = document.getElementById('el');
let lastX = 0, lastY = 0;

function mMove(evt) {
    el.style.left = evt.clientX - lastX + el.offsetLeft + 'px';
    el.style.top = evt.clientY - lastY + el.offsetTop + 'px';
    lastX = evt.clientX;
    lastY = evt.clientY;
}

function mUp() {
    el.removeEventListener('mousemove', mMove);
    el.removeEventListener('mousemove', mUp);
}

el.addEventListener('mousedown', (evt) => {
    lastX = evt.clientX;
    lastY = evt.clientY;
    el.addEventListener('mousemove', mMove);
    el.addEventListener('mouseup', mUp);
});
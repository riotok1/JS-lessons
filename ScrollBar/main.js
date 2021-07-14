const container = document.getElementById('container');
const scrollbar = document.getElementById('scrollbar');
const handle = scrollbar.firstElementChild;

let lastPos = 0; //Переменная, хранящая последнюю позицию

function mMove(evt) {
    let d = evt.clientY - lastPos;
    let y = this.offsetTop + d, cy;
    if (y > 0 && y < 262) {
        this.style = 'top: ' + y + 'px;';
        cy = (container.scrollHeight - container.clientHeight) * y / 262;
        container.scrollTop = cy;
        lastPos = evt.clientY;
    }
}

function mUp(evt) {
    this.removeEventListener('mousemove', mMove);
    this.removeEventListener('mouseup', mUp);
}

handle.addEventListener('mousedown', function(evt) {
    lastPos = evt.clientY;
    this.addEventListener('mousemove', mMove);
    this.addEventListener('mouseup', mUp);
});
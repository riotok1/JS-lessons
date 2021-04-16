const output = window.document.getElementById('output');
const buttons = window.document.querySelectorAll('nav div');

let current = buttons[0];

function showImage() {
    current = this;
    output.src = 'slider/' + this.id + '.jpg';
    buttons.forEach((el) => {
            if(el == this) {
                el.className = 'active';
            }
            else{
                el.className = '';
            }
        }
    );
}

buttons.forEach(
    (el) => {
        el.addEventListener('click', showImage);
    }
);
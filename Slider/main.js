const output = document.getElementById('output');
const buttonset = document.getElementById('buttonset');
const buttons = document.querySelectorAll('nav a');
const preview = document.getElementById('preview');

let current = buttons[0];

function imageOutput(btn) {
    //Присваиваем к переменной явную ссылку на изображение
    output.src = btn.href;
    //Перебираем кнопки, и по чтению события присваиваем класс
    buttons.forEach(
        (el) => {
            if(el == btn)
                el.className = 'active';
            else{
                el.className = '';
            }
        }
    );
}

function showImage(evt) {
    //target- содержит источник события, this - элемент к которому привязан обработчик
    //сравниваем их для того, чтобы выявить факт щелка мышью именно по кнопке, а не по панели навигации
    if(evt.target != this) { 
        //Присваиваем кнопки к событию
        current = evt.target;
        imageOutput(evt.target);
        // Объясняем, что если событие не обрабатывается явно, 
        // то его действие не должно выполняться так, как обычно
        evt.preventDefault();
    }
}

buttonset.addEventListener('click', showImage);



const output = window.document.getElementById('output');
const buttonset = window.document.getElementById('buttonset');
const buttons = window.document.querySelectorAll('nav a');
const preview = window.document.getElementById('preview');

let current = buttons[0];

function showImage(evt) {
    
    //target- содержит истоник события, this - элемент к которому привязан обработчик
    //сравниваем их для того, чтобы выявить факт щелка мышью именно по кнопке, а не по панели навигации
    if(evt.target != this) { 

        //Присваиваем кнопки к событию
        current = evt.target;
        
        //Присваиваем к переменной явную ссылку на изображение
        output.src = evt.target.href;
        
        //Перебираем кнопки, и по чтению события присваиваем класс
        buttons.forEach(
            (el) => {
                if(el == evt.target) {
                    el.className = 'active';
                }
                else {
                    el.className = '';
                }
            }
        );
        
        // Объясняем, что если событие не обрабатывается явно, 
        // то его действие не должно выполняться так, как обычно
        evt.preventDefault();
    }
}

function showPreview(evt) {
    if (evt.target != this) {

        //pageX, pageY - положение курсора мыши относительно левого вернхнего угла страницы в пискселях
        preview.style.left = evt.pageX + 'px';
        preview.style.top = evt.pageY + 'px';
        
        //присваивание фону изображения по явной ссылке на изображения
        preview.style.backgroundImage = 'url(' + evt.target.href + ')';
        preview.className = 'active';
    }
}

function hidePreview(evt) {
    if (evt.target != this)
        preview.className = '';    
}

buttonset.addEventListener('click', showImage);
buttonset.addEventListener('mouseover', showPreview);
buttonset.addEventListener('mouseout', hidePreview);

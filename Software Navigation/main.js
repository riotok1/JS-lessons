const links = document.querySelectorAll('.jslink');
const container = document.getElementsByTagName('section')[0];
const anchors = document.querySelectorAll('h2[id]');

    function navigate() {
        let e = document.querySelector('nav .active');
        if (e)
            e.classList.remove('active');
        this.classList.add('active');
    } //Добавление класса active к ссылкам

    links.forEach(
        (el) => { el.addEventListener('click', navigate) }
    ); //Перебор ссылок и присваивание события

    container.addEventListener('scroll', (evt) => {
        let i, anchor, y, a;
        for (i = 0; i < anchors.length; ++i) {
            anchor = anchors[i];
            y = anchor.getBoundingClientRect().top; //возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
            if (y > 0 && y < container.clientHeight) {
                links.forEach((l) => {
                    if (l.href.endsWith(anchor.id))
                        l.classList.add('active');
                    else
                        l.classList.remove('active');
                });
                break;
            }
        }
    });
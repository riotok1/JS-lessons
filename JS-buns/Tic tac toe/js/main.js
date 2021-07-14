var area = document.getElementById('area');
var cell = document.getElementsByClassName('cell');
var currentPlayer = document.getElementById('curPlayer');
var refreshState = document.getElementById('refreshStat');

var player = "x"; //Переменная с начальным значением хода игрока

var stat = { //Статистика, включающая массив переменных
    'x': 0,
    'o': 0,
    'd': 0
};

var winIndex = [ //Выигршные  позиции
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(var i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
} //Перебор и добавление элементов - ячеек в игровой контейнер

for(var i = 0; i < cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false); 
} //Перебор ячеек и присваивание им события 

function cellClick() {
    var data = [];

    if(!this.innerHTML) {
        this.innerHTML = player;
    } //Если ячейка не заполнена, вносится значение 
    else {
        alert("Ячейка занята!");
        return;
    } //В ином случае выводится сообщение

    for(var i in cell) {
        if(cell[i].innerHTML == player) {
            data.push(parseInt(cell[i].getAttribute('pos')));
        } //Если ячейка содердит значение, то оно возвращается, в данном случае возвращается позиция 'pos' 
    }

    if(checkWin(data)) {
        stat[player] += 1;
        restart("Выиграл: " + player);
    } //Если игрок получает либо имеет значение один и больше, то возвращается сообщение с выигрышем и именем
    else {
        var draw = true;
        for(var i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }
    
    player = player == "x" ? "o" : "x";
    currentPlayer.innerHTML = player.toUpperCase();
}

function checkWin(data) {
    for(var i in winIndex) {
        var win = true;
        for(var j in winIndex[i]) {
            var id = winIndex[i][j];
            var ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    console.log(stat);
    alert(text);
    for(var i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}

function updateStat() {
    document.getElementById('sX').innerHTML = stat.x;
    document.getElementById('sO').innerHTML = stat.o;
    document.getElementById('sD').innerHTML = stat.d;
}

function refState() {
    document.getElementById('sX').innerHTML = 0;
    document.getElementById('sO').innerHTML = 0;
    document.getElementById('sD').innerHTML = 0;
}

refreshState.addEventListener('click', refState);

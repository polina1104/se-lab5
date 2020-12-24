let array = ['top1', 'top2', 'top3', 'middle1', 'middle2', 'middle3', 'bottom1', 'bottom2', 'bottom3']; //массив id, куда можно сделать ход


function randplace() {
    let numb = Math.floor(Math.random()*array.length);     //генерация рандомного числа из кол-ва элементов + округление
    document.getElementById(array[numb]).innerHTML = '×';     //вставляется крестик в id сгенерируемого индекса
    array.splice(numb, 1);                                    //удаление задействованного id
}


function clicks (a) {
    if (document.getElementById(a).innerHTML == '') {         //проверка поля на пустоту
        document.getElementById(a).innerHTML = '○';          //вставляем ноль
    }
    else {
        alert('error');                                       //выводим ошибку, если поле занято
        return 0;                                             //завершение функции
    }
    for (let i=0; i<array.length; i++) {                      //перебор массива с id, удаление занятых элементов
        if (array[i] == a) {
            array.splice(i, 1);                               //удаление только 1 элемента массива, в который делается ход
        }
    }
    if (win()) {
        alert('Победа ноликов');
        return 0;
    }
    if (array.length == 0) {
        alert('Ничья');
        return 0;                                                             //функция приниманиет значение 0 и завершается
    }
    document.getElementById('step').innerHTML = '× is next';
    randplace();                                                             //вызов функции хода компа
    if (win()) {
        alert('Победа крестиков');
        return 0;
    }
    document.getElementById('step').innerHTML = '○ is next';
}


function clean () {
    array = ['top1', 'top2', 'top3', 'middle1', 'middle2', 'middle3', 'bottom1', 'bottom2', 'bottom3'];
    for (let i=0; i<array.length; i++) {
        document.getElementById(array[i]).innerHTML = '';
    }
    document.getElementById('step').innerHTML = '○ is next';
}


function win() {
    if (document.getElementById('top1').innerHTML != '' &&
        document.getElementById('top1').innerHTML == document.getElementById('top2').innerHTML &&
        document.getElementById('top2').innerHTML == document.getElementById('top3').innerHTML) {
       return true;
    }
    if (document.getElementById('middle1').innerHTML !='' &&
        document.getElementById('middle1').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('middle3').innerHTML) {
        return true;
    }
    if (document.getElementById('bottom1').innerHTML !='' &&
        document.getElementById('bottom1').innerHTML == document.getElementById('bottom2').innerHTML &&
        document.getElementById('bottom2').innerHTML == document.getElementById('bottom3').innerHTML) {
        return true;
    }
    if (document.getElementById('top1').innerHTML !='' &&
        document.getElementById('top1').innerHTML == document.getElementById('middle1').innerHTML &&
        document.getElementById('middle1').innerHTML == document.getElementById('bottom1').innerHTML) {
        return true;
    }
    if (document.getElementById('top2').innerHTML !='' &&
        document.getElementById('top2').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('bottom2').innerHTML) {
        return true;
    }
    if (document.getElementById('top3').innerHTML !='' &&
        document.getElementById('top3').innerHTML == document.getElementById('middle3').innerHTML &&
        document.getElementById('middle3').innerHTML == document.getElementById('bottom3').innerHTML) {
        return true;
    }
    if (document.getElementById('top1').innerHTML !='' &&
        document.getElementById('top1').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('bottom3').innerHTML) {
        return true;
    }
    if (document.getElementById('top3').innerHTML !='' &&
        document.getElementById('top3').innerHTML == document.getElementById('middle2').innerHTML &&
        document.getElementById('middle2').innerHTML == document.getElementById('bottom1').innerHTML) {
        return true;
    }
    return false;
}

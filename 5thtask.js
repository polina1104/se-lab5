let equalButton = document.getElementById('equal');
function insert(num) {
    if (document.form.textview.value.indexOf(' 0') === -1) {
        document.form.textview.value = document.form.textview.value + num
    } else {
        alert('ОШИБКА')
    }
}
function clean() {
    document.form.textview.value = " ";
}
equalButton.onclick = function() {
    let exp = document.form.textview.value;
    if(document.form.textview.value.indexOf('/0') !== -1){
        alert("На 0 делить нельзя")
    }
    else {
        document.form.textview.value = document.form.textview.value = ` ${eval(exp)}`;
    }
};
function checkOperations(num){
    if ( (document.form.textview.value.indexOf('1') !== -1            /*если найден элемент и не найден знак операции, то прибавляется знак опреации*/
        || document.form.textview.value.indexOf('2') !== -1            /*знаки пишутся один раз при учете того, что в строке есть хотя бы одна цифра*/
        || document.form.textview.value.indexOf('3') !== -1
        || document.form.textview.value.indexOf('4') !== -1
        || document.form.textview.value.indexOf('5') !== -1
        || document.form.textview.value.indexOf('6') !== -1
        || document.form.textview.value.indexOf('7') !== -1
        || document.form.textview.value.indexOf('8') !== -1
        || document.form.textview.value.indexOf('9') !== -1) &&
        (document.form.textview.value.indexOf('-') === -1
            && document.form.textview.value.indexOf('+') === -1
            && document.form.textview.value.indexOf('*') === -1
            && document.form.textview.value.indexOf('/') === -1)
    )
    {
        insert(num);
    } else {
        alert('ОШИБКА');
    }
}
function checkZero(num){
    if ( document.form.textview.value.indexOf('1') !== -1                        /*0 пишется только если в строке уже есть какая-либо другая цифра*/
        || document.form.textview.value.indexOf('2') !== -1
        || document.form.textview.value.indexOf('3') !== -1
        || document.form.textview.value.indexOf('4') !== -1
        || document.form.textview.value.indexOf('5') !== -1
        || document.form.textview.value.indexOf('6') !== -1
        || document.form.textview.value.indexOf('7') !== -1
        || document.form.textview.value.indexOf('8') !== -1
        || document.form.textview.value.indexOf('9') !== -1)
    {
        insert(num);
    } else {
        alert('ОШИБКА');
    }
}
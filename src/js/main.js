// Math Vars

let num1 = '';
let num2 = '';
let oprM = null;
let result = null;

// Dynamic Funcs

function num(n) {

    if (oprM == null) {
        num1 += n;
    } else {
        num2 += n;
    }

    display();

}

function opr(o) {

    oprM = o;
    display();

}

function equal() {

    if (num1 != '' && num2 != '' && oprM != null) {

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (oprM == '+') { result = num1 + num2; }
        if (oprM == '-') { result = num1 - num2; }
        if (oprM == '×') { result = num1 * num2; }
        if (oprM == '÷') { result = num1 / num2; }

        num1 = result.toString();
        num2 = '';
        oprM = null;
        display();
        result = null;
    }

}

function delDis() {

    if (oprM == null) {
        if (num1 !== '') {
            num1 = num1.slice(0, -1);
        }
    } else {
        if (num2 !== '') {
            num2 = num2.slice(0, -1);
        } else {
            oprM = null;
        }
    }

    display();

}

// Display

function display() {

    let displayString = '';
    if (num1 != '') {
        displayString += num1;
    }
    if (oprM != null) {
        displayString += oprM;
    }
    if (num2 != '') {
        displayString += num2;
    }
    if (result != null) {
        displayString = result;
    }

    document.querySelector('.display').innerHTML = displayString;

}

// Extra Funcs

function clearDis() {

    num1 = '';
    num2 = '';
    oprM = null;
    result = null;
    display();

}

let isLightOn = false;

function lightSwitch() {

    if (!isLightOn) {

        document.querySelector('.display').style.backgroundColor = 'var(--clr-lights-on)';
        document.querySelectorAll('.axisY > button').forEach(btn => {
            btn.style.backgroundColor = 'var(--clr-lights-on-btn)';
            btn.style.border = '2px solid var(--clr-lights-on-btn)';
            btn.style.boxShadow = '0 0 2px var(--clr-lights-on-btn)';
            btn.style.color = 'var(--clr-font-2)';
        });

    } else {

        document.querySelector('.display').style.backgroundColor = '';
        document.querySelectorAll('.axisY > button').forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.border = '';
            btn.style.boxShadow = '';
            btn.style.color = '';
        });

    }

    isLightOn = !isLightOn;

}
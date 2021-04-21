let error = 'Error! Enter the numbers';

function Addition() {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let sum = +one + +two;
    if (Number.isNaN(sum)) {
        alert(error);
        return NaN;
    }
    alert(sum);
    }
    
function Subtraction() {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let sub = one - two;
    if (Number.isNaN(sub)) {
        alert(error);
        return NaN;
    }
    alert(sub);
}

function Multiplication() {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let mul = one * two;
    if (Number.isNaN(mul)) {
        alert(error);
        return NaN;
    }
    alert(mul);
}

function Division() {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let div = one / two;
    if (Number.isNaN(div)) {
        alert(error);
        return NaN;
    }
    alert(div);
}
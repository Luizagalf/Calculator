let error = 'Error! Enter the numbers';

let addition = () => {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let sum = +one + +two;
    if (Number.isNaN(sum)) {
        alert(error);
        return;
    }
    if ((typeof one !== 'undefined') || (typeof two !== 'undefined')) {
        alert(error);
        return;
    }
    alert(sum);
    }
    
let subtraction = () => {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let sub = one - two;
    if ((one === undefined) || (two === undefined) || (Number.isNaN(sub))) {
        alert(error);
        return;
    }
    alert(sub);
}

let multiplication = () => {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let mul = one * two;
    if ((typeof one !== 'undefined') || (typeof two !== 'undefined') || (Number.isNaN(mul))) {
        alert(error);
        return;
    }
    alert(mul);
}

let division = (one, two) => {
    let one = prompt("Enter the first number");
    let two = prompt("Enter the first number");
    let div = one / two;
    if ((typeof one !== 'undefined') || (typeof two !== 'undefined') || (Number.isNaN(div))) {
        alert(error);
        return;
    }
    alert(div);
}
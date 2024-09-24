function getInputById(id){
    const inputEl = document.getElementById(id).value;
    const inputNumber = parseFloat(inputEl)
    return inputNumber
}

function getElById(id){
    const balanceEl = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balanceEl);
    return balanceNumber;
}
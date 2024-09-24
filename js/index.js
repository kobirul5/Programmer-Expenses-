const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
    const incomeAmount = getInputById('income')
    const softwareAmount = getInputById('software')
    const coursesAmount = getInputById('courses')
    const internetAmount = getInputById('internet')
    const expenseBalance = getElById('total-expenses');
    
    const totalExpense = softwareAmount + coursesAmount + internetAmount;
    document.getElementById('total-expenses').innerText = totalExpense.toFixed(2);

    const incomeBalance = incomeAmount - totalExpense;
    document.getElementById('balance').innerText = incomeBalance.toFixed(2);

    document.getElementById('results').classList.remove('hidden')
})
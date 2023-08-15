document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get withdraw amount from input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    // get previous withdraw amount from withdraw card
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;

    // get previous total balance from balance card
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    // set updated/deducted total balance to balance card
    if (parseFloat(previousBalanceTotal) >= parseFloat(newWithdrawAmount)) {
        // set updated withdraw amount to withdraw card
        const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + parseFloat(newWithdrawAmount);
        withdrawTotalElement.innerText = currentWithdrawTotal;
        const currentBalanceTotal = parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
        balanceTotalElement.innerText = currentBalanceTotal;
    } else {
        alert('Not enough balance!!!')
    }

    // reset input field value to null
    withdrawField.value = '';
})
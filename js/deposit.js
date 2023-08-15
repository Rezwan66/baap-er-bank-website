// step 1: added event listener to the deposit btn
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = depositField.value;
    
    // step 3: get the previous/current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;

    // step 4: get the new total deposit, and convert the string value and innerText to float
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDepositAmount);
    // set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // step 5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;

    // step 6: calculate current total balance
    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step 7: clear the deposit field
    depositField.value = '';
})
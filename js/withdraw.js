/* STEPS
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-5. also make sure to convert the input into a number by using parseFloat

3. Get previous withdraw total

4. calculate total withdraw amount 
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5: set the new balance total

7. clear the input field
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get withdraw amount from input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = withdrawField.value;
    // reset input field value to null
    withdrawField.value = '';
    if(isNaN(parseFloat(newWithdrawAmount))){
        alert('Please provide a valid number!');
        return;
    }
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
        alert('NOT ENOUGH BALANCE!!!');
    }

    /* 
    ANOTHER WAY TO DO THIS:
        if(parseFloat(newWithdrawAmount) > parseFloat(previousBalanceTotal)){
            alert('NOT ENOUGH BALANCE!!!');
            return;
        } 
    */
    
})
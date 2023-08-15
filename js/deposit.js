// step 1: added event listener to the deposit btn
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    // step 3: get the previous/current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText;
    depositTotalElement.innerText = depositAmount;
    console.log(typeof depositAmount, typeof depositTotal);
})
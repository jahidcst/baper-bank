// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
   // step-7
   withdrawField.value = '';
   
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
    }
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('your request money is unavailable')
        return;
    }

        // step-4
        const currentWithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
        withdrawTotalElement.innerText = currentWithdrawTotal;

    
    // step-6
    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})
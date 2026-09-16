function calculateInstallment() {
    const carPriceInput = document.getElementById('carPrice');
    const downPaymentInput = document.getElementById('downPayment');
    const durationInput = document.getElementById('duration');

    const carPrice = parseFloat(carPriceInput.value);
    const downPayment = parseFloat(downPaymentInput.value);
    const loanTermMonths = parseInt(durationInput.value);

    if (isNaN(carPrice) || isNaN(downPayment) || isNaN(loanTermMonths)) {
        alert("يرجى إدخال جميع البيانات المطلوبة بشكل صحيح!");
        return;
    }

    if (downPayment >= carPrice) {
        alert("يجب أن تكون قيمة المقدم أقل من سعر السيارة!");
        return;
    }

    const remainingValue = carPrice - downPayment;

    const years = loanTermMonths / 12;
    let interestRate = 0;

    if (years === 1) {
        interestRate = 0.10; // 10%
    } else if (years === 2) {
        interestRate = 0.19; // 19%
    } else if (years === 3) {
        interestRate = 0.32; // 32%
    } else if (years === 4) {
        interestRate = 0.45; // 45%
    } else if (years === 5) {
        interestRate = 0.51; // 51%
    } else if (years === 7) {
        interestRate = 0.79; // 79%
    } else {
        interestRate = 0.10;
    }

    const interestValue = remainingValue * interestRate;

    const totalInstallments = remainingValue + interestValue;

  
    const monthlyInstallment = totalInstallments / loanTermMonths;

    document.getElementById('interestResult').textContent = (interestRate * 100) + "%";
    document.getElementById('monthlyResult').textContent = monthlyInstallment.toFixed(2) + " EGP";
}
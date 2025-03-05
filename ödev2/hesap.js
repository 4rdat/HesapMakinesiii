function calculate() {
    const num1 = parseFloat(document.getElementById('sayılar1').value);
    const num2 = parseFloat(document.getElementById('sayılar2').value);

    const operation = document.getElementById('4islem').value;

    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Hata: Sıfıra bölme yapılamaz';
            }
            break;
        default:
            result = 'Geçersiz işlem';
    }

    document.querySelector('#results span').textContent = result;
}

const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
    result.classList.remove('show');
    let filterInput = input.value.replace(/[^A-Za-z0-9]/ig, "").toLowerCase();
    if (input.value === "") {
        return alert('Please input a value')
    }
    const reverseInput = filterInput.split("").reverse().join("");

    if (reverseInput == filterInput) {
        result.innerHTML = `<span>'${input.value}'</span> is a palindrome!`
        return result.classList.add('show');
    } else {
        result.innerHTML = `<span>'${input.value}'</span> is a NOT palindrome!`
        return result.classList.add('show');
    }
})
const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
let filterInput;

checkBtn.addEventListener('click', checkPalindrome)
input.addEventListener('keypress', checkPalindrome)

input.addEventListener('keyup', () => {
    filterInput = input.value.replace(/[^A-Za-z0-9]/ig, "").toLowerCase();
    
    if (filterInput) {
        checkBtn.classList.add('active');
    } else {
        checkBtn.classList.remove('active');
        result.classList.remove('show');
    }
})

function checkPalindrome(event) {
    if (event.key === 'Enter' || event.type === 'click') {
        const reverseInput = filterInput.split("").reverse().join("");

        if (reverseInput == filterInput) {
            result.innerHTML = `<span class="palindrome">${input.value}</span> is a palindrome!`
            return result.classList.add('show');
        } else {
            result.innerHTML = `<span class="not-palindrome">${input.value}</span> is a not palindrome!`
            return result.classList.add('show');
        }
    }
}

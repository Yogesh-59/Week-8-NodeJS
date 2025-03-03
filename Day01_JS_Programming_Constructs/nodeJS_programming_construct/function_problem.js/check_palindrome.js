function isPalindrome(num) {
    let temp = num;
    let reverse = 0;
    while (temp > 0) {
        let rem = temp % 10;
        reverse = reverse * 10 + rem;
        temp = parseInt(temp / 10);
    }
    return num == reverse;
}
let num1=101;
let num2=123;
console.log(num1+" is palindrome? "+isPalindrome(num1));
console.log(num2+" is palindrome? "+isPalindrome(num2));
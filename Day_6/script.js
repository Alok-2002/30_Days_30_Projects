function isPalindrome(str){

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanStr);

    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);

    return cleanStr === reversedStr;
}



function palindromeChecker(){

    const inputText = document.getElementById('inputText');
    const result = document.getElementById('result');

    if (isPalindrome(inputText.value)){
        result.textContent = `"${inputText.value}" Is A Palindrome`;
    }
    else{
        result.textContent = `"${inputText.value}" Is Not A Palindrome`;
    }

    result.classList.add('fadeIn');
    inputText.value = "";
}




document.getElementById('checkButton').addEventListener("click",palindromeChecker);
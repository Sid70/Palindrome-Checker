function palindrome() {

    let str = document.getElementById('Word').value;
    str = str.toLowerCase();// temp is a string (in lowercase)  
    let k = str.length; //string length
    let count = 0;
    let remove_punctuation = "";
    let temp;


    str = str.replace(/[., \/#!$%\^&\*;:{}=\-_`~()]/g, remove_punctuation);
    k = str.length;

    temp = str;

    //check palindrome
    for (let i = 0; i < str.length; i++, k--) {
        if (temp[k - 1] == str[i]) {
            count++;
        }
    }

    if (count == temp.length) {
       document.getElementById('Throw').innerHTML = "Yes, '" + str + "' is a Palindrome.";
    }

    else {
        document.getElementById('Throw').innerHTML = "No, '" + str + "' is not a Palindrome.";
    }
}



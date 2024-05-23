// Fizz Buzz
//Loop throught numbers from 1 to 100
///If a num is divisible by 3 -> Fizz
//divisible by 5 -> Buzz
//divsiible by 3 and 5 -> Fizz Buzz
//Neither -> log the number

for (let i = 0; i <= 100; i++){
    let phrase = "";
    if (i%3 !== 0 & i%5 !== 0){
        console.log(i);
    }else {
        if (i%3 === 0){
            phrase = "Fizz";
        }
        if (i%5 === 0 && phrase != ""){
            phrase = phrase + " Buzz";
        }else {
            phrase = "Buzz";
        }
        console.log(phrase);
    }
    
}
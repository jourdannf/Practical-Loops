// Fizz Buzz
//Loop throught numbers from 1 to 100
///If a num is divisible by 3 -> Fizz
//divisible by 5 -> Buzz
//divsiible by 3 and 5 -> Fizz Buzz
//Neither -> log the number

// for (let i = 0; i <= 100; i++){
//     let phrase = "";
//     if (i%3 !== 0 & i%5 !== 0){
//         console.log(i);
//     }else {
//         if (i%3 === 0){
//             phrase = "Fizz";
//         }
//         if (i%5 === 0 && phrase != ""){
//             phrase = phrase + " Buzz";
//         }else {
//             phrase = "Buzz";
//         }
//         console.log(phrase);
//     }
    
// }

// Prime Time
//Define arbitrary number, n
//Create a loop that searches fo rth next prime number
// When you find the prme number, exit the loop

//Set variable and use while loop to increment through various numbers

let n = 50;


findPrime: {
    while (n >= 50){
        let isPrime = true; //need to reset to true for the next iteration of the while loop
       
        if (n == 1 || n == 2){
            console.log(n);
            break findPrime;
        }
        
        //Check if n current value is prime
        //Check every number up until the square root of n is divisible
        //If divisible aka modulous equals 0, then break and set isPrime to false
        for (let i=2; i < Math.sqrt(n); i ++){
            if (n%i === 0){ // n is not prime
                isPrime = false;
                break;
            }
        }
        
        if (isPrime){
            console.log(n);
            break findPrime;
        }
        
        n ++;
    }
}

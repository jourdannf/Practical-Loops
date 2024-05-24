// Fizz Buzz
//Loop throught numbers from 1 to 100
///If a num is divisible by 3 -> Fizz
//If divisible by 5 -> Buzz
//If divsiible by 3 and 5 -> Fizz Buzz
//If neither -> log the number

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

// Feeling Loopy
// Loop through CSV string and store each "cell" of data in a variable
// Comma = move to the next cell
// \r\n = move to next row
// Log each row of data

//Assumptions: 4 cells per row, no escape characters other than \n

//Use for in loop 

const CSV = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let data = "";

console.log("CSV Length is " + CSV.length - 1);

for (const c in CSV) {
    if (CSV[c] !== ","){
        data += CSV[c];
    }

    if (CSV[c] === "," || CSV[c] === "\n" || Number(c) + 1 === CSV.length){
        if (!cell1){ //if the cells are empty put data in cells
            cell1 = data;
            data = "";
        }else if (!cell2){
            cell2 = data;
            data = "";
        }else if (!cell3){
            cell3 = data;
            data = "";
        }else if (!cell4){
            cell4 = data;
            data = "";
        }
    }

    //print out the cells if they're filled and then clear them for next iteration
    if (cell1 && cell2 && cell3 && cell4){ 
        console.log(cell1, cell2, cell3, cell4);
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
    }

}
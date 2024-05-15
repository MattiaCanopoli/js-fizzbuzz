'use strict'

const fizz = 'Fizz'
const buzz = 'Buzz'

for (let i = 1; i <= 100; i++) {

    //check-1: se il resto di i/3 e i/5 sono entrambi 0. operatore not (!) per invertire 0 (false) in true
    if (!(i % 3) && !(i % 5)) {
        console.log(fizz + buzz)
    }
        //check-2: se il resto di i/3 è 0 + not 
    else if (!(i % 3)) {
        console.log(fizz);
    }
        //check-3: se il resto di i/5 è 0 + not
    else if (!(i % 5)) {
        console.log(buzz)
    }

    else {
        console.log(i)
    }

}
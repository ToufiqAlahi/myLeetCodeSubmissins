// var isPowerOfTwo = function (n) {
//     if (n < 1) {
//         return false;
//     }
//     // n = 10
   
//     for (let i = 2; i < n; i++) {
//         let power = 2 ** i;

       
//         if (power === n) {
//             return true;

//         } else {
//             return false;

//         }

//     }
//     return power;

// };

//     var  r = isPowerOfTwo(16);
//     console.log(r);


var isPowerOfTwo = function (n) {
    if (n < 1) {
        return false;
    }

    let powerOfTwo = 1;
    while (powerOfTwo < n) {
        powerOfTwo *= 2;
    }
    return powerOfTwo === n;
};

var r = isPowerOfTwo(16);
console.log(r);

var r1 = isPowerOfTwo(15);
console.log(r1);

var r2 = isPowerOfTwo(64);
console.log(r2);

var r3 = isPowerOfTwo(164);
console.log(r3);

var r4 = isPowerOfTwo(256);
console.log(r4);



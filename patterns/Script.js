
// *
// **
// ***
// ****
// *****
let n2 = 5;

for (let i = 1; i <= n2; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";  // ek line me stars jodte jao
    }
    console.log(row ); // 
}




// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *




let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";  // ek line me stars jodte jao
    }
    console.log(row ); // 
}


for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = n; j >= i; j--) {
        row =row+"*";  // ek line me stars jodte jao
    }
    console.log(row ); // 
}


// 1
// 22
// 333
// 4444
// S55555

let a = 5;

for (let i = 1; i <= a; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += i;  // ek line me stars jodte jao
   
    }
    console.log(row ); //
   
}



// 1
// 12
// 123
// 1234
// 12345

let aa = 5;

for (let i = 1; i <= aa; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;  // ek line me stars jodte jao
    }
    console.log(row ); // 
}




// *****
// ****
// ***
// **
// *

let m = 5;

for (let i = 1; i <= m; i++) {
    let row = "";
    for (let j = m; j >= i; j--) {
        row =row+"*";  // ek line me stars jodte jao
    }
    console.log(row ); // 
}


// 11111
// 2222
// 333
// 44
// 5

let mm = 5;

for (let i = 1; i <= m; i++) {
    let row = "";
    for (let j = m; j >= i; j--) {
        row =row+i;  // ek line me stars jodte jao
    }
    console.log(row ); // 
}


// 54321
// 5432
// 543
// 54
// 5

let mmm = 5;

let ch="A";

for (let i = 1; i <= mmm; i++) {
    let row = "";
    for (let j = mmm; j >= i; j--) {
        row =row+ch;  // ek line me stars jodte jao

    }
    console.log(row ); // 
    ch = String.fromCharCode(ch.charCodeAt(0) + 1);        // ye js ke liye aasci code he nikala he mene net se
}



//     *
//    * *
//   * * * 
//  * * * *  
// * * * * *  




let nnn = 5;

for (let i = 1; i <= nnn; i++) {
    let row = "";
    for (let j = 1; j <= 2 * nnn - 1; j++) {
        if (j >= nnn - i + 1 && j <= nnn + i - 1) {
            row += "*";   
        } else {
            row += " ";   
        }
    }

    console.log(row);

}


//     1    
//    222   
//   33333   
//  4444444 
// 555555555


let nnnn = 5;

for (let i = 1; i <= nnnn; i++) {
    let row = "";
    for (let j = 1; j <= 2 * nnnn - 1; j++) {
        if (j >= nnnn - i + 1 && j <= nnnn + i - 1) {
            row += i;  
        } else {
            row += " ";   
        }
    }

    console.log(row);

}


let nnnnn = 5;

for (let i = 1; i <= nnnnn; i++) {
    let row = "";
    for (let j = 1; j <= 2 * nnnnn - 1; j++) {
        if (j >= nnnnn - i + 1 && j <= nnnnn + i - 1) {
            row += "*";  
        } else {
            row += " ";   
        }
    }
    console.log(row);
}


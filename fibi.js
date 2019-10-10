/*
* recomendations
* https://habr.com/ru/post/449616/
*/
function fib(n) {
   
    if (n < 0) {
        return false;
    } else if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    }

    const sequence = [0, 1];  // bad idea
 
    for (let i = 2; i <= n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }

    return sequence[n];
}


// better solution
// you don't need to store "sequence" - only prev and next
function fib(n) {
    
    if (n < 0) {
        return false;
    }
    
    let prev = 0, next = 1;

    for(let i = 0; i < n; i++){
        let temp = next;
        next = prev + next;
        prev = temp;
    }
    return prev;
}



// test
fib(3)  // 2
fib(7)  // 13
fib(17)  // 1597

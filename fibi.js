var num = [0, 1];
function fib(n) {
   
    if (n < 0) {
        return false;
    } else if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
 
        for (var i = 2; i <= n; i++) {
        num[i] = num[i - 1] + num[i - 2];      
        }
    }
return num[n];
}    
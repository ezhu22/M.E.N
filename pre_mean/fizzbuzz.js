function fizzBuzz(n){
    check = Number.isInteger(n);
    if (check == false){
        console.log ('Please enter an integer.');
        return;
    }
    else{
        if (n < 0){
            console.log('Please enter a postive integer.');
            return;
        }
        else{
            output = ''
            for (var i = 1; i <= n; i++){
                if (i % 5 == 0 && i % 3 == 0){
                    output += 'FizzBuzz';
                }
                else if (i % 5 == 0 && i % 3 != 0){
                    output += 'Buzz';
                }
                else if (i % 5 != 0 && i % 3 == 0){
                    output += 'Fizz';
                }
                else{
                    output += i.toString() ;
                }
                if (i < n - 1){
                    output += ', ';
                }
                else if( i == n){
                    continue;
                }
                else{
                    output += ' and '
                }
            }
            console.log(output);
        }
    }
}


fizzBuzz(30)
fizzBuzz('five')
fizzBuzz(-2)
function bracesValid(str){
    // console.log('this is the function start')
    bracesArr = []
    for (var i=0; i<str.length; i++){
        if (str[i] == '('){
            bracesArr.push('(');
        }
        if (str[i] == ')'){
            if (bracesArr[bracesArr.length-1] == '('){
                bracesArr.pop();
            }
            else{
                console.log('false')
                return false;
            }
        }
        if (str[i] == '['){
            bracesArr.push('[');
        }
        if (str[i] == ']'){
            if (bracesArr[bracesArr.length-1] == '['){
                bracesArr.pop();
            }
            else{
                console.log('false')
                return false;
            }
        }
        if (str[i] == '{'){
            bracesArr.push('{');
        }
        if (str[i] == '}'){
            if (bracesArr[bracesArr.length-1] == '{'){
                bracesArr.pop();
            }
            else{
                console.log('false')
                return false;
            }
        }
    }
    console.log('true')
    return true;
}

bracesValid('()')
bracesValid('(})')
bracesValid('()[]{}')
bracesValid('({}})')
bracesValid("{{()}}[]")
bracesValid("{(})")
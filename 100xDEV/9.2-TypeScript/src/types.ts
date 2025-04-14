type GreetArg = number | string | boolean;

function greet(arg: GreetArg){
    console.log(arg);
}

greet("Hi")
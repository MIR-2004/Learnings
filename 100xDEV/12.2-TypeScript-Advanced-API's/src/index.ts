interface User{
    name : string,
    age : number
}

const age = sumOfAge(
    {
        name: "mir",
        age: 21
    },
    {
        name: "Amit",
        age: 20
    }
);

function sumOfAge(guy1: User, guy2: User){
    return guy1.age + guy2.age;
}

console.log(age);




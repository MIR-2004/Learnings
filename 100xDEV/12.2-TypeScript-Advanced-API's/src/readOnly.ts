type Person = {
    name: string;
    age: number;
}

const user: Readonly<Person> = {
    name: 'John',
    age: 30
}

//user.age=12;
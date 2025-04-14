interface User{
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

function legalAge(user: User): boolean {
    return user.age >= 18;
}

function greeting(user: User): string {
    return `Hello ${user.firstName} ${user.lastName}`;
}

greeting({firstName: "Mir", lastName: "Ali", age: 20});
function Adult(age: number): boolean{
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

let isLegal = Adult(45)
function identity<T>(arg: T) {
    return arg;
}

let output1 = identity<string>("Mir");
let output2= identity<number>(1);


output1.toUpperCase();
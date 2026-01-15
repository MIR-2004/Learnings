"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const age = sumOfAge({
    name: "mir",
    age: 21
}, {
    name: "Amit",
    age: 20
});
function sumOfAge(guy1, guy2) {
    return guy1.age + guy2.age;
}
console.log(age);
//# sourceMappingURL=index.js.map
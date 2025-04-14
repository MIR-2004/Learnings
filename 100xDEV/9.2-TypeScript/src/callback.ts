function add(a: number, b:number ): number {
    return a+b;
}

function returnAfter5s(fn: () => void){
    setTimeout(fn, 5000);
}

returnAfter5s(function(){
    console.log("I am called after 5 seconds");
})

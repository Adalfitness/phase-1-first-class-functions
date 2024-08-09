function receivesAFunction (callBack){
    console.log("Hello!");
    callBack();

}
function hello(){
    console.log("recivesAFunction");
}

receivesAFunction(hello);

function returnsANamedFunction() {
    return function namedFunction(){console.log("before all")};
}

function returnsAnAnonymousFunction (){
    return function() {console.log("before all")};
}

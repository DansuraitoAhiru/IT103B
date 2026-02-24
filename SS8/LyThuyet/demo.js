const sum=(a,b) => {
    return a+b;
};

console.log("sum =", sum(10,20));

//Hàm nhận hàm khác làm tham số
function greet(name){
    return `Hello ${name}`;
};

function processUserInput(callback){
    const name="RE";
    console.log(callback(name));
}
processUserInput(greet);

// Hàm trả về một hàm khác
function multiplyBy(x){
    return function(y) {
        return x*y;
    };
};

const double = multiplyBy(2);
console.log(double(5));

// Callback
function sayHello(name){
    // name="RE"
    return `Hello ${name}`;
};

function processUser(callback){
    // callback <=>
    const name="RE";
    console.log(callback(name));
};
processUser(sayHello);
function create(){
    return Object.create(null);
}

let obj1 = new create;
let obj2 = new create;

obj1.b = 3;
obj2.b = -3

console.log(obj1.b, obj2.b);
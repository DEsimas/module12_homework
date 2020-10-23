function print(obj) {
    for(let key in obj)
        if(obj.hasOwnProperty(key))
           console.log(key + " -> " + obj[key]);
}

const user = {
   name: 'Andrei',
   surname: 'Ivanov',
   age: 18,
   position: 'developer',
};

const person = {
    city: "Moscow"
   }
const student = Object.create(person);
student.ownCity = "Piter";

print(user);
console.log('\n');
print(student);
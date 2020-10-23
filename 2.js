function hasThisProperty(obj, string) {
    for(let key in obj)
        if(obj.hasOwnProperty(key) && key == string)
            return true;
    return false;
}

const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

console.log(hasThisProperty(user, "name"));
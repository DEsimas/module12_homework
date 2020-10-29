function hasThisProperty(obj, string) {
    return string in obj;
}

const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

console.log(hasThisProperty(user, "name"));

// Задание выполнено верно, но можно было сделать то же самое проще. Выше показала, как
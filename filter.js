const oldArray = [
    {
        name: 'Vladimir Kozyro',
        age: 21,
        isMarried: true,
    },
    {
        name: 'Natalia Kozyro',
        age: 22,
        isMarried: false,
    },
    {
        name: 'Maxim Ivanov',
        age: 23,
        isMarried: false,
    },
    {
        name: 'Olesya Hromova',
        age: 21,
        isMarried: true,
    },
    {
        name: 'Nadya Sergeeva',
        age: 22,
        isMarried: true,
    },
    {
        name: 'Vika Mel',
        age: 23,
        isMarried: false,
    }
]

let newArray = Array.from(oldArray, arr => {
    return {...arr}
});

function test(array, age = null, isMarried = null, name = null) {
    let filterdedArray = JSON.parse(JSON.stringify(array));
    age ? filterdedArray = filterdedArray.filter(i => i.age === age) : filterdedArray;
    isMarried !== null ? filterdedArray = filterdedArray.filter(i => i.isMarried === isMarried) : filterdedArray;
    name ? filterdedArray = filterdedArray.filter( i => i.name.includes(name)) : filterdedArray;
    return (filterdedArray);
}

console.log(test(newArray, 23, true, 'Maxim'));



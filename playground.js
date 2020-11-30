import { randomArray } from './helpers.js'
const a = randomArray(100, 10)

const kids = [
    { name: 'Elias', age: 11, naughtyScore: 2, wish: 'Bicycle' },
    { name: 'Lotta', age: 9, naughtyScore: 7, wish: 'Hamster' },
    { name: 'Kim', age: 9, naughtyScore: 2, wish: 'Lego' },
    { name: 'José', age: 12, naughtyScore: 9, wish: 'Snowboard' },
    { name: 'Alexandra', age: 12, naughtyScore: 6, wish: 'Survival kit' },
    { name: 'Lisa', age: 10, naughtyScore: 4, wish: 'Lego' }
]

const sortByAge = (a, b) => {
    if (a.age > b.age) {
        return 1;
    }
    else {
        return -1;
    }
}

const sortByNaughtyScore = (a, b) => {
    if (a.naughtyScore > b.naughtyScore) {
        return 1;
    }
    else {
        return -1;
    }
}

const sortByName = (a, b) => {
    if (a.name.length > b.name.length) {
        return 1;
    }
    else {
        return -1;
    }
}

console.log(kids.sort(sortByName))
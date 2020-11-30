export function randomArray(len, n) {
    // Skapa en ny tom array av längd len
    const a = new Array(len)
    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }
    return a
}

export function swap(arr, number1, number2) {
    const temp = arr[number1]
    arr[number1] = arr[number2]
    arr[number2] = temp
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
}

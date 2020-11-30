import { swap } from './helpers.js'

const bubbleSort = (array) => {
    for (let j = 0; j < array.length - 1; j++) {
        for (let i = 0; i < array.length - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1)
            }
        }
    }
}
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function randomIntInRange(min, max, n = 1) {
    const arr = Array(max - min + 1);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = min++;
    }
    shuffle(arr);
    return arr.slice(0, n);
    //   return Array.from(
    //     { length: n },
    //     () => Math.floor(Math.random() * (max - min + 1)) + min
    //   );
}

export { randomIntInRange };

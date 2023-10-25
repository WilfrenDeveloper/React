function getRandomFromArr (arr) {
    let randomNum = Math.floor(Math.random() * arr.length)
    return arr[randomNum]
}

export default getRandomFromArr
const timeToEat = input => {
    input = input.split("")
    let res = input.splice(0,4)
    return res
}

console.log(timeToEat("5:50 a.m."));
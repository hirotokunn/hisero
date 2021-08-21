let _ = 0
let a = 0
let b = 0
input.onPinPressed(TouchPin.P0, function () {
    _ += 1
    if (_ == 5) {
        _ = 1
    }
    if (_ == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (_ == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (_ == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    a += 1
    basic.showNumber(a)
})
input.onGesture(Gesture.Shake, function () {
    b = 0
    a = 0
})
input.onButtonPressed(Button.AB, function () {
    if (_ == 1) {
        basic.showNumber(a + b)
    } else if (_ == 2) {
        basic.showNumber(a - b)
    } else if (_ == 3) {
        basic.showNumber(a * b)
    } else {
        basic.showNumber(a / b)
    }
})
input.onButtonPressed(Button.B, function () {
    b += 1
    basic.showNumber(b)
})

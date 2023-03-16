function 清空 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    我 = 0
    第三人 = 0
    第二人 = 0
}
input.onButtonPressed(Button.A, function () {
    if (我 == 0) {
        我 = 1
        basic.showLeds(`
            # # # # #
            . . # . #
            . . # . #
            . # . . #
            # . . # #
            `)
        for (let index = 0; index < 4; index++) {
            radio.sendValue(X, 1)
        }
    } else {
        X = "a"
        basic.showString(X)
        我 = 0
    }
})
function 比輸贏 (me: number, 玩家2: number, 玩家3: number) {
    if (me * (玩家2 * 玩家3) == 6) {
        basic.showIcon(IconNames.Asleep)
    } else if (me == 1 && 玩家2 * 玩家3 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 2 && 玩家2 * 玩家3 == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (me == 3 && 玩家2 * 玩家3 == 6) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
}
input.onButtonPressed(Button.AB, function () {
    if (我 == 0) {
        我 = 1
        basic.showLeds(`
            # # # # #
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        for (let index = 0; index < 4; index++) {
            radio.sendValue(X, 3)
        }
    } else {
        X = "c"
        basic.showString(X)
        我 = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (我 == 0) {
        我 = 1
        basic.showLeds(`
            # # # # #
            . . # . .
            . # . # #
            # . # . #
            . . # # #
            `)
        for (let index = 0; index < 4; index++) {
            radio.sendValue(X, 2)
        }
    } else {
        X = "b"
        basic.showString(X)
        我 = 0
    }
})
radio.onReceivedValue(function (name, value) {
    if (X == "a") {
        if (name == "b") {
            第二人 = value
        }
        if (name == "c") {
            第三人 = value
        }
    } else if (X == "b") {
        if (name == "a") {
            第二人 = value
        }
        if (name == "c") {
            第三人 = value
        }
    } else if (X == "c") {
        if (name == "b") {
            第二人 = value
        }
        if (name == "a") {
            第三人 = value
        }
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    if (我 * (第三人 * 第三人) != 0) {
        比輸贏(我, 第二人, 第三人)
        basic.pause(5000)
        清空()
    }
})
let X = ""
let 第二人 = 0
let 第三人 = 0
let 我 = 0
radio.setTransmitPower(7)
radio.setGroup(69)
我 = 999

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
            radio.sendValue("a", 1)
        }
    }
})
function 比輸贏 (第二人: number, 我: number, 第三人: number) {
    if (我 == 第二人 && 我 == 第三人) {
        basic.showIcon(IconNames.Asleep)
    } else if (我 == 1 && 第三人 == 2 && 第二人 == 3) {
        basic.showIcon(IconNames.Asleep)
    } else if (我 == 1 && 第三人 == 3 && 第二人 == 2) {
        basic.showIcon(IconNames.Asleep)
    } else if (我 == 2 && 第三人 == 1 && 第二人 == 3) {
        basic.showIcon(IconNames.Asleep)
    } else if (我 == 2 && 第三人 == 3 && 第二人 == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (我 == 3 && 第三人 == 1 && 第二人 == 2) {
        basic.showIcon(IconNames.Asleep)
    } else if (我 == 3 && 第三人 == 2 && 第二人 == 1) {
        basic.showIcon(IconNames.Asleep)
    } else if (我 == 1 && 第三人 == 1 && 第二人 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 1 && 第三人 == 3 && 第二人 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 1 && 第三人 == 3 && 第二人 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 2 && 第三人 == 2 && 第二人 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 2 && 第三人 == 1 && 第二人 == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 2 && 第三人 == 1 && 第二人 == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 3 && 第三人 == 2 && 第二人 == 2) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 3 && 第三人 == 2 && 第二人 == 3) {
        basic.showIcon(IconNames.Happy)
    } else if (我 == 3 && 第三人 == 3 && 第二人 == 2) {
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
            radio.sendValue("a", 3)
        }
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
            radio.sendValue("a", 2)
        }
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "b") {
        第二人 = value
    }
    if (name == "c") {
        第三人 = value
    }
    basic.pause(1000)
    if (第二人 * (我 * 第三人) != 0) {
        比輸贏(第二人, 我, 第三人)
        basic.pause(5000)
        清空()
    }
})
let 第二人 = 0
let 第三人 = 0
let 我 = 0
radio.setTransmitPower(7)
radio.setGroup(69)
清空()

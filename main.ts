let distance = 0
basic.showLeds(`
    . # # # #
    # . . . .
    . # # # .
    . . . . #
    # # # # .
    `)
basic.forever(function () {
    distance = Tinybit.Ultrasonic_Car()
    if (distance < 15) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 80)
        basic.pause(200)
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 80)
    } else {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 80)
    }
})

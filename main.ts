input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showString("ºC")
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() + 32)
    basic.showString("ºF")
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature() + 273)
    basic.showString(" K")
    basic.clearScreen()
})
let Lectura = 0
radio.setGroup(1)
basic.forever(function () {
    Lectura = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    Lectura,
    1023
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(Lectura)
    }
})

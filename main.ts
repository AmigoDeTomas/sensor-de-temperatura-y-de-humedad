input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
let Lectura = 0
radio.setGroup(1)
basic.forever(function () {
    basic.showString("temp")
    basic.showNumber(Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1))
    basic.showString("ºC")
    basic.pause(100)
    basic.showString("hum")
    basic.showNumber(Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P1))
    basic.showString("g")
    basic.pause(100)
    if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P1) >= 25) {
        music.playMelody("C5 G B A F A C5 B ", 120)
    }
})
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
        basic.showString("g")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(input.temperature() + 273)
        basic.showString(" K")
        basic.clearScreen()
    } else {
        basic.showNumber(input.temperature())
        basic.showString("ºC")
        basic.clearScreen()
    }
})

function Clear_Screens () {
    basic.clearScreen()
    OLED.clear()
}
function Water_Bowl_Check () {
    basic.showIcon(IconNames.Umbrella)
    if (Environment.ReadWaterLevel(AnalogPin.P13) < 20) {
        OLED.writeStringNewLine("Filling water bowl")
        SmartCity.turn_servo(90, AnalogPin.P10)
        basic.pause(500)
        SmartCity.turn_servo(0, AnalogPin.P10)
    } else {
        OLED.writeStringNewLine("Water is good meow")
    }
    basic.pause(500)
    Clear_Screens()
}
OLED.init(128, 64)
Clear_Screens()
basic.showIcon(IconNames.House)
OLED.writeStringNewLine("System Starting")
basic.forever(function () {
    basic.pause(100)
    Water_Bowl_Check()
})

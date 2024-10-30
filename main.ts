function plant_temperature_check () {
    if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P15) < 15) {
        OLED.writeStringNewLine("It's to cold for me please turn on the heating")
    } else if (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P15) > 25) {
        OLED.writeStringNewLine("It's to hot for me please turn on down the heat")
    } else {
        OLED.writeStringNewLine("It's a good temperature for me :)")
    }
}
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
function Soil_Check () {
    if (Environment.ReadSoilHumidity(AnalogPin.P14) < 30) {
        OLED.writeStringNewLine("The soil is to dry please water me")
    } else if (Environment.ReadWaterLevel(AnalogPin.P14) > 60) {
        OLED.writeStringNewLine("The soil is to wet please give me sunlight")
    } else {
        OLED.writeString("My soil is perfect :)")
    }
    OLED.newLine()
}
function Plants_Health () {
    basic.showIcon(IconNames.Butterfly)
    Soil_Check()
    basic.pause(2000)
    plant_temperature_check()
    basic.pause(5000)
    Clear_Screens()
}
OLED.init(128, 64)
Clear_Screens()
basic.showIcon(IconNames.House)
OLED.writeStringNewLine("System Starting")
basic.forever(function () {
    basic.pause(100)
    Water_Bowl_Check()
    basic.pause(500)
    Plants_Health()
})

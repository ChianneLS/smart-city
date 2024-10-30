function Clear_Screens () {
    basic.clearScreen()
    OLED.clear()
}
OLED.init(128, 64)
Clear_Screens()
basic.showIcon(IconNames.House)
OLED.writeStringNewLine("System Starting")
basic.forever(function () {
	
})

max7219_matrix.setup(
4,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
max7219_matrix.fillAll()
max7219_matrix.randomizeAll()
max7219_matrix.clearAll()
basic.forever(function () {
    max7219_matrix.scrollText(
    "NABA IS A GOOD GIRL !",
    60,
    500
    )
})

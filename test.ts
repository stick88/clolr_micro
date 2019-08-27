serial.redirectToUSB()
envirobit.setLEDs(1)

let led_state: boolean = false

let clap_toggle: boolean = false

let clap_count: number = 0 

let arr:string[] = ['red','green','blue','yellow','white','black','none']

basic.forever(() => {
    serial.writeLine("")
    serial.writeString(arr[envirobit.getcolor()])
    serial.writeLine("")
    
    serial.writeString(" R:")
    serial.writeNumber(envirobit.getRed())  
    serial.writeString(" G:")
    serial.writeNumber(envirobit.getGreen())
    serial.writeString(" B:")
    serial.writeNumber(envirobit.getBlue())  
    serial.writeLine("")

    basic.pause(1000)

})

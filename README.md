# rpi-car-infotainment
an infotainment system for my old lincoln towncar

This Project is an attempt at making an IVI for my old lincoln towncar replacing the radio by a custom interface giving the driver
critical information such as time and location as well as letting us control the music and our phones that way.
The hope is to be able to create a system that is so well integrated that it can be used seemlessly with any device.
In the meantime, it will be targeted towards an iPhone X running iOS 13 via bluetooth, a jack audio output and a 100% offline use,
everything on a raspberry pi 2.

## Installation
in order to run this software the following requirements for each module must be fulfilled
```
 - wpa_supplicant
	- libdbus-1-dev
```

once you downloaded this repository, you should run the following commands on linux, after being sure that you have node and npm installed and working:
```
npm install # install node.js dependencies
sudo apt-get install libdbus-1-dev
```

>**Note**: You may need to run this program or parts of it as root in order to access the full functionalities and control it is meant to have

## Current Features
- Nice and fluid interface (to be populated and implemented)
- listing of WiFi networks

## Future Features
- System information (RPi)
- System Control (RPi)
	- Power Control (shutdown/restart)
	- Wifi Control (on/off/connect/disconnect/add/remove)
- Bluetooth Control (on/off/detect/pair/unpair)
- Bluetooth Music Playing (play music from iPhone to RPi)
- Bluetooth Phone Control (place/take/refuse calls, sms & system notification (if available), & contact, all that is possible)
- SDR/FM Modulation and playing
- OBD II connection and read
- A/C control (if possible)
- Custom Boot Sequence
- Full GPS (with offline maps)
- Additional Car Controls and indicators
	- Windows Opening/Closing + Status (if available)
	- Lock/Unlock
	- Trunk opening
	- Engine Code Read/Clear
	- Lights Status + Control (if possible)
	- Additional Sensors and systems
		- Parking Sensors (to be added)
		- Back up camera
		- Door/Trunk opening sensors
		- Driver Seat Controls (if possible)

## Future Hardware
- 7" Touch Screen
- Power from the car
- Connection to:
	- OBD II / Can Bus
	- GPS/GPRS/LTE
	- additional car coponents to be added
